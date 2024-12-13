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
}

const SkillList: FC<SkillListProps> = ({ listOfSkills }) => {
  return listOfSkills.map((skill, index) => {
    return (
      <motion.div
        key={skill.name}
        className="bg-white rounded-2xl w-[120px] h-[120px]"
        initial={{ transform: "translateX(-200px)", opacity: 0 }}
        whileHover={{
          backgroundColor: hoverColor,
          transition: { duration: 0 },
        }}
        whileInView={{ transform: "translateX(0px)", opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 + index * 0.05 }}
      >
        <motion.div
          className="flex items-center justify-center w-full h-full rounded-2xl"
          variants={variants}
          whileHover="visible"
          initial="hidden"
        >
          <motion.div variants={imageVariants}>
            <Image width="80" height="80" src={skill.logo} alt="icon" />
          </motion.div>
          <motion.p variants={textVariants} className="text-white absolute">
            {skill.name}
          </motion.p>
        </motion.div>
      </motion.div>
    );
  });
};

export default SkillList;
