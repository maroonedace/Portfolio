"use client";

import { FC } from "react";
import SkillShowcase from "./skillsShowcase/skillShowcase";

const Skills: FC = () => {
  return (
    <section className="px-6 py-6">
      <div className="rounded-lg flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl text-white/90 font-bold text-center mb-10">
          Skills
        </h2>
        <SkillShowcase />
      </div>
    </section>
  );
};

export default Skills;
