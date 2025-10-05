"use client";

import { FC } from "react";
import SkillShowcase from "./skillsShowcase/skillShowcase";
import { Skill } from "./utils/useSkills";

interface SkillsProp {
  skills: Skill[];
}

const Skills: FC<SkillsProp> = ({ skills }) => {
  return (
    <section className="px-6 py-6">
      <div className="rounded-lg flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl text-white/90 font-bold text-center mb-10">
          Skills
        </h2>
        <SkillShowcase skills={skills} />
      </div>
    </section>
  );
};

export default Skills;
