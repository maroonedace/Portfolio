"use client";

import { motion } from "framer-motion";
import { FC } from "react";

import MotionWrapper from "../../motionWrapper";
import { onLinkClick } from "../utils";
import Hero from "./hero";

// Simple stagger helper for sequential fade‑ins
const fadeUp = (i: number) => ({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.35, ease: "easeOut" },
  },
});

const Home: FC = () => {
  return (
    <MotionWrapper>
      <section
        className="relative flex flex-col items-center justify-center gap-8 min-h-screen text-center px-6"
        id="home"
      >
        <div className="h-full w-full absolute z-[-30] bg-zinc-900">
          <Hero
            dotSize={10}
            gap={15}
            baseColor="#164e63"
            activeColor="#FFFFFF"
            proximity={120}
            shockRadius={250}
            shockStrength={5}
            resistance={750}
            returnDuration={1.5}
          />
        </div>
        {/* Headline */}
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold text-white"
          initial="hidden"
          animate="visible"
          variants={fadeUp(0)}
        >
          Software Engineer
        </motion.h1>

        {/* Headline */}
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold text-white"
          initial="hidden"
          animate="visible"
          variants={fadeUp(1)}
        >
          Anthony Ostia
        </motion.h1>

        {/* Subheadline */}
        {/* <motion.p
          className="text-lg md:text-xl text-white/90"
          initial="hidden"
          animate="visible"
          variants={fadeUp(2)}
        >
          Always looking for new opportunities to grow and engage in insightful
          conversations
        </motion.p> */}

        {/* Call‑to‑action buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial="hidden"
          animate="visible"
          variants={fadeUp(3)}
        >
          <button
            onClick={() => onLinkClick("work")}
            tabIndex={0}
            className="rounded-xl bg-cyan-500 text-zinc-900 px-6 py-3 font-medium transition hover:bg-cyan-400 focus-ring"
          >
            View Work
          </button>
          <button
            onClick={() => onLinkClick("contact")}
            tabIndex={0}
            className="rounded-xl border border-white px-6 py-3 font-medium text-white transition hover:bg-white/10 focus-ring"
          >
            Let's Connect
          </button>
        </motion.div>

        {/* Scroll down indicator */}
        <motion.div
          className="absolute bottom-8"
          initial="hidden"
          animate="visible"
          variants={fadeUp(3)}
        >
          <span
            onClick={() => onLinkClick("about")}
            className="flex flex-col items-center cursor-pointer gap-2 focus-ring hover:text-zinc-400"
            tabIndex={0}
          >
            <i className="ph-fill ph-arrow-down text-[40px] motion-safe:animate-bounce" />
          </span>
        </motion.div>
      </section>
    </MotionWrapper>
  );
};

export default Home;
