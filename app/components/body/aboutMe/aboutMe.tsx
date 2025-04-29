import { FC, MutableRefObject } from "react";
import portrait from "../../../assets/body/aboutMe/portrait.jpeg";
import cycling from "../../../assets/body/aboutMe/cycling.png";
import game from "../../../assets/body/aboutMe/game.png";
import Image from "next/image";
import { motion } from "framer-motion";

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
  return (
    <section
      className="flex flex-col lg:flex-row items-center justify-center gap-8 px-6 py-16 md:py-24 bg-gradient-to-b from-zinc-900 to-cyan-700"
      id="about"
      ref={componentRef}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={item}
      >
        <Image
          src={portrait}
          alt="Portrait"
          width={300}
          className="rounded mb-6"
        />
      </motion.div>
      <div className="flex flex-col items-center justify-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={item}
        >
          About Me
        </motion.h2>
        <motion.div
          className="flex items-center justify-center flex-col"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
        >
          <motion.p
            variants={item}
            className="text-lg md:text-xl max-w-7xl text-center mb-8"
          >
            {intro}
          </motion.p>

          {/* <div className="flex flex-col items-center justify-center gap-4">
            <motion.h2
              className="text-2xl md:text-3xl font-bold text-center"
              variants={item}
            >
              Hobbies
            </motion.h2>
            <motion.ul
              variants={item}
              className="flex justify-center gap-12"
              aria-label="Hobbies"
            >
              <li className="flex flex-col items-center" tabIndex={0}>
                <Image src={cycling} alt="Cycling" width={64} height={64} />
                <span>Cycling</span>
              </li>
              <li className="flex flex-col items-center" tabIndex={0}>
                <Image src={game} alt="Gaming" width={64} height={64} />
                <span>Gaming</span>
              </li>
              <li className="flex flex-col items-center" tabIndex={0}>
                <Image src={portrait} alt="Pickleball" width={64} height={64} />
                <span>Pickleball</span>
              </li>
            </motion.ul>
          </div> */}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
