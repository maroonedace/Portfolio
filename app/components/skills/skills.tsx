"use client";

import { FC } from "react";
import { chunkArray } from "../../utils/utils";
import { skills } from "../../../public/data/skills";
import Marquee from "./components/marquee";
import SkillLabel from "./components/skillLabel";

const Skills: FC = () => {
  const skillArray = chunkArray(skills, 4);
  return (
    <section className="px-6 pb-12">
      <div className="rounded-lg flex flex-col items-center">
        <h2 className=" text-center mb-10">
          Skills
        </h2>
        <div className="flex flex-col gap-4">
          {skillArray.map((skillList, index) => {
            return (
              <Marquee
                direction={index % 2 == 0 ? "left" : "right"}
                key={"skillList" + index}
              >
                {skillList?.map((skill) => {
                  return <SkillLabel skill={skill} key={skill.name} />;
                })}
              </Marquee>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
