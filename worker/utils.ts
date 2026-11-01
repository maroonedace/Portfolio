import type { z } from "zod";
import type { ContactResponse } from "../shared/contact";
import type { MeetingResponse } from "../shared/meeting";
import {
  MAX_BODY_BYTES,
  VERIFICATION_FAILED,
  VERIFICATION_UNAVAILABLE,
} from "./constants";
import { verifyTurnstile } from "./turnstile";

export const respond = (
  body: ContactResponse | MeetingResponse,
  status = 200,
) => Response.json(body, { status });

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

// Parses the JSON body with `schema` and verifies its Turnstile token.
// Returns the parsed fields, or the error response to send back.
export const readVerifiedRequest = async <T extends { token: string }>(
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
