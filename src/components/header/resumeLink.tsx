import { type FC } from "react";
import { motion } from "motion/react";
import { FileTextIcon } from "@phosphor-icons/react/FileText";
import { resumeHref } from "./constants";
import NewTabLabel from "../common/newTabLabel";

interface ResumeLinkProps {
  className: string;
  labelClassName?: string;
  onClick?: () => void;
}

const ResumeLink: FC<ResumeLinkProps> = ({ className, labelClassName, onClick }) => (
  <motion.a
    href={resumeHref}
    target="_blank"
    rel="noopener noreferrer"
    onClick={onClick}
    className={`items-center gap-2 bg-foreground text-background rounded-xl py-2 px-4 font-medium focus-ring ${className}`}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <FileTextIcon size={20} aria-hidden="true" weight="fill" />
    <NewTabLabel className={labelClassName}>Resume</NewTabLabel>
  </motion.a>
);

export default ResumeLink;
