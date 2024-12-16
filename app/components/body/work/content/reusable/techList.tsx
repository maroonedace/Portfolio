import { motion } from "framer-motion";
import Image from "next/image";
import { FC } from "react";
import { Skill } from "../../../../../models/skill";

interface TechSkillListProps {
  listOfSkills: Skill[];
}

const TechSkillList: FC<TechSkillListProps> = ({ listOfSkills }) => {
  return (
    <motion.div className="flex gap-4 flex-wrap">
      {listOfSkills.map((skill) => {
        return (
            <motion.div
              key={skill.name}
              className="flex items-center justify-center rounded-2xl p-2 relative bg-white"
            >
              <motion.div>
                <Image
                  className="w-[32px] h-[32px] md:w-[48px] md:h-[48px] lg:w-[64px] lg:h-[64px]"
                  src={skill.logo}
                  alt="icon"
                />
              </motion.div>
            </motion.div>
        );
      })}
    </motion.div>
  );
};

export default TechSkillList;
