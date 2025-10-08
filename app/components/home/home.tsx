"use client";

import { motion } from "framer-motion";
import { FC } from "react";

import Image from "next/image";
import { onLinkClick } from "../../utils/utils";
import MotionWrapper from "../reusable/motionWrapper";

const fadeUp = (i: number) => ({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08 + 0.25, duration: 0.35, ease: "easeOut" },
  },
});

const Home: FC = () => {
  return (
    <MotionWrapper>
      <section
        className="relative flex items-center justify-center"
        id="home"
      >
        <div className="absolute inset-0 -z-10">
          <Image src="/images/hero/hero.jpg" alt="Background" fill objectFit="cover" />
        </div>
        <div className="flex flex-col items-center justify-center text-center gap-12 min-h-dvh">
          <div className="flex flex-col gap-4">
            <motion.h1 initial="hidden" animate="visible" variants={fadeUp(0)}>
              Anthony Ostia
            </motion.h1>

            <motion.h1 initial="hidden" animate="visible" variants={fadeUp(1)}>
              Software Engineer
            </motion.h1>
          </div>

          <motion.div
            className="flex flex-wrap justify-center gap-6"
            initial="hidden"
            animate="visible"
            variants={fadeUp(3)}
          >
            <button
              onClick={() => onLinkClick("work")}
              className="clickable-button home-button"
              tabIndex={0}
            >
              View Work
            </button>
            <button
              onClick={() => onLinkClick("contact")}
              className="clickable-button home-button"
              tabIndex={0}
            >
              Let's Connect
            </button>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8"
          initial="hidden"
          animate="visible"
          variants={fadeUp(3)}
        >
          <span
            onClick={() => onLinkClick("about")}
            className="flex cursor-pointer focus-ring hover:text-white/60"
            tabIndex={0}
          >
            <i className="ph-fill ph-arrow-down text-[64px] motion-safe:animate-bounce" />
          </span>
        </motion.div>
      </section>
    </MotionWrapper>
  );
};

export default Home;
