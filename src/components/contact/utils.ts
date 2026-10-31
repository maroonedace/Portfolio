import type { ZodType } from "zod";

const requestTimeoutMs = 15_000;
const genericError = "Something went wrong.";

type Failure = { ok: false; error: string };

export const postJson = async <T extends { ok: boolean }>(
  path: string,
  body: unknown,
  schema: ZodType<T>,
): Promise<T | Failure> => {
  try {
    const response = await fetch(path, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      signal: AbortSignal.timeout(requestTimeoutMs),
    });
    const result = schema.safeParse(await response.json().catch(() => null));
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
