import { useRef, type FC } from "react";
import { motion, useInView } from "motion/react";
import { fadeUp } from "../../utils";
import CoreStack from "./coreStack";
import CertificateList from "./certificateList";
import headshot from "../../assets/images/headshot.webp";

const AboutMeSection: FC = () => {
  const sectionRef = useRef(null);
  const isSectionInView = useInView(sectionRef, { once: true, amount: 0.05 });

  return (
    <section
      className="flex flex-col items-center justify-center gap-4 md:gap-12 px-4 py-16 
      bg-linear-to-b from-background to-cyan-800"
      ref={sectionRef}
      id="about"
      aria-labelledby="about-title"
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
            id="about-title"
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
        <CoreStack isSectionInView={isSectionInView} />
        <CertificateList />
      </div>
    </section>
  );
};

export default AboutMeSection;
