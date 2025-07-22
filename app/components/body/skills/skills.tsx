"use client";

import { FC } from "react";
import { techStackList } from "../../../models/skill";
import { motion } from "framer-motion";
import Image from "next/image";
import MotionWrapper from "../../motionWrapper";

const item = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
};

const Skills: FC = () => {
  return (
    <MotionWrapper>
      <section className="px-6 pt-16 md:pt-24" id="skills">
        <div className="px-8 py-16 bg-zinc-900 rounded-lg">
          <motion.h2
            className="text-3xl md:text-4xl text-white/90 font-bold text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Skills & Tech Stack
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.05,
                },
              },
            }}
          >
            {techStackList.map((list) => {
              return (
                <motion.div
                  key={list.title}
                  variants={item}
                  className={`flex flex-col gap-4 text-center`}
                >
                  <h3 className="text-2xl md:text-3xl">{list.title}</h3>
                  <ul className="flex flex-wrap gap-8 justify-center">
                    {list.skills.map((skill) => (
                      <li
                        key={`${skill.name} logo`}
                        className="flex flex-col gap-2 items-center"
                      >
                        <Image
                          src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${skill.className}`}
                          alt={skill.name}
                          loading="lazy"
                          width={80}
                          height={80}
                          className="mb-2 bg-zinc-500/70 p-2 rounded"
                        />
                        <span className="text-sm text-white/90">
                          {skill.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </MotionWrapper>
  );
};

export default Skills;
