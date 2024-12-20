import { FC, MutableRefObject } from "react";
import { skillList } from "../../../models/skill";
import SkillList from "../reusable/skillList";

interface SkillsProps {
  componentRef: MutableRefObject<HTMLDivElement>;
}

const Skills: FC<SkillsProps> = ({ componentRef }) => {
  return (
    <div ref={componentRef}>
      <div className="bg-cyan-700 px-4">
        <div className="flex items-center flex-col gap-4 bg-gray-700 rounded-2xl py-[20px] sm:py-[40px] md:py-[60px] lg:py-[80px]">
          <h2 className="text-white sm:text-2xl md:text-3xl lg:text-4xl">
            Technologies Utilized
          </h2>
          <div className="flex flex-row gap-4 flex-wrap justify-center items-center p-4 w-[85%]">
            <SkillList listOfSkills={skillList} />
          </div>
        </div>
      </div>
      <div className="px-4 pt-[124px] pb-[24px] bg-cyan-700 flex justify-center items-end">
        <div className="flex items-center gap-4 text-white">
          <h2 className="sm:text-2xl md:text-3xl lg:text-4xl">Time Manager</h2>●
          <h2 className="sm:text-2xl md:text-3xl lg:text-4xl">Driven</h2>●
          <h2 className="sm:text-2xl md:text-3xl lg:text-4xl">
            Problem Solver
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Skills;
