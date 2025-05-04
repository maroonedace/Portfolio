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
              I've spent the past&nbsp;
              <span className="font-semibold text-cyan-400">
                five&nbsp;years
              </span>
              &nbsp;building end-to-end products—from&nbsp;
              <span className="font-semibold text-cyan-400">
                immersive VR prototypes in Unity,
              </span>{" "}
              &nbsp;
              <span className="font-semibold text-cyan-400">
                data-driven analytics in Python
              </span>{" "}
              , to&nbsp;
              <span className="font-semibold text-cyan-400">
                full-stack web applications
              </span>{" "}
              . More recently I've pushed the frontier of&nbsp;
              <span className="font-semibold text-cyan-400">
                AI tooling
              </span>{" "}
              evaluating model performance and designing prompt libraries and
              task suites. Whatever the stack, I show up with a&nbsp;
              <span className="font-semibold text-cyan-400">
                relentless focus on time optimization
              </span>
              ,&nbsp;
              <span className="font-semibold text-cyan-400">
                a quick learning curve
              </span>
              , and the&nbsp;
              <span className="font-semibold text-cyan-400">
                drive to turn concepts into experiences that outperform
                expectations
              </span>
              .
            </motion.p>

            <div className="flex flex-col items-center justify-center gap-6">
              <motion.h3
                className="text-2xl md:text-3xl font-bold text-center"
                variants={item}
              >
                Hobbies
              </motion.h3>

              <motion.ul
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 place-items-center"
                aria-label="Hobbies"
              >
                <motion.li
                  variants={item}
                  className="flex flex-col items-center gap-2 text-white/90 focus-ring"
                >
                  <i
                    className="ph-fill ph-bicycle text-[32px]"
                    aria-hidden="true"
                  />
                  <span>Cycling</span>
                </motion.li>

                <motion.li
                  variants={item}
                  className="flex flex-col items-center gap-2 text-white/90 focus-ring"
                >
                  <i
                    className="ph-fill ph-game-controller text-[32px]"
                    aria-hidden="true"
                  />
                  <span>Gaming</span>
                </motion.li>

                <motion.li
                  variants={item}
                  className="flex flex-col items-center gap-2 text-white/90 focus-ring"
                >
                  <i
                    className="ph-fill ph-dice-six text-[32px]"
                    aria-hidden="true"
                  />
                  <span>Board Games</span>
                </motion.li>

                <motion.li
                  variants={item}
                  className="flex flex-col items-center gap-2 text-white/90 focus-ring"
                >
                  <i
                    className="ph-fill ph-puzzle-piece text-[32px]"
                    aria-hidden="true"
                  />
                  <span>Puzzles</span>
                </motion.li>

                <motion.li
                  variants={item}
                  className="flex flex-col items-center gap-2 text-white/90 focus-ring"
                >
                  <i
                    className="ph-fill ph-racquet text-[32px]"
                    aria-hidden="true"
                  />
                  <span>Pickleball</span>
                </motion.li>
              </motion.ul>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </MotionWrapper>
  );
};

export default AboutMe;
