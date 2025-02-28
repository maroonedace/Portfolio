import { FC, MutableRefObject, useEffect, useState } from "react";
import { languageSkillList, technologySkillList } from "../../../models/skill";
import SkillList from "./skillList";
import { motion } from "framer-motion";
import { checkAboveThreshold } from "../utils/check";

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
    <div ref={componentRef}>
      <div className="bg-cyan-700 px-4">
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
      </div>
    </div>
  );
};

export default Skills;
