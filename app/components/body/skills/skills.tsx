import { FC, MutableRefObject } from "react";
import Image from "next/image";
import { skillList } from "../../../models/skill";
import { motion } from "framer-motion";
import SkillList from "../reusable/skillList";

interface SkillsProps {
  componentRef: MutableRefObject<HTMLDivElement>;
}

const hoverColor = "rgb(31 41 55)"

const variants = {
  hidden: {
    backgroundColor: "#FFFFFF",
  },
  visible: {
    backgroundColor: hoverColor,
    opacity: 0.8,
  },
};

const imageVariants = {
  hidden: {
    opacity: 1,
  },
  visible: {
    opacity: 0.5,
  },
};

const textVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

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
