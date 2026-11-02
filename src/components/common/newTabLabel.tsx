import { type FC, type ReactNode } from "react";

interface NewTabLabelProps {
  children: ReactNode;
  className?: string;
}

// Visible text for a link that opens in a new tab. The hint goes last so the accessible name still starts with what sighted users see.
const NewTabLabel: FC<NewTabLabelProps> = ({ children, className }) => (
  <span className={className}>
    {children}
    <span className="sr-only"> (opens in new tab)</span>
  </span>
);

export default NewTabLabel;
