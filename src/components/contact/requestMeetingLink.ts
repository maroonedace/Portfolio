import { meetingResponseSchema } from "../../../shared/meeting";
import { postJson } from "../../lib/postJson";

export const requestMeetingLink = (token: string) =>
  postJson("/api/meeting", { token }, meetingResponseSchema);
