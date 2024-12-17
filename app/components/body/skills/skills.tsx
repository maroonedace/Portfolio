import { FC, MutableRefObject } from "react";
import { skillList } from "../../../models/skill";
import SkillList from "../reusable/skillList";

interface SkillsProps {
  componentRef: MutableRefObject<HTMLDivElement>;
}

const Skills: FC<SkillsProps> = ({ componentRef }) => {
  return (
    <div className="bg-cyan-700 px-4">
      <div
        className="flex items-center flex-col gap-4 bg-gray-700 rounded-2xl py-[20px] sm:py-[40px] md:py-[60px] lg:py-[80px]"
        ref={componentRef}
      >
        <h2 className="text-white sm:text-2xl md:text-3xl lg:text-4xl">Skills</h2>
        <div className="flex flex-row gap-4 flex-wrap justify-center items-center p-4 w-[85%]">
          <SkillList listOfSkills={skillList}/>
        </div>
      </div>
    </div>
  );
};

export default Skills;
