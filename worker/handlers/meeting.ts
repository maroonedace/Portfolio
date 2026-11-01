import { z } from "zod";
import { SCHEDULING_UNAVAILABLE } from "../constants";
import { tokenSchema } from "../turnstile";
import { readVerifiedRequest, respond } from "../utils";

const meetingRequestSchema = z.strictObject({ token: tokenSchema });

export const handleMeeting = async (request: Request, env: Env) => {
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
