import { FC, MutableRefObject } from "react";
import Image from "next/image";
import { skillList } from "../../../models/skill";
import { motion } from "framer-motion";

interface SkillsProps {
  componentRef: MutableRefObject<HTMLDivElement>;
}

const Skills: FC<SkillsProps> = ({ componentRef }) => {
  return (
    <div
      className="flex items-center px-4 py-14 flex-col gap-4"
      ref={componentRef}
    >
      <h1 className="text-white">Skills</h1>
      <div className="flex gap-8 w-[80%] flex-wrap">
        {skillList.map((skill, index) => {
          return (
            <motion.div
              key={skill.name}
              className="bg-white rounded-2xl w-[128px] h-[128px] flex items-center justify-center"
              initial={{ transform: "translateX(-100px)" }}
              animate={{ transform: "translateX(0px)" }}
            >
              <Image width="80" height="80" src={skill.logo} alt="icon" />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
