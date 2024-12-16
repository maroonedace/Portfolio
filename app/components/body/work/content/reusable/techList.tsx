import { motion } from "framer-motion";
import Image from "next/image";
import { FC } from "react";
import { Skill } from "../../../../../models/skill";

const hoverColor = "rgb(31 41 55)";

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
              className="flex items-center justify-center rounded-2xl p-2"
              variants={variants}
              whileHover="visible"
              initial="hidden"
            >
              <motion.div variants={imageVariants}>
                <Image
                  className="w-[32px] h-[32px] md:w-[48px] md:h-[48px] lg:w-[64px] lg:h-[64px]"
                  src={skill.logo}
                  alt="icon"
                />
              </motion.div>
              <motion.p variants={textVariants} className="text-white absolute">
                {skill.name}
              </motion.p>
            </motion.div>
        );
      })}
    </motion.div>
  );
};

export default TechSkillList;
