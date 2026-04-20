import { motion, useInView } from "motion/react";
import { useRef, type FC } from "react";
import { fadeUp } from "../../utils";
import type { Project } from "./type";
import { ArrowUpRightIcon, GitBranchIcon } from "@phosphor-icons/react";
import SkillTile from "../skills/tile";

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
    <motion.div
      ref={ref}
      className="rounded-xl p-6 bg-background flex flex-col items-center md:items-start md:flex-row gap-4"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeUp(0)}
    >
      <img
        src={project.logo}
        className="w-40 h-40 rounded-xl object-cover border-2 border-foreground"
        alt={`${project.name} logo`}
      />
      <div className="flex flex-col justify-between h-full gap-4 flex-1">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <h3 className="text-center md:text-left">{project.name}</h3>
            <div className="flex flex-wrap justify-center md:justify-start gap-2">
              {project.skillNames.map((skill) => (
                <SkillTile key={`${project.name}-${skill}`} name={skill} />
              ))}
            </div>
          </div>
          <p className="text-lg leading-relaxed text-center md:text-left">
            {project.description}
          </p>
        </div>
        <div className="flex flex-wrap justify-center md:justify-start gap-4">
          {project.github && (
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.name} code on GitHub (opens in new tab)`}
              tabIndex={0}
              className="inline-flex items-center gap-2 bg-foreground text-background px-4 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-foreground 
                            focus:ring-offset-2 focus:ring-offset-background"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <GitBranchIcon size={20} weight="fill" aria-hidden="true" />
              <span className="text-lg font-medium">View Code</span>
            </motion.a>
          )}
          {project.embedLink && (
            <motion.a
              href={project.embedLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Watch ${project.name} demo video (opens in new tab)`}
              tabIndex={0}
              className="inline-flex items-center gap-2 bg-foreground text-background px-4 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-foreground 
                            focus:ring-offset-2 focus:ring-offset-background"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-lg font-medium">Watch Demo</span>
              <ArrowUpRightIcon size={20} weight="fill" aria-hidden="true" />
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
