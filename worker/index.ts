import { z } from "zod";
import { contactSchema, type ContactResponse } from "../shared/contact";
import type { MeetingResponse } from "../shared/meeting";

const TURNSTILE_VERIFY_URL =
  "https://challenges.cloudflare.com/turnstile/v0/siteverify";
const MAX_BODY_BYTES = 16 * 1024;
const VERIFICATION_FAILED = "Verification failed. Please try again.";
const VERIFICATION_UNAVAILABLE =
  "Verification is unavailable right now. Please try again later.";
const SEND_FAILED = "Failed to send.";
const SCHEDULING_UNAVAILABLE =
  "Scheduling is unavailable right now. Please try again later.";

const tokenSchema = z
  .string(VERIFICATION_FAILED)
  .min(1, VERIFICATION_FAILED)
  .max(2048, VERIFICATION_FAILED);

const contactRequestSchema = contactSchema.extend({ token: tokenSchema });
const meetingRequestSchema = z.strictObject({ token: tokenSchema });

type Verification = "passed" | "rejected" | "unavailable";

const respond = (body: ContactResponse | MeetingResponse, status = 200) =>
  Response.json(body, { status });

const readBody = async (request: Request): Promise<string | null> => {
  if (!request.body) return "";
  const reader = request.body.getReader();
  const chunks: Uint8Array[] = [];
  let size = 0;
  for (;;) {
    const { done, value } = await reader.read();
    if (done) break;
    size += value.byteLength;
    if (size > MAX_BODY_BYTES) {
      await reader.cancel();
      return null;
    }
    chunks.push(value);
  }
  const bytes = new Uint8Array(size);
  let offset = 0;
  for (const chunk of chunks) {
    bytes.set(chunk, offset);
    offset += chunk.byteLength;
  }
  return new TextDecoder().decode(bytes);
};

const parseJson = (text: string): unknown => {
  try {
    return JSON.parse(text);
  } catch {
    return null;
  }
};

const isAllowedHostname = (hostname: string | undefined, allowed: string) =>
  hostname === allowed || !!hostname?.endsWith(`.${allowed}`);

const verifyTurnstile = async (
  token: string,
  secret: string,
  ip: string,
  allowedHostname: string,
): Promise<Verification> => {
  const body = new FormData();
  body.append("secret", secret);
  body.append("response", token);
  if (ip) body.append("remoteip", ip);

  try {
    const response = await fetch(TURNSTILE_VERIFY_URL, {
      method: "POST",
      body,
      signal: AbortSignal.timeout(5000),
    });

    const result = (await response.json().catch(() => {
      throw new Error(`siteverify responded with ${response.status}`);
    })) as { success: boolean; hostname?: string; "error-codes"?: string[] };
    if (result.success) {
      if (isAllowedHostname(result.hostname, allowedHostname)) return "passed";
      console.warn("Turnstile token issued for another hostname", result.hostname);
      return "rejected";
    }

    const codes = result["error-codes"] ?? [];
    if (codes.some((code) => code.endsWith("-input-secret"))) {
      console.error("Turnstile secret key is missing or invalid", codes);
      return "unavailable";
    }
    console.warn("Turnstile rejected token", codes);
    return "rejected";
  } catch (err) {
    console.error("Turnstile siteverify request failed", err);
    return "unavailable";
  }
};

// Parses the JSON body with `schema` and verifies its Turnstile token.
// Returns the parsed fields, or the error response to send back.
const readVerifiedRequest = async <T extends { token: string }>(
  request: Request,
  env: Env,
  schema: z.ZodType<T>,
): Promise<T | Response> => {
  if (!env.TURNSTILE_SECRET_KEY) {
    console.error(
      "TURNSTILE_SECRET_KEY is not set. Run `wrangler secret put TURNSTILE_SECRET_KEY`.",
    );
    return respond({ ok: false, error: VERIFICATION_UNAVAILABLE }, 500);
  }

  const length = Number(request.headers.get("Content-Length"));
  const text = length > MAX_BODY_BYTES ? null : await readBody(request);
  if (text === null) {
    return respond({ ok: false, error: "Request too large." }, 413);
  }

  const result = schema.safeParse(parseJson(text));
  if (!result.success) {
    return respond({ ok: false, error: result.error.issues[0].message }, 400);
  }

  const ip = request.headers.get("CF-Connecting-IP") ?? "";
  const verification = await verifyTurnstile(
    result.data.token,
    env.TURNSTILE_SECRET_KEY,
    ip,
    env.TURNSTILE_HOSTNAME,
  );
  if (verification === "rejected") {
    return respond({ ok: false, error: VERIFICATION_FAILED }, 400);
  }
  if (verification === "unavailable") {
    return respond({ ok: false, error: VERIFICATION_UNAVAILABLE }, 503);
  }

  return result.data;
};

const handleContact = async (request: Request, env: Env) => {
  const fields = await readVerifiedRequest(request, env, contactRequestSchema);
  if (fields instanceof Response) return fields;
  const { name, email, message } = fields;

  try {
    await env.EMAIL.send({
      to: env.CONTACT_TO,
      from: { email: env.CONTACT_FROM, name: "Portfolio Contact" },
      replyTo: email,
      subject: `Portfolio message from ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
    });
  } catch (err) {
    const code = (err as { code?: unknown } | null)?.code;
    console.error("Failed to send contact email", code, err);
    return respond({ ok: false, error: SEND_FAILED }, 500);
  }

  return respond({ ok: true });
};

const handleMeeting = async (request: Request, env: Env) => {
  if (!env.CALENDLY_URL) {
    console.error(
      "CALENDLY_URL is not set. Run `wrangler secret put CALENDLY_URL`.",
    );
    return respond({ ok: false, error: SCHEDULING_UNAVAILABLE }, 500);
  }

  const fields = await readVerifiedRequest(request, env, meetingRequestSchema);
  if (fields instanceof Response) return fields;

  return respond({ ok: true, url: env.CALENDLY_URL });
};

const routes = new Map<
  string,
  (request: Request, env: Env) => Promise<Response>
>([
  ["/api/contact", handleContact],
  ["/api/meeting", handleMeeting],
]);

export default {
  async fetch(request, env) {
    const handler = routes.get(new URL(request.url).pathname);
    if (!handler) {
      return new Response("Not found", { status: 404 });
    }
    if (request.method !== "POST") {
      return new Response("Method not allowed", {
        status: 405,
        headers: { Allow: "POST" },
      });
    }
    return handler(request, env);
  },
} satisfies ExportedHandler<Env>;
