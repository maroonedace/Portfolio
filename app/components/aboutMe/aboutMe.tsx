"use client";

import { FC } from "react";
import Image from "next/image";
import { aboutData } from "../../../public/data/about";

const AboutMe: FC = () => {
  return (
    <section
      className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-12 px-6 py-12 bg-gradient-to-b from-primary to-cyan-800 scroll-mt-20"
      id="about"
    >
      <div className="w-[300px] h-[400px] relative flex-shrink-0">
        <Image
          src="/images/aboutMe/portrait.jpg"
          alt="Anthony Ostia headshot"
          fill
          className="rounded-lg"
        />
      </div>
      <div className="flex flex-col items-center justify-center">
        <h2 className="mb-8 mt-4 md:mt-0">
          About Me
        </h2>
        <div className="flex flex-col gap-4 items-center justify-center max-w-5xl">
          {aboutData.descriptions.map((desc, index) => (
            <p
              key={index}
              className="text-center"
            >
              {desc}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
