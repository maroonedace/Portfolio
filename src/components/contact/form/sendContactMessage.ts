import {
  contactResponseSchema,
  type ContactFields,
} from "../../../../shared/contact";
import { postJson } from "../utils";

export const sendContactMessage = (fields: ContactFields, token: string) =>
  postJson("/api/contact", { ...fields, token }, contactResponseSchema);
