import { useRef, type FC } from "react";
import { coreSkills } from "./constants";
import { motion, useInView } from "motion/react";
import { fadeUp } from "../../utils";
import useSkills from "../../services/useSkills";

const AboutMeSection: FC = () => {
  const { skills } = useSkills();

  const sectionRef = useRef(null);
  const stackRef = useRef(null);
  const certificateRef = useRef(null);

  const isSectionInView = useInView(sectionRef, { once: true, amount: 0.05 });
  const isStackInView = useInView(stackRef, { once: true, amount: 0.05 });
  const isCertificateInView = useInView(certificateRef, {
    once: true,
    amount: 0.05,
  });

  const coreSkillsData = coreSkills
    .map((skillName) => skills?.find((skill) => skill.name === skillName))
    .filter(Boolean);

  return (
    <section
      className="flex flex-col items-center justify-center gap-4 md:gap-12 px-4 py-16 
      bg-linear-to-b from-background to-cyan-800 scroll-mt-20"
      ref={sectionRef}
      id="about"
    >
      <motion.img
        src="/images/pfp.jpg"
        alt="Anthony Ostia headshot"
        className="rounded-lg w-72 h-96"
        initial="hidden"
        animate={isSectionInView ? "visible" : "hidden"}
        variants={fadeUp(0)}
      />
      <div className="flex flex-col gap-8 max-w-4xl">
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
            Full Stack Software Engineer with four years of experience building
            responsive web applications across React, TypeScript, and Node.js.
            Focus on performance optimization, clean architecture, and shipping
            maintainable code in fast-moving startup environments.
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
                variants={fadeUp(3 + index)}
              >
                <div className="flex items-center justify-center gap-2 bg-foreground py-2 px-4 rounded-xl cursor-default select-none">
                  <img
                    className="h-6 w-6"
                    src={skill?.logo}
                    alt={`${skill?.name} logo`}
                    aria-hidden="true"
                  />
                  <span className="text-background font-medium">
                    {skill?.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div
          className="flex flex-col items-center justify-center"
        >
          <motion.h3
            className="font-semibold"
            initial="hidden"
            animate={isCertificateInView ? "visible" : "hidden"}
            variants={fadeUp(4)}
          >
            Certificates
          </motion.h3>
          <motion.div
            ref={certificateRef}
            initial="hidden"
            animate={isCertificateInView ? "visible" : "hidden"}
            variants={fadeUp(4)}
          >
            <a
              href="https://www.credly.com/badges/04b12fb8-445d-412e-a9bd-0963e6221af3/public_url"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.img
                whileHover={{ y: -4, scale: 1.02 }}
                alt="AWS Certified Solutions Architect Associate badge"
                className="cursor-pointer"
                width="128"
                height="128"
                src="https://images.credly.com/size/680x680/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png"
              />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
