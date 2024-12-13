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
    <div className="bg-cyan-700 p-4">
      <div
        className="flex items-center flex-col gap-4 bg-gray-700 rounded-2xl py-[280px]"
        ref={componentRef}
      >
        <h1 className="text-white">Skills</h1>
        <div className="grid xs:grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-8">
          <SkillList listOfSkills={skillList}/>
        </div>
      </div>
    </div>
  );
};

export default Skills;
