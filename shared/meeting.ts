import { z } from "zod";

export const meetingResponseSchema = z.discriminatedUnion("ok", [
  z.object({
    ok: z.literal(true),
    url: z.url({ protocol: /^https$/, hostname: /^calendly\.com$/ }),
  }),
  z.object({ ok: z.literal(false), error: z.string() }),
]);

export type MeetingResponse = z.infer<typeof meetingResponseSchema>;
