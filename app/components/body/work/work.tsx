"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { works } from "./models/work";
import MotionWrapper from "../../motionWrapper";

const Work: FC = () => {
  return (
    <MotionWrapper>
      <section
        className="px-4 flex flex-col gap-8 items-center justify-center py-10 md:py-20 scroll-mt-[82px]"
        id="work"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Professional Experience
          </h2>

          <ul className="relative border-l border-white pl-6">
            {works.map((exp) => (
              <li key={exp.name} className="mb-12 ml-4">
                <span className="absolute -left-[8px] mt-8 h-4 w-4 rounded-full ring-4 ring-white" />

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-20 h-20 rounded-md bg-white relative">
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
                  <time>{exp.period}</time>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.skills.map((skill) => {
                    return (
                      <span className="bg-zinc-900 py-1 px-2 rounded-xl text-sm" key={skill}>
                        {skill}
                      </span>
                    );
                  })}
                </div>

                <ul className="mt-4 list-disc pl-5 text-sm space-y-1">
                  {exp.points.map((b) => (
                    <li key={b} className="text-base">
                      {b}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </motion.div>
      </section>
    </MotionWrapper>
  );
};

export default Work;
