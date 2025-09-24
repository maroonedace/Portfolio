"use client";

import { FC } from "react";
import portrait from "../../../assets/body/aboutMe/portrait.jpeg";
import Image from "next/image";
import { motion } from "framer-motion";
import MotionWrapper from "../../motionWrapper";

// simple motion variants
const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const AboutMe: FC = () => {
  return (
    <MotionWrapper>
      <motion.section
        className="flex flex-col lg:flex-row items-center justify-center gap-8 px-6 pt-16 md:pt-24 bg-gradient-to-b from-zinc-900 to-cyan-900 scroll-mt-[82px]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={container}
        id="about"
      >
        <motion.div variants={item}>
          <Image
            src={portrait}
            alt="Anthony Ostia headshot"
            width={300}
            height={400}
            sizes="(min-width:768px) 300px, 60vw"
            className="w-48 h-auto md:w-[300px] rounded mb-6"
          />
        </motion.div>
        <div className="flex flex-col items-center justify-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-4"
            variants={item}
          >
            About Me
          </motion.h2>
          <motion.div className="flex items-center justify-center flex-col">
            <motion.p
              variants={item}
              className="text-lg md:text-xl max-w-7xl text-center mb-8"
            >
              I am a senior software engineer with 4 + years of experience
              delivering high-impact solutions for fast-growing startups and
              mission-driven nonprofit organizations. My primary expertise lies
              in front-end development using React, where I design responsive,
              user-centric interfaces and implement performance-optimized UI
              patterns. Complementing this, I have solid full-stack experience
              with Ruby on Rails and Node.js, enabling me to architect robust
              APIs and data pipelines that scale with business needs.
            </motion.p>
            <motion.p
              variants={item}
              className="text-lg md:text-xl max-w-7xl text-center mb-8"
            >
              Passionate about emerging technologies, I am actively integrating
              generative-AI tools into my development workflow to automate
              repetitive tasks, enhance code quality, and prototype intelligent
              features. In my spare time I explore game development, building
              small prototypes that blend creative design with solid engineering
              practices.
            </motion.p>
          </motion.div>
        </div>
      </motion.section>
    </MotionWrapper>
  );
};

export default AboutMe;
