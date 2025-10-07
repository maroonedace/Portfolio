"use client";

import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import skillColorMap from "../../models/colors";
import { WorkType } from "../../types";
import { skills } from "../../../public/data/skills";

interface WorkProps {
  works: WorkType[];
}

const Work: FC<WorkProps> = ({ works }) => {
  return (
    <section className="px-6 py-6 scroll-mt-20" id="work">
      <div className="px-4 md:px-8 py-16 bg-zinc-800 rounded-lg flex flex-col">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Professional Experience
        </h2>
        {works && (
          <div className="px-4 md:px-12">
            <div className="relative border-l border-white pl-6">
              {works.map((exp) => {
                const startDate = format(new Date(exp.startDate), "MMM yyyy");
                const endDate = exp.endDate ? format(new Date(exp.endDate), "MMM yyyy") : "Present";
                return (
                  <div key={exp.name} className="mb-12 ml-4">
                    <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                      <div className="md:w-1/2">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                          <div className="flex items-center gap-4">
                            <div className="w-24 h-24 flex-none rounded-md bg-white relative">
                               <span className="absolute -left-12 top-10 h-4 w-4 rounded-full ring-4 ring-white" />
                              <Image
                                src={exp.logoUrl}
                                sizes="64px"
                                alt={`${exp.name} logo`}
                                className="p-2"
                                fill
                              />
                            </div>
                            <div className="flex flex-col">
                              <h3 className="font-semibold text-lg">
                                {exp.title}
                              </h3>
                              <span className="text-lg">{exp.name}</span>
                              <time className="text-lg italic">
                                {startDate} - {endDate}
                              </time>
                            </div>
                          </div>
                        </div>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {exp.skills.map((skillName) => {
                            const skill = skills.find(
                              (s) => s.name === skillName
                            );
                            const colorConfig = skillColorMap[skill.slug] || {
                              bg: "#6B7280",
                              text: "#FFFFFF",
                            };
                            return (
                              <div
                                className="py-1 px-2 rounded-xl flex gap-2 items-center"
                                style={{ backgroundColor: colorConfig.bg }}
                                key={skillName}
                              >
                                <div className="h-6 w-6 relative">
                                  <Image
                                    fill
                                    src={skill.logoUrl}
                                    alt={skill.name}
                                    loading="lazy"
                                  />
                                </div>
                                <span className="text-base">{skillName}</span>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                      <div className="mt-4 md:w-1/2 flex flex-col gap-4">
                        <ul className="list-disc">
                          {exp.descriptions.map((bullet, index) => {
                            return (
                              <li
                                key={`${exp.name}-bullet-${index}`}
                                className="text-lg"
                              >
                                {bullet}
                              </li>
                            );
                          })}
                        </ul>
                        <div className="flex">
                          <Link
                            href={exp.website}
                            target="_blank"
                            tabIndex={0}
                            rel="noopener noreferrer"
                            className="flex gap-2 bg-zinc-700 rounded-2xl py-2 px-4 focus-ring items-center transition hover:scale-110 active:scale-95"
                          >
                            <span className="text-lg">Website</span>
                            <Image
                              src="/images/skills/arrowupward.svg"
                              alt="Website"
                              width={32}
                              height={32}
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Work;
