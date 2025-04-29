import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FC } from "react";

import hero from "../../../assets/home/hero.jpg";

// Simple stagger helper for sequential fade‑ins
const fadeUp = (i: number) => ({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  },
});

const Home: FC = () => {
  return (
    <section
      className="relative flex flex-col items-center justify-center gap-8 pt-28 pb-24 p-2 min-h-screen text-center"
      id="home"
    >
      {/* Background image with a blur effect */}
      <Image
        className="absolute h-full opacity-85 -z-10"
        priority
        src={hero}
        alt="Hero Background"
      />

      {/* Headline */}
      <motion.h1
        className="text-4xl md:text-6xl font-extrabold text-white"
        initial="hidden"
        animate="visible"
        variants={fadeUp(0)}
      >
        Hi, I'm Anthony Ostia
      </motion.h1>

      {/* Subheadline */}
      <motion.p
        className="text-lg md:text-xl text-white/90"
        initial="hidden"
        animate="visible"
        variants={fadeUp(1)}
      >
        Always looking for new opportunities to grow and engage in insightful
        conversations
      </motion.p>

      {/* Call‑to‑action buttons */}
      <motion.div
        className="flex flex-wrap justify-center gap-4"
        initial="hidden"
        animate="visible"
        variants={fadeUp(2)}
      >
        <Link
          href="#work"
          tabIndex={0}
          className="rounded-xl bg-cyan-500 text-zinc-900 px-6 py-3 font-medium transition hover:bg-cyan-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900"
        >
          View Work
        </Link>
        <Link
          href="#contact"
          tabIndex={0}
          className="rounded-xl border border-white px-6 py-3 font-medium text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900"
        >
          Let's Connect
        </Link>
      </motion.div>
    </section>
  );
};

export default Home;
