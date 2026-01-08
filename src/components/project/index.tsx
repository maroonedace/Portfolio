import { useRef, type FC } from "react";
import SkillTile from "../skills/tile";
import { ArrowUpRightIcon, GitBranchIcon } from "@phosphor-icons/react";
import { motion, useInView } from "motion/react";
import useProjects from "../../services/useProjects";
import { fadeUp } from "../../utils";

const ProjectSection: FC = () => {
  const { projects } = useProjects();
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.3,
  });
  
  return (
    <section className="px-4 pb-6 scroll-mt-28" id="projects" ref={ref}>
      <div>
        <motion.h2
          className="mb-12 text-center"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeUp(0)}
        >
          Featured Projects
        </motion.h2>
        {projects && (
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            {projects.map((p, index) => (
              <motion.div
                key={p.name}
                className="rounded-xl p-6 bg-background flex flex-col items-center md:items-start md:flex-row gap-4"
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={fadeUp(index + 1)}
              >
                <img
                  src={p.logo}
                  className="w-40 h-40 rounded-xl"
                  alt={`${p.name} Logo`}
                />
                <div className="flex flex-col justify-between h-full gap-4">
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                      <span className="text-3xl font-semibold text-center md:text-left">
                        {p.name}
                      </span>
                      <div className="flex flex-wrap justify-center md:justify-start gap-2">
                        {p.skillNames.map((skill) => (
                          <SkillTile key={`${p.name}-${skill}`} name={skill} />
                        ))}
                      </div>
                    </div>
                    <p className="text-lg leading-relaxed text-center md:text-left">
                      {p.description}
                    </p>
                  </div>
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-wrap justify-center md:justify-start gap-4">
                      {p.github && (
                        <motion.a
                          href={p.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View ${p.name} code on GitHub (opens in new tab)`}
                          tabIndex={0}
                          className="inline-flex items-center gap-2 bg-foreground text-background px-4 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-foreground 
                            focus:ring-offset-2 focus:ring-offset-background"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <GitBranchIcon
                            size={20}
                            weight="fill"
                            aria-hidden="true"
                          />
                          <span className="text-lg font-medium">View Code</span>
                        </motion.a>
                      )}
                      {p.embedLink && (
                        <motion.a
                          href={p.embedLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Watch ${p.name} demo video (opens in new tab)`}
                          tabIndex={0}
                          className="inline-flex items-center gap-2 bg-foreground text-background px-4 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-foreground 
                            focus:ring-offset-2 focus:ring-offset-background"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <span className="text-lg font-medium">
                            Watch Demo
                          </span>
                          <ArrowUpRightIcon
                            size={20}
                            weight="fill"
                            aria-hidden="true"
                          />
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectSection;
