import { useRef, type FC } from "react";
import { certificates, coreSkills } from "./constants";
import CertificateItem from "./certificate";
import { motion, useInView } from "motion/react";
import { fadeUp } from "../../utils";
import SkillTile from "../skills/tile";
import headshot from "../../assets/images/headshot.webp";

const AboutMeSection: FC = () => {
  const sectionRef = useRef(null);
  const stackRef = useRef(null);
  const certificateRef = useRef(null);

  const isSectionInView = useInView(sectionRef, { once: true, amount: 0.05 });
  const isStackInView = useInView(stackRef, { once: true, amount: 0.05 });
  const isCertificateInView = useInView(certificateRef, {
    once: true,
    amount: 0.05,
  });

  return (
    <section
      className="flex flex-col items-center justify-center gap-4 md:gap-12 px-4 py-16 
      bg-linear-to-b from-background to-cyan-800"
      ref={sectionRef}
      id="about"
    >
      <motion.img
        src={headshot}
        alt="Anthony Ostia headshot"
        className="rounded-lg w-72 h-96"
        initial="hidden"
        animate={isSectionInView ? "visible" : "hidden"}
        variants={fadeUp(0)}
      />
      <div className="flex flex-col gap-8 max-w-4xl">
        <div className="flex flex-col items-center justify-center">
          <motion.h2
            className="mb-4"
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
            Full Stack Software Engineer with five plus years building scalable web applications using React, Node, TypeScript, and PostgreSQL. 
            Experienced in architecting reusable UI components, provisioning cloud infrastructure, optimizing performance, and standardizing API design.
          </motion.p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <motion.h3
            className="mb-4 text-3xl md:text-5xl"
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
            {coreSkills.map((name, index) => (
              <motion.div
                key={name}
                initial="hidden"
                animate={isStackInView ? "visible" : "hidden"}
                variants={fadeUp(3 + index)}
              >
                <SkillTile name={name} />
              </motion.div>
            ))}
          </div>
        </div>
        <div
          className="flex flex-col items-center justify-center"
        >
          <motion.h3
            className="mb-4 text-3xl md:text-5xl"
            initial="hidden"
            animate={isCertificateInView ? "visible" : "hidden"}
            variants={fadeUp(4)}
          >
            Certificates
          </motion.h3>
          <div
            className="flex flex-col md:flex-row md:flex-wrap gap-4 md:gap-8 items-start justify-center"
            ref={certificateRef}
          >
            {certificates.map((certificate, index) => (
              <motion.div
                key={certificate.url}
                initial="hidden"
                animate={isCertificateInView ? "visible" : "hidden"}
                variants={fadeUp(4 + index)}
              >
                <CertificateItem certificate={certificate} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
