"use client";

import { FC } from "react";
import { languageSkillList, technologySkillList } from "../../../models/skill";
import { motion } from "framer-motion";
import Image from "next/image";
import MotionWrapper from "../../motionWrapper";

const Skills: FC = () => {
  return (
    <MotionWrapper>
    <section className="px-6 py-16 md:py-24 bg-cyan-700">
      <div className="px-6 py-16 bg-zinc-900 rounded-lg">
        <motion.h2
          className="text-3xl md:text-4xl text-cyan-500 font-bold text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Skills & Tech Stack
        </motion.h2>

        <motion.ul
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8"
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
          {languageSkillList.map((skill) => (
            <motion.li
              key={skill.name}
              className="flex flex-col items-center justify-center"
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.4 },
                },
              }}
            >
              <Image
                src={skill.logo}
                alt={skill.name}
                className="w-20 h-20 mb-2 bg-zinc-700/50 p-2 rounded"
              />
              <span className="text-sm text-cyan-500">{skill.name}</span>
            </motion.li>
          ))}

          {technologySkillList.map((skill) => (
            <motion.li
              key={skill.name}
              className="flex flex-col items-center justify-center"
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.4 },
                },
              }}
            >
              <Image
                src={skill.logo}
                alt={skill.name}
                className="w-20 h-20 mb-2 bg-zinc-700/50 p-2 rounded"
              />
              <span className="text-sm text-cyan-500">{skill.name}</span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
    </MotionWrapper>
  );
};

export default Skills;
