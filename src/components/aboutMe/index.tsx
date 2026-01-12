import { useRef, type FC } from "react";
import { coreSkills } from "./constants";
import { motion, useInView } from "motion/react";
import { fadeUp } from "../../utils";
import useSkills from "../../services/useSkills";

const AboutMeSection: FC = () => {
  const { skills } = useSkills();

  const sectionRef = useRef(null);
  const stackRef = useRef(null);

  const isSectionInView = useInView(sectionRef, { once: true, amount: 0.05 });
  const isStackInView = useInView(stackRef, { once: true, amount: 0.05 });

  const coreSkillsData = coreSkills
    .map((skillName) => skills?.find((skill) => skill.name === skillName))
    .filter(Boolean);

  return (
    <section
      className="flex flex-col lg:flex-row items-center justify-center gap-4 md:gap-12 px-4 py-16 
      bg-linear-to-b from-background to-cyan-800 scroll-mt-20"
      ref={sectionRef}
      id="about"
    >
      <motion.img
        src="/images/pfp.jpg"
        alt="Anthony Ostia headshot"
        className="rounded-lg w-75 h-100"
        initial="hidden"
        animate={isSectionInView ? "visible" : "hidden"}
        variants={fadeUp(0)}
      />
      <div className="flex flex-col gap-8 max-w-2xl">
        <div className="flex flex-col items-center justify-center">
          <motion.h2
            className="font-semibold"
            initial="hidden"
            animate={isSectionInView ? "visible" : "hidden"}
            variants={fadeUp(1)}
          >
            About Me
          </motion.h2>
          <motion.p
            className="text-base md:text-xl text-center"
            initial="hidden"
            animate={isSectionInView ? "visible" : "hidden"}
            variants={fadeUp(2)}
          >
            Software Engineer with four years of experience building responsive, full-stack web applications and automation frameworks in agile startup environments. 
            Proven track record of delivering measurable business impact through performance optimization and automation solutions.
          </motion.p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <motion.h3
            className="font-semibold"
            initial="hidden"
            animate={isSectionInView ? "visible" : "hidden"}
            variants={fadeUp(3)}
          >
            Core Stack
          </motion.h3>
          <div
            className="flex flex-wrap gap-4 items-center justify-center"
            ref={stackRef}
          >
            {coreSkillsData.map((skill, index) => (
              <motion.div
                key={skill?.name}
                initial="hidden"
                animate={isStackInView ? "visible" : "hidden"}
                variants={fadeUp(index)}
              >
                <motion.div
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="flex flex items-center justify-center gap-2 bg-foreground py-2 px-4 rounded-xl cursor-default select-none"
                >
                  <img
                    className="h-6 w-6"
                    src={skill?.logo}
                    alt={`${skill?.name} logo`}
                    aria-hidden="true"
                  />
                  <span className="text-background font-medium">
                    {skill?.name}
                  </span>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
