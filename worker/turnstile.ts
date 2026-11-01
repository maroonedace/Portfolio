import { z } from "zod";
import { TURNSTILE_VERIFY_URL, VERIFICATION_FAILED } from "./constants";

type Verification = "passed" | "rejected" | "unavailable";

export const tokenSchema = z
  .string(VERIFICATION_FAILED)
  .min(1, VERIFICATION_FAILED)
  .max(2048, VERIFICATION_FAILED);

const isAllowedHostname = (hostname: string | undefined, allowed: string) =>
  hostname === allowed || !!hostname?.endsWith(`.${allowed}`);

export const verifyTurnstile = async (
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
