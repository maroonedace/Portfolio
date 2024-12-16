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
        className="flex items-center flex-col gap-4 bg-gray-700 rounded-2xl py-[60px] sm:py-[80px] md:py-[100px] lg:py-[120px]"
        ref={componentRef}
      >
        <h1 className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl">Skills</h1>
        <div className="flex flex-row gap-4 flex-wrap justify-center items-center p-4">
          <SkillList listOfSkills={skillList}/>
        </div>
      </div>
    </div>
  );
};

export default Skills;
