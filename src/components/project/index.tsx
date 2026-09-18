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
    <section className="px-4 py-8 bg-cyan-800" id="projects">
      <motion.h2
        className="mb-12 text-center"
        initial="hidden"
        ref={ref}
        animate={isInView ? "visible" : "hidden"}
        variants={fadeUp(0)}
      >
        Featured Projects
      </motion.h2>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
