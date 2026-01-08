import { type FC } from "react";
import { coreSkills } from "./constants";
import SkillTile from "./skillTile";
import { motion } from "motion/react";
import { fadeUp } from "../../utils";

const AboutMeSection: FC = () => {
  return (
    <section
      className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-12 px-4 py-16 
      bg-linear-to-b from-background to-cyan-800 scroll-mt-20"
      id="about"
    >
      <img
        src="/images/pfp.jpg"
        alt="Anthony Ostia headshot"
        className="rounded-lg w-75 h-100"
      />
      <div className="flex flex-col gap-8 max-w-2xl">
        <div className="flex flex-col items-center justify-center">
          <motion.h2
            className="font-semibold"
            initial="hidden"
            animate="visible"
            variants={fadeUp(0)}
          >
            About Me
          </motion.h2>
          <motion.p
            className="text-base md:text-xl text-center"
            initial="hidden"
            animate="visible"
            variants={fadeUp(1)}
          >
            Software Engineer with over four years of experience developing
            full-stack web applications that deliver functional performance and
            engaging user experience.
          </motion.p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <motion.h3
            className="font-semibold"
            initial="hidden"
            animate="visible"
            variants={fadeUp(2)}
          >
            Core Stack
          </motion.h3>
          <motion.div
            className="flex flex-wrap gap-4 items-center justify-center"
            initial="hidden"
            animate="visible"
            variants={fadeUp(3)}
          >
            {coreSkills.map((skill, index) => (
              <SkillTile name={skill} index={index} key={skill} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
