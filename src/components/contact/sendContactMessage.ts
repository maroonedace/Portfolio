import {
  contactResponseSchema,
  type ContactFields,
} from "../../../shared/contact";
import { postJson } from "../../lib/postJson";

export const sendContactMessage = (fields: ContactFields, token: string) =>
  postJson("/api/contact", { ...fields, token }, contactResponseSchema);
