"use client";

import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import { WorkType } from "../../types";
import SkillLabels from "../reusable/skillLabels";

interface WorkProps {
  works: WorkType[];
}

const Work: FC<WorkProps> = ({ works }) => {
  return (
    <section className="px-6 py-6 scroll-mt-20" id="work">
      <div className="px-4 py-12 bg-primary rounded-lg flex flex-col">
        <h2 className="mb-12 text-center">Professional Experience</h2>
        {works && (
          <div className="px-4 md:px-12">
            <div className="relative border-l border-white">
              {works.map((exp) => {
                const startDate = format(new Date(exp.startDate), "MMM yyyy");
                const endDate = exp.endDate
                  ? format(new Date(exp.endDate), "MMM yyyy")
                  : "Present";
                return (
                  <div key={exp.name} className="ml-8 mb-8">
                    <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                      <div className="md:w-1/2 relative">
                        <span className="absolute -left-10 top-10 h-4 w-4 rounded-full ring-4 ring-white" />
                        <div className="flex flex-col sm:flex-row items-center text-center sm:text-start gap-4">
                          <div className="w-24 h-24 flex-none rounded-md bg-white relative">
                            <Image
                              src={exp.logoUrl}
                              sizes="64px"
                              alt={`${exp.name} logo`}
                              className="p-2"
                              fill
                            />
                          </div>
                          <div className="flex flex-col">
                            <h6>{exp.title}</h6>
                            <span className="text-lg">{exp.name}</span>
                            <time className="text-lg italic">
                              {startDate} - {endDate}
                            </time>
                          </div>
                        </div>
                        <div className="mt-4 flex flex-wrap gap-2">
                          <SkillLabels projectSkills={exp.skillNames} />
                        </div>
                      </div>
                      <div className="mt-4 ml-4 md:w-1/2 flex flex-col gap-4">
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
                            className="flex gap-2 bg-secondary text-primary rounded-2xl py-2 px-4 focus-ring items-center transition hover:scale-110 active:scale-95"
                          >
                            <span className="text-lg">Website</span>
                            <span
                              className="flex"
                            >
                              <i className="ph-fill ph-arrow-up-right text-[32px]" />
                            </span>
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
