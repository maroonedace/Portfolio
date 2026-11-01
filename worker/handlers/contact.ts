import { contactSchema } from "../../shared/contact";
import { SEND_FAILED } from "../constants";
import { tokenSchema } from "../turnstile";
import { readVerifiedRequest, respond } from "../utils";

const contactRequestSchema = contactSchema.extend({ token: tokenSchema });

export const handleContact = async (request: Request, env: Env) => {
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
