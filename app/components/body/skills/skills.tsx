import { FC, MutableRefObject } from "react";
import { skillList } from "../../../models/skill";
import SkillList from "./skillList";

interface SkillsProps {
  componentRef: MutableRefObject<HTMLDivElement>;
}

const Skills: FC<SkillsProps> = ({ componentRef }) => {
  return (
    <div ref={componentRef}>
      <div className="bg-cyan-700 px-4">
        <div className="flex items-center flex-col gap-4 bg-gray-700 rounded-2xl py-[20px] sm:py-[40px] md:py-[60px] lg:py-[80px]">
          <h2 className=" sm:text-2xl md:text-3xl lg:text-4xl">
            Technical Skills
          </h2>
          <div className="flex flex-row gap-4 flex-wrap justify-center items-center p-4 w-[85%]">
            <SkillList listOfSkills={skillList} />
          </div>
        </div>
      </div>
      <div className="px-4 pt-[124px] pb-[24px] bg-cyan-700 flex justify-center items-end">
        <div className="flex flex-col sm:flex-row items-center sm:gap-4 ">
          <h3 className="sm:text-xl md:text-2xl lg:text-3xl">Time Manager</h3>●
          <h3 className="sm:text-xl md:text-2xl lg:text-3xl">Driven</h3>●
          <h3 className="sm:text-xl md:text-2xl lg:text-3xl">
            Problem Solver
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Skills;
