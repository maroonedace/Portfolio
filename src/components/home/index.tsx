"use client";

import { type FC } from "react";

const Home: FC = () => {
  return (
    <>
      <section
        className="relative flex items-center justify-center min-h-dvh"
        id="home"
      >
        <div className="absolute inset-0 -z-10">
          <img className="object-cover w-full h-full" src="/img/hero.jpg" alt="Background" />
        </div>
        <div className="flex flex-col items-center justify-center text-center gap-12 pt-20 sm:pt-10">
          <div className="flex flex-col gap-4">
            <h1 className="text-white">Anthony Ostia</h1>

            <h2 className="text-white">Software Engineer</h2>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            <button className="clickable-button home-button" tabIndex={0}>
              View Work
            </button>
            <button className="clickable-button home-button" tabIndex={0}>
              Let's Connect
            </button>
          </div>
        </div>

        <div className="absolute bottom-8">
          <span
            className="flex cursor-pointer focus-ring hover:text-white/60"
            tabIndex={0}
          >
            <i className="ph-fill ph-arrow-down text-[64px] motion-safe:animate-bounce" />
          </span>
        </div>
      </section>
    </>
  );
};

export default Home;
