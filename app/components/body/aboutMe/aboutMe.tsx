"use client";

import { FC } from "react";
import Image from "next/image";

const AboutMe: FC = () => {
  return (
    <section
      className="flex flex-col md:flex-row items-center justify-center gap-8 px-6 pb-6 pt-12 bg-gradient-to-b from-zinc-900 to-cyan-900 scroll-mt-[76px]"
      id="about"
    >
      <div>
        <Image
          src="/images/aboutMe/portrait.jpg"
          alt="Anthony Ostia headshot"
          width={300}
          height={400}
          sizes="(min-width:768px) 300px, 60vw"
          className="w-48 h-auto md:w-[300px] rounded mb-6"
        />
      </div>
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          About Me
        </h2>
        <div className="flex items-center justify-center flex-col">
          <p className="text-lg md:text-xl max-w-7xl text-center mb-8">
            I am a software engineer with 4 + years of experience delivering
            high-impact solutions for fast-growing startups and mission-driven
            nonprofit organizations. My primary expertise lies in front-end
            development using React, where I design responsive, user-centric
            interfaces and implement performance-optimized UI patterns.
            Complementing this, I have solid full-stack experience with Ruby on
            Rails and Node.js, enabling me to architect robust APIs and data
            pipelines that scale with business needs.
          </p>
          <p className="text-lg md:text-xl max-w-7xl text-center mb-8">
            Passionate about emerging technologies, I am actively integrating
            generative-AI tools into my development workflow to automate
            repetitive tasks, enhance code quality, and prototype intelligent
            features. In my spare time I explore game development, building
            small prototypes that blend creative design with solid engineering
            practices.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
