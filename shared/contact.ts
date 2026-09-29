import { z } from "zod";

const NAME_PATTERN = /^(?=.*\p{L})[\p{L}\p{M} '’.,-]+$/u;

const EMAIL_PATTERN =
  /^(?!\.)(?!.*\.\.)[A-Za-z0-9._%+-]{1,64}(?<!\.)@(?:[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?\.)+(?:[A-Za-z]{2,63}|xn--[A-Za-z0-9-]{1,59})$/;

const UNSAFE_TEXT_PATTERN = /[^\P{Cc}\t\n\r]|[\u202A-\u202E\u2066-\u2069]/u;

const MAX_LINKS = 3;

export const contactSchema = z.strictObject({
  name: z
    .string()
    .normalize("NFC")
    .trim()
    .min(1, "Please enter your name.")
    .max(100, "Name must be 100 characters or less.")
    .regex(NAME_PATTERN, "Name can only contain letters, spaces, and . , ' -"),
  email: z
    .string()
    .trim()
    .min(1, "Please enter your email address.")
    .max(254, "Email must be 254 characters or less.")
    .regex(EMAIL_PATTERN, "Please enter a valid email address."),
  message: z
    .string()
    .normalize("NFC")
    .trim()
    .min(10, "Please write at least 10 characters.")
    .max(5000, "Message must be 5,000 characters or less.")
    .refine(
      (message) => !UNSAFE_TEXT_PATTERN.test(message),
      "Message contains invalid characters.",
    )
    .refine(
      (message) => (message.match(/https?:\/\//gi) ?? []).length <= MAX_LINKS,
      `Please include no more than ${MAX_LINKS} links.`,
    ),
});

export type ContactFields = z.infer<typeof contactSchema>;

export const contactResponseSchema = z.discriminatedUnion("ok", [
  z.object({ ok: z.literal(true) }),
  z.object({ ok: z.literal(false), error: z.string() }),
]);

export type ContactResponse = z.infer<typeof contactResponseSchema>;
