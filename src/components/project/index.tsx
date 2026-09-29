import { useRef, type FC } from "react";
import { motion, useInView } from "motion/react";
import { fadeUp } from "../../utils";
import ProjectCard from "./card";
import { projects } from "./constants";

const ProjectSection: FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.05,
  });

  return (
    <section
      className="px-4 py-8 bg-cyan-800"
      id="projects"
      aria-labelledby="projects-title"
    >
      <motion.h2
        id="projects-title"
        className="mb-12 text-center"
        initial="hidden"
        ref={ref}
        animate={isInView ? "visible" : "hidden"}
        variants={fadeUp(0)}
      >
        Featured Projects
      </motion.h2>
      <ul role="list" className="mx-auto flex max-w-5xl flex-col gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </ul>
    </section>
  );
};

export default ProjectSection;
