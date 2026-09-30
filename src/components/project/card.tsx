import { motion, useInView } from "motion/react";
import { useRef, type FC } from "react";
import { fadeUp } from "../../utils";
import { GitBranchIcon } from "@phosphor-icons/react/GitBranch";
import SkillTile from "../skills/tile";
import DemoVideo from "./video";
import NewTabHint from "../newTabHint";
import type { Project } from "./constants";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.05,
  });

  return (
    <motion.li
      ref={ref}
      className="rounded-xl p-6 lg:p-8 bg-background flex flex-col md:flex-row items-center gap-6 lg:gap-10"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeUp(0)}
    >
      <DemoVideo src={project.video} label={project.name} />
      <div className="flex flex-col gap-6 flex-1 min-w-0">
        <div className="flex items-center justify-center md:justify-start gap-4">
          <img
            src={project.logoUrl}
            className="w-14 h-14 rounded-xl object-cover border-2 border-foreground"
            alt=""
          />
          <h3>{project.name}</h3>
        </div>
        <ul
          role="list"
          className="flex flex-wrap justify-center md:justify-start gap-2"
        >
          {project.skills.map((skill) => (
            <li key={`${project.name}-${skill}`}>
              <SkillTile name={skill} />
            </li>
          ))}
        </ul>
        <p className="text-lg leading-relaxed text-center md:text-left">
          {project.description}
        </p>
        <div className="flex flex-col gap-2 self-center md:self-start text-left">
          <h4 className="text-xl md:text-2xl">Highlights</h4>
          <ul className="list-disc pl-5 space-y-2">
            {project.highlights.map((highlight) => (
              <li key={highlight} className="text-lg leading-relaxed text-balance">
                {highlight}
              </li>
            ))}
          </ul>
        </div>
        {project.githubUrl && (
          <div className="flex justify-center md:justify-start">
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-foreground text-background px-4 py-2 rounded-xl focus-ring"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <GitBranchIcon size={20} weight="fill" aria-hidden="true" />
              <span className="text-lg font-medium">
                View Code
                <span className="sr-only"> for {project.name} on GitHub</span>
                <NewTabHint />
              </span>
            </motion.a>
          </div>
        )}
      </div>
    </motion.li>
  );
};

export default ProjectCard;
