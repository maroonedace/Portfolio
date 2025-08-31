"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import MotionWrapper from "../../motionWrapper";
import SkillShowcase from "./skillsShowcase/skillShowcase";

const Skills: FC = () => {
  return (
    <MotionWrapper>
      <section className="px-6 pt-16 md:pt-24" id="skills">
        <div className="rounded-lg flex flex-col items-center">
          <motion.h2
            className="text-3xl md:text-4xl text-white/90 font-bold text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Skills
          </motion.h2>
          <SkillShowcase />
        </div>
      </section>
    </MotionWrapper>
  );
};

export default Skills;
