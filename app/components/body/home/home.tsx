"use client";

import { motion } from "framer-motion";
import { FC, useEffect } from "react";

import { onLinkClick } from "../utils";
import Image from "next/image";
import MotionWrapper from "../../reusable/motionWrapper";

// Simple stagger helper for sequential fade‑ins
const fadeUp = (i: number) => ({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: (i * 0.08) + 0.25, duration: 0.35, ease: "easeOut" },
  },
});

const Home: FC = () => {
  return (
    <MotionWrapper>
      <section
        className="relative flex flex-col items-center justify-center gap-8 min-h-dvh text-center px-6"
        id="home"
      >
        <div className="absolute inset-0 z-[-30] bg-zinc-800">
          <Image src="/images/hero/hero.jpg" alt="Background" fill />
        </div>
        {/* Headline */}
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold text-white"
          initial="hidden"
          animate="visible"
          variants={fadeUp(0)}
        >
          Anthony Ostia
        </motion.h1>

        {/* Headline */}
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold text-white"
          initial="hidden"
          animate="visible"
          variants={fadeUp(1)}
        >
          Software Engineer
        </motion.h1>

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
            className="rounded-xl bg-cyan-500 text-zinc-900 px-6 py-3 font-medium transition hover:bg-cyan-400 focus-ring hover:scale-110 active:scale-95"
          >
            View Work
          </button>
          <button
            onClick={() => onLinkClick("contact")}
            tabIndex={0}
            className="rounded-xl border border-white px-6 py-3 font-medium text-white transition hover:bg-white/10 focus-ring hover:scale-110 active:scale-95"
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
            className="flex cursor-pointer focus-ring hover:text-zinc-400"
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
