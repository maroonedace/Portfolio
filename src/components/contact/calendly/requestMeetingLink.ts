import { meetingResponseSchema } from "../../../../shared/meeting";
import { postJson } from "../utils";

export const requestMeetingLink = (token: string) =>
  postJson("/api/meeting", { token }, meetingResponseSchema);
