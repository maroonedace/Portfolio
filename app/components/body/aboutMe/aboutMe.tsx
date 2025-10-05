"use client";

import { FC } from "react";
import Image from "next/image";

const AboutMe: FC = () => {
  return (
    <section
      className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-12 px-6 pb-6 pt-12 bg-gradient-to-b from-zinc-900 to-cyan-900 scroll-mt-20"
      id="about"
    >
      <Image
        src="/images/aboutMe/portrait.jpg"
        alt="Anthony Ostia headshot"
        width={300}
        height={400}
        className="w-48 h-auto md:w-[300px] rounded mb-6"
      />
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          About Me
        </h2>
        <div className="flex items-center justify-center flex-col">
          <p className="text-lg md:text-xl max-w-4xl text-center mb-8">
            I am a software engineer with over four years of experience
            delivering impactful solutions for fast-growing startups and
            mission-driven organizations. My primary expertise lies in front-end
            development, where I create responsive, user-focused interfaces and
            optimize for performance and accessibility. On the backend, I build
            and maintain scalable APIs and reliable data pipelines that align
            with evolving business need. I am also familiar with CI/CD best
            practices and deploying full stack applications on modern hosting
            platforms.
          </p>
          <p className="text-lg md:text-xl max-w-4xl text-center mb-8">
            I take pride in collaborating closely with cross-functional teams,
            adapting to evolving challenges, and continuously refining my craft
            through experimentation and learning. I am currently exploring how
            generative AI can enhance development workflows by automating
            repetitive tasks and accelerating feature prototyping. Outside of
            work, I enjoy building small game prototypes that combine creativity
            with solid engineering fundamentals.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
