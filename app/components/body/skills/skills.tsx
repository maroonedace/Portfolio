import { FC, MutableRefObject, useEffect, useState } from "react";
import { languageSkillList, technologySkillList } from "../../../models/skill";
import { motion } from "framer-motion";
import Image from "next/image";
import { checkAboveThreshold } from "../../../utils/check";

interface SkillsProps {
  componentRef: MutableRefObject<HTMLDivElement>;
}

const Skills: FC<SkillsProps> = ({ componentRef }) => {
  const [isAboveThreshold, setIsAboveThreshold] = useState(false);

  useEffect(() => {
    if (componentRef?.current) {
      setIsAboveThreshold(checkAboveThreshold(componentRef));
    }
  }, [componentRef]);

  return (
    <section ref={componentRef} className="mx-auto px-6 py-16 md:py-24 bg:cyan-900">
      <motion.h2
        className="text-3xl md:text-4xl text-cyan-500 font-bold text-center mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Skills & Tech Stack
      </motion.h2>

      <motion.ul
        className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.05,
            },
          },
        }}
      >
        {languageSkillList.map((skill) => (
          <motion.li
            key={skill.name}
            className="flex flex-col items-center justify-center"
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
            }}
          >
            <Image
              src={skill.logo}
              alt={skill.name}
              className="w-20 h-20 mb-2 bg-zinc-900/50 p-2 rounded"
            />
            <span className="text-sm text-cyan-500">{skill.name}</span>
          </motion.li>
        ))}

        {technologySkillList.map((skill) => (
          <motion.li
            key={skill.name}
            className="flex flex-col items-center justify-center"
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
            }}
          >
            <Image
              src={skill.logo}
              alt={skill.name}
              className="w-20 h-20 mb-2 bg-zinc-900/50 p-2 rounded"
            />
            <span className="text-sm text-cyan-500">{skill.name}</span>
          </motion.li>
        ))}
      </motion.ul>
      {/* <div className="bg-cyan-700 px-4">
        <div className="flex flex-col gap-4 bg-gray-700 rounded-2xl md:h-[90vh] p-8">
          <div className="flex flex-col text-center gap-8 h-full justify-center items-center">
            <div className="flex flex-col gap-4">
              <motion.h3
                initial={{ scale: 0, opacity: 0 }}
                animate={isAboveThreshold ? { scale: 1, opacity: 1 } : {}}
                whileInView={!isAboveThreshold ? { scale: 1, opacity: 1 } : {}}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="sm:text-xl md:text-2xl lg:text-3xl"
              >
                Languages
              </motion.h3>
              <div className="flex flex-row gap-4 flex-wrap justify-center items-center">
                <SkillList listOfSkills={languageSkillList} isAboveThreshold={isAboveThreshold} />
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <motion.h3
                initial={{ scale: 0, opacity: 0 }}
                animate={isAboveThreshold ? { scale: 1, opacity: 1 } : {}}
                whileInView={!isAboveThreshold ? { scale: 1, opacity: 1 } : {}}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="sm:text-xl md:text-2xl lg:text-3xl"
              >
                Technologies
              </motion.h3>
              <div className="flex flex-row gap-4 flex-wrap justify-center items-center">
                <SkillList listOfSkills={technologySkillList} isAboveThreshold={isAboveThreshold} />
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default Skills;
