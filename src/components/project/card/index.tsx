import { motion, useInView } from "motion/react";
import { useRef, type FC } from "react";
import { fadeUp } from "../../../utils";
import DemoVideo from "./video";
import SkillList from "../../common/skillList";
import HighlightList from "./highlightList";
import GithubLink from "./githubLink";
import type { Project } from "../constants";

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
        <SkillList skills={project.skills} />
        <p className="text-lg leading-relaxed text-center md:text-left">
          {project.description}
        </p>
        <HighlightList highlights={project.highlights} />
        {project.githubUrl && (
          <GithubLink url={project.githubUrl} projectName={project.name} />
        )}
      </div>
    </motion.li>
  );
};

export default ProjectCard;
