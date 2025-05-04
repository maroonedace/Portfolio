"use client";

import { FC } from "react";
import {
  techStackList,
} from "../../../models/skill";
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
            {techStackList.map((skill) => (
              <motion.li
                key={`${skill.name} logo`}
                className="flex flex-col gap-2 items-center"
                variants={item}
              >
                <Image
                  src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${skill.className}`}
                  alt={skill.name}
                  loading="lazy"
                  width={80}
                  height={80}
                  className="mb-2 bg-zinc-700/50 p-2 rounded"
                />
                <span className="text-sm text-white/90">{skill.name}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>
    </MotionWrapper>
  );
};

export default Skills;
