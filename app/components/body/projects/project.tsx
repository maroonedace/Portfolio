"use client";

import { motion } from "framer-motion";

import Image from "next/image";
import Link from "next/link";
import useProjects from "./utils/useProjects";
import useSkills from "../skills/utils/useSkills";
import skillColorMap from "../models/colors";

const Project = () => {
  const { projects, isProjectsFetched } = useProjects();
  const { skills, isSkillsFetched } = useSkills();
  return (
    <section
      className="px-4 flex flex-col gap-8 items-center justify-center py-10 md:py-20 scroll-mt-[32px]"
      id="projects"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.1 } },
        }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Featured Projects
        </h2>

        {
          isProjectsFetched && projects && skills && isSkillsFetched && (

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((p) => (
                <motion.article
                  key={p.name}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  className="rounded-2xl py-4 px-2 bg-zinc-800"
                >
                  <div className="flex items-center justify-center">
                    <Image
                      src={p.logo}
                      alt={`${p.name} Logo`}
                      priority
                      width="256"
                      height="256"
                      className="transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6 flex flex-col">
                    <div className="flex flex-col gap-4">
                      <h3 className="font-semibold text-lg">{p.name}</h3>
                      <div className="flex flex-wrap gap-2 text-xs font-medium">
                        {p.skills.map((skillName) => {
                          const skill = skills.find(s => s.name === skillName);
                          const colorConfig = skillColorMap[skill.slug] || { bg: "#6B7280", text: "#FFFFFF" };
                          return (
                            <div
                              key={skillName}
                              style={{backgroundColor: colorConfig.bg}}
                              className="rounded-xl bg-cyan-500/10 px-2 py-1 flex gap-2 items-center"
                            >
                              <div className="h-6 w-6 relative">
                                <Image fill src={skill.src} alt={skill.name} loading="lazy" />
                              </div>
                              <span>
                                {skillName}
                              </span>
                            </div>
                          )
                        })}
                      </div>
                      <p className="text-md">{p.description}</p>
                    </div>
                    <div className="flex gap-4 pt-6">
                      {p.embedLink && (
                        <Link
                          href={p.embedLink}
                          target="_blank"
                          tabIndex={0}
                          rel="noopener noreferrer"
                          className="text-sm font-medium underline hover:text-zinc-400 underline-offset-4 focus-ring"
                        >
                          Live demo
                        </Link>
                      )}
                      {p.github && (
                        <Link
                          href={p.github}
                          target="_blank"
                          tabIndex={0}
                          rel="noopener noreferrer"
                          className="text-sm font-medium underline hover:text-zinc-400 underline-offset-4 focus-ring"
                        >
                          Source
                        </Link>
                      )}
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
      </motion.div>
    </section>
  );
};

export default Project;
