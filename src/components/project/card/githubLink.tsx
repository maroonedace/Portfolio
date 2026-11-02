import { type FC } from "react";
import { motion } from "motion/react";
import { GitBranchIcon } from "@phosphor-icons/react/GitBranch";
import NewTabLabel from "../../common/newTabLabel";

interface GithubLinkProps {
  url: string;
  projectName: string;
}

const GithubLink: FC<GithubLinkProps> = ({ url, projectName }) => (
  <div className="flex justify-center md:justify-start">
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 bg-foreground text-background px-4 py-2 rounded-xl focus-ring"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <GitBranchIcon size={20} weight="fill" aria-hidden="true" />
      <NewTabLabel className="text-lg font-medium">
        View Code
        <span className="sr-only"> for {projectName} on GitHub</span>
      </NewTabLabel>
    </motion.a>
  </div>
);

export default GithubLink;
