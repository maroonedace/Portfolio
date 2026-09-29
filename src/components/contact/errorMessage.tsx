import type { ReactNode } from "react";
import { contactEmail } from "./constants";

const ErrorMessage = ({ children }: { children: ReactNode }) => (
  <p role="alert" className="text-sm text-red-400 text-center">
    {children} You can also email me at{" "}
    <a href={`mailto:${contactEmail}`} className="underline">
      {contactEmail}
    </a>
    .
  </p>
);

export default ErrorMessage;
