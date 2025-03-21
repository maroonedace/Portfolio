import { motion } from "framer-motion";
import Image from "next/image";
import { Skill } from "../../../models/skill";
import { FC } from "react";

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

interface SkillListProps {
  listOfSkills: Skill[];
  isAboveThreshold: boolean;
}

const SkillList: FC<SkillListProps> = ({ listOfSkills, isAboveThreshold }) => {
  return listOfSkills.map((skill, index) => {
    return (
      <motion.div
        key={skill.name}
        className="bg-white rounded-2xl"
        initial={{ transform: "translateY(24px)", opacity: 0 }}
        animate={isAboveThreshold ? { transform: "translateY(0px)", opacity: 1 } : {}}
        whileHover={{
          backgroundColor: hoverColor,
          transition: { duration: 0 },
        }}
        whileInView={!isAboveThreshold? { transform: "translateY(0px)", opacity: 1 }: {}}
        viewport={{ once: true }}
        transition={{ delay: 0.3 + index * 0.05 }}
      >
        <motion.div
          className="flex items-center justify-center w-full h-full rounded-2xl p-2"
          variants={variants}
          whileHover="visible"
          initial="hidden"
        >
          <motion.div variants={imageVariants}>
            <Image
              className="w-[48px] h-[48px] sm:w-[64px] sm:h-[64px] md:w-[80px] md:h-[80px] lg:w-[96px] lg:h-[96px]"
              src={skill.logo}
              alt="icon"
            />
          </motion.div>
          <motion.p
            variants={textVariants}
            className="absolute text-xs sm:text-sm md:text-base lg:text-lg p-2 text-center"
          >
            {skill.name}
          </motion.p>
        </motion.div>
      </motion.div>
    );
  });
};

export default SkillList;
