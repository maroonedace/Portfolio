"use client";

import { motion } from "framer-motion";

import Image from "next/image";
import { ProjectType } from "./utils/useProjects";
import { Skill } from "../skills/utils/useSkills";
import skillColorMap from "../models/colors";
import { FC } from "react";
import Link from "next/link";

interface WorkProps {
  projects: ProjectType[];
  skills: Skill[];
}

const Project: FC<WorkProps> = ({ projects, skills }) => {
  return (
    <section
      className="px-6 flex flex-col gap-8 items-center justify-center py-6 scroll-mt-8"
      id="projects"
    >
      <div>
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Featured Projects
        </h2>

        {projects && skills && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((p) => (
              <div
                key={p.name}
                className="rounded-2xl p-6 bg-zinc-800 flex flex-col items-center sm:items-start sm:flex-row gap-4"
              >
                <div className="flex-shrink-0">
                  <Image
                    src={p.logo}
                    alt={`${p.name} Logo`}
                    priority
                    width="200"
                    height="200"
                    className="transition-transform duration-300 rounded-2xl"
                  />
                </div>
                <div className="flex flex-col h-full">
                  <h3 className="font-semibold text-xl mb-2">{p.name}</h3>
                  <div className="flex flex-col gap-4 h-full">
                    <div className="flex flex-wrap gap-2 text-xs font-medium">
                      {p.skills.map((skillName) => {
                        const skill = skills.find((s) => s.name === skillName);
                        const colorConfig = skillColorMap[skill.slug] || {
                          bg: "#6B7280",
                          text: "#FFFFFF",
                        };
                        return (
                          <div
                            key={skillName}
                            style={{ backgroundColor: colorConfig.bg }}
                            className="rounded-xl bg-cyan-500/10 px-2 py-1 flex gap-2 items-center"
                          >
                            <div className="h-6 w-6 relative">
                              <Image
                                fill
                                src={skill.src}
                                alt={skill.name}
                                loading="lazy"
                              />
                            </div>
                            <span className="text-base">{skillName}</span>
                          </div>
                        );
                      })}
                    </div>
                    <div className="flex flex-col justify-between grow gap-4">
                      <p className="text-lg">{p.description}</p>
                      <div className="flex gap-4">
                        {p.github && (
                          <Link
                            href={p.github}
                            target="_blank"
                            tabIndex={0}
                            rel="noopener noreferrer"
                            className="focus-ring flex items-center gap-2 bg-gray-700 px-4 py-2 rounded-2xl hover:scale-110 active:scale-95"
                          >
                            <Image
                              src="/images/skills/github.svg"
                              alt="github"
                              width="32"
                              height="32"
                            />
                            <span className="text-lg font-medium">Repo</span>
                          </Link>
                        )}
                        {p.embedLink && (
                          <Link
                            href={p.embedLink}
                            target="_blank"
                            tabIndex={0}
                            rel="noopener noreferrer"
                            className="focus-ring flex items-center gap-2 bg-gray-700 px-4 py-2 rounded-2xl hover:scale-110 active:scale-95"
                          >
                            <span className="text-lg font-medium">Demo</span>
                            <Image
                              src="/images/skills/arrowupward.svg"
                              alt="github"
                              width="32"
                              height="32"
                            />
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Project;
