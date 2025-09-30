"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import MotionWrapper from "../../motionWrapper";
import useWork from "./utils/useWork";
import useSkills from "../skills/utils/useSkills";
import skillColorMap from "../models/colors";
import Link from "next/link";

const Work: FC = () => {
  const { works, isWorkFetched } = useWork();
  const { skills, isSkillsFetched } = useSkills();
  return (
    <MotionWrapper>
      <section className="px-6 pt-16 md:pt-24 scroll-mt-[32px]" id="work">
        <motion.div
          className="px-4 md:px-8 py-16 bg-zinc-800 rounded-lg flex flex-col"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Professional Experience
          </h2>
          {isWorkFetched && works && skills && isSkillsFetched && (
            <div className="px-4 md:px-12">
              <div className="relative border-l border-white pl-6">
                {works.map((exp) => (
                  <div key={exp.name} className="mb-12 ml-4">
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-1/2">
                        <span className="absolute -left-[8px] mt-8 h-4 w-4 rounded-full ring-4 ring-white" />

                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                          <div className="flex items-center gap-4">
                            <div className="w-20 h-20 flex-none rounded-md bg-white relative">
                              <Image
                                src={exp.logo}
                                alt={`${exp.name} logo`}
                                sizes="80px"
                                className="p-2"
                                fill
                              />
                            </div>
                            <div>
                              <h3 className="font-semibold">{exp.title}</h3>
                              <span>{exp.name}</span>
                            </div>
                          </div>
                          {/* <time>{exp.period}</time> */}
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
                                    src={skill.src}
                                    alt={skill.name}
                                    loading="lazy"
                                  />
                                </div>
                                <span className="text-sm">{skillName}</span>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                      <div className="mt-4 md:w-1/2 flex flex-col gap-4">
                        <p className="text-md">{exp.description}</p>
                        <div className="flex">
                          <motion.a
                            href={exp.website}
                            target="_blank"
                            tabIndex={0}
                            rel="noopener noreferrer"
                            className="flex gap-2 bg-gray-500 rounded-2xl py-2 px-4 focus-ring"
                            initial={{ scale: 1 }}
                            whileHover={{ scale: 1.1 }}
                          >
                            <span>Website</span>
                            <Image
                              src="/images/skills/arrowupward.svg"
                              alt="Website"
                              width={24}
                              height={24}
                            />
                          </motion.a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </section>
    </MotionWrapper>
  );
};

export default Work;
