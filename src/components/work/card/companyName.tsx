import { type FC } from "react";
import { ArrowUpRightIcon } from "@phosphor-icons/react/ArrowUpRight";
import NewTabLabel from "../../common/newTabLabel";

interface CompanyNameProps {
  name: string;
  websiteUrl?: string;
}

const CompanyName: FC<CompanyNameProps> = ({ name, websiteUrl }) =>
  websiteUrl ? (
    <a
      href={websiteUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="self-center md:self-start inline-flex items-center gap-1 text-xl font-medium hover:underline
                underline-offset-4 hover:text-foreground/70 rounded focus-ring"
    >
      <NewTabLabel>{name}</NewTabLabel>
      <ArrowUpRightIcon size={18} aria-hidden="true" weight="fill" />
    </a>
  ) : (
    <span className="text-xl font-medium">{name}</span>
  );

export default CompanyName;
