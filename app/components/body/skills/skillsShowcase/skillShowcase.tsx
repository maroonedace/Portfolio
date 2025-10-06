import chunkArray from "../../../../utils/utils";
import Marquee from "./marquee";
import SkillLabel from "./skillLabel";
import { FC } from "react";
import { skills } from "../../../../data/skills";

const SkillShowcase: FC= () => {
  const skillArray = chunkArray(skills, 3);
  return (
    <div className="flex flex-col gap-4">
      {skillArray.map((skillList, index) => {
        return (
          <Marquee
            direction={index % 2 == 0 ? "left" : "right"}
            key={"skillList" + index}
          >
            {skillList?.map((skill) => {
              return (
                <SkillLabel skill={skill} key={skill.name} />
              );
            })}
          </Marquee>
        );
      })}
    </div>
  );
};

export default SkillShowcase;
