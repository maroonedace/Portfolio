import { FC, MutableRefObject, useEffect, useState } from "react";
import portrait from "../../../assets/home/portrait.jpeg";
import Image from "next/image";
import { motion } from "framer-motion";
import { checkAboveThreshold } from "../utils/check";

// simple motion variants
const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const intro = `As a software engineer who has over 5 years of software development
            experience, I have found myself working on a variety of
            opportunities ranging from working in virtual reality experiences in
            Unity, focused on creating data analysis visualizations and reports
            with Python, and getting familiar with the full stack development
            utilizing many frameworks such as React.js, Ruby on Rails, and
            PostgreSQL.`;

interface AboutMeProps {
  componentRef: MutableRefObject<HTMLDivElement>;
}

const AboutMe: FC<AboutMeProps> = ({ componentRef }) => {
  const [isAboveThreshold, setIsAboveThreshold] = useState(false);

  useEffect(() => {
    if (componentRef?.current) {
      setIsAboveThreshold(checkAboveThreshold(componentRef));
    }
  }, [componentRef]);

  return (
    <section
      className="mx-auto px-6 py-24 md:py-32 bg-cyan-700 bg-gradient-to-b from-[#010005] from-1% to-cyan-700"
      id="about"
      ref={componentRef}
    >
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-8 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={item}
      >
        About Me
      </motion.h2>
      <motion.div
        className="space-y-6 text-lg leading-relaxed"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={container}
      >
        <motion.p variants={item}>{intro}</motion.p>

        {/* Hobbies icons */}
        <motion.ul
          variants={item}
          className="flex justify-center gap-12 pt-10"
          aria-label="Hobbies"
        >
          <li className="flex flex-col items-center" tabIndex={0}>
            <Image src={portrait} alt="Cycling" width={64} height={64} />
            <span>Cycling</span>
          </li>
          <li className="flex flex-col items-center" tabIndex={0}>
            <Image src={portrait} alt="Gaming" width={64} height={64} />
            <span>Gaming</span>
          </li>
          <li className="flex flex-col items-center" tabIndex={0}>
            <Image src={portrait} alt="Pickleball" width={64} height={64} />
            <span>Pickleball</span>
          </li>
        </motion.ul>
      </motion.div>
    </section>
  );
};

export default AboutMe;
