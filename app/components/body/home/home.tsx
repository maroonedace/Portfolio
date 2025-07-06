"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FC } from "react";

import hero from "../../../assets/body/home/hero.jpg";
import MotionWrapper from "../../motionWrapper";
import { onLinkClick } from "../utils";

// Simple stagger helper for sequential fade‑ins
// const fadeUp = (i: number) => ({
//   hidden: { opacity: 0, y: 20 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
//   },
// });

const Home: FC = () => {
  return (
    <MotionWrapper>
      <section
        className="relative flex flex-col items-center justify-center gap-8 min-h-screen text-center px-6"
        id="home"
      >
        <div className="pointer-events-none absolute inset-0 -z-20 bg-zinc-900/30" />
        <Image
          className="object-cover -z-30"
          fill
          src={hero}
          priority
          sizes="100vw"
          alt="Hero Background"
        />

        {/* Headline */}
        <h1
          className="text-4xl md:text-6xl font-extrabold text-white"
          // initial="hidden"
          // animate="visible"
          // variants={fadeUp(0)}
        >
          Hi, I'm Anthony Ostia
        </h1>

        {/* Subheadline */}
        <p
          className="text-lg md:text-xl text-white/90"
          // initial="hidden"
          // animate="visible"
          // variants={fadeUp(1)}
        >
          Always looking for new opportunities to grow and engage in insightful
          conversations
        </p>

        {/* Call‑to‑action buttons */}
        <div
          className="flex flex-wrap justify-center gap-4"
          // initial="hidden"
          // animate="visible"
          // variants={fadeUp(2)}
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
        </div>

        {/* Scroll down indicator */}
        <div
          className="absolute bottom-8"
          // initial="hidden"
          // animate="visible"
          // variants={fadeUp(3)}
        >
          <span
            onClick={() => onLinkClick("about")}
            className="flex flex-col items-center cursor-pointer gap-2 focus-ring hover:text-zinc-300"
            tabIndex={0}
          >
            <i className="ph-fill ph-arrow-down text-[40px] motion-safe:animate-bounce" />
          </span>
        </div>
      </section>
    </MotionWrapper>
  );
};

export default Home;
