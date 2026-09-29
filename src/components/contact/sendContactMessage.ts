import {
  contactResponseSchema,
  type ContactFields,
  type ContactResponse,
} from "../../../shared/contact";

const requestTimeoutMs = 15_000;
const genericError = "Something went wrong.";

export const sendContactMessage = async (
  fields: ContactFields,
  token: string,
): Promise<ContactResponse> => {
  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...fields, token }),
      signal: AbortSignal.timeout(requestTimeoutMs),
    });
    const result = contactResponseSchema.safeParse(
      await response.json().catch(() => null),
    );
    if (!result.success || (result.data.ok && !response.ok)) {
      return { ok: false, error: genericError };
    }
    return result.data;
  } catch (err) {
    const timedOut = err instanceof DOMException && err.name === "TimeoutError";
    return {
      ok: false,
      error: timedOut
        ? "The request timed out. Please try again."
        : "Couldn't reach the server. Please try again.",
    };
  }
};
