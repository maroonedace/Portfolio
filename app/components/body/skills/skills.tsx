import { FC, MutableRefObject } from "react";
import Image from "next/image";
import { skillList } from "../../../models/skill";
import { motion } from "framer-motion";

interface SkillsProps {
  componentRef: MutableRefObject<HTMLDivElement>;
}

const hoverColor = "rgb(31 41 55)"

const variants = {
  hidden: {
    background: "#FFFFFF",
  },
  visible: {
    background: hoverColor,
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
        className="flex items-center flex-col gap-4 bg-gray-700 rounded-2xl py-16"
        ref={componentRef}
      >
        <h1 className="text-white">Skills</h1>
        <div className="grid xs:grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-8">
          {skillList.map((skill, index) => {
            return (
              <motion.div
                key={skill.name}
                className="bg-white rounded-2xl w-[120px] h-[120px]"
                initial={{ transform: "translateX(-200px)", opacity: 0 }}
                whileHover={{background: hoverColor, transition: {duration: 0}}}
                whileInView={{ transform: "translateX(0px)", opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + index * 0.05 }}
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
                  <motion.p
                    variants={textVariants}
                    className="text-white absolute"
                  >
                    {skill.name}
                  </motion.p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
