"use client";

import Image from "next/image";
import { FC } from "react";
import Link from "next/link";
import { ProjectType } from "../../types";
import SkillLabels from "../reusable/skillLabels";

interface ProjectProps {
  projects: ProjectType[];
}

const Project: FC<ProjectProps> = ({ projects }) => {
  return (
    <section
      className="px-6 flex flex-col gap-8 items-center justify-center py-6 scroll-mt-20"
      id="projects"
    >
      <div>
        <h2 className="mb-12 text-center">Featured Projects</h2>

        {projects && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((p) => (
              <div
                key={p.name}
                className="rounded-xl p-6 bg-primary flex flex-col items-center sm:items-start sm:flex-row gap-4"
              >
                <div className="flex-shrink-0 h-[200px] w-[200px] relative">
                  <Image
                    src={p.logoUrl}
                    alt={`${p.name} Logo`}
                    priority
                    fill
                    sizes="160px"
                    className="rounded-xl"
                  />
                </div>
                <div className="flex flex-col h-full">
                  <h6 className="mb-2">{p.name}</h6>
                  <div className="flex flex-col gap-4 h-full">
                    <div className="flex flex-wrap gap-2 text-xs font-medium">
                      <SkillLabels projectSkills={p.skillNames} />
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
                            className="focus-ring flex items-center gap-2 bg-secondary text-primary px-4 py-2 rounded-2xl transition hover:scale-110 active:scale-95"
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
                            className="focus-ring flex items-center gap-2 bg-secondary text-primary px-4 py-2 rounded-2xl transition hover:scale-110 active:scale-95"
                          >
                            <span className="text-lg font-medium">Demo</span>
                            <i className="ph-fill ph-arrow-up-right text-[32px]" />
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
