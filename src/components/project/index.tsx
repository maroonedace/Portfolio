import { useRef, type FC } from "react";
import { motion, useInView } from "motion/react";
import useProjects from "../../services/useProjects";
import { fadeUp } from "../../utils";
import ProjectCard from "./card";

const ProjectSection: FC = () => {
  const { projects } = useProjects();
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.05,
  });

  return (
    <section className="px-4 pb-6 scroll-mt-28" id="projects">
      <motion.h2
        className="mb-12 text-center"
        initial="hidden"
        ref={ref}
        animate={isInView ? "visible" : "hidden"}
        variants={fadeUp(0)}
      >
        Featured Projects
      </motion.h2>
      {projects && (
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          {projects.map((p, index) => (
            <ProjectCard key={p.name} project={p} index={index} />
          ))}
        </div>
      )}
    </section>
  );
};

export default ProjectSection;
