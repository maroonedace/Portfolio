"use client";

import { FC } from "react";
import Image from "next/image";
import { aboutData } from "../../../data/about";

const AboutMe: FC = () => {
  return (
    <section
      className="flex flex-col md:flex-row items-center justify-center gap-8 px-6 pb-6 pt-12 bg-gradient-to-b from-zinc-900 to-cyan-900 scroll-mt-8"
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
          {aboutData.descriptions.map((desc, index) => (
            <p
              key={index}
              className="text-lg md:text-xl max-w-7xl text-center mb-8"
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
