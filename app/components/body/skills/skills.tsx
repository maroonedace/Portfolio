import { FC, MutableRefObject } from "react";
import { languageSkillList, technologySkillList } from "../../../models/skill";
import SkillList from "./skillList";
import { motion } from "framer-motion";

interface SkillsProps {
  componentRef: MutableRefObject<HTMLDivElement>;
}

const Skills: FC<SkillsProps> = ({ componentRef }) => {
  return (
    <div ref={componentRef}>
      <div className="bg-cyan-700 px-4">
        <div className="flex flex-col gap-4 bg-gray-700 rounded-2xl h-[85vh] p-8">
          <div className="flex flex-col text-center gap-8 h-full justify-center items-center">
            <div className="flex flex-col gap-4">
              <h3 className="sm:text-xl md:text-2xl lg:text-3xl">Languages</h3>
              <div className="flex flex-row gap-4 flex-wrap justify-center items-center">
                <SkillList listOfSkills={languageSkillList} />
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="sm:text-xl md:text-2xl lg:text-3xl">Technologies</h3>
              <div className="flex flex-row gap-4 flex-wrap justify-center items-center">
                <SkillList listOfSkills={technologySkillList} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
