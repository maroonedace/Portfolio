import { useRef, type FC } from "react";
import { motion, useInView } from "motion/react";
import { fadeUp } from "../../utils";
import { coreSkills } from "./constants";
import SkillTile from "../common/skillTile";

interface CoreStackProps {
  isSectionInView: boolean;
}

const CoreStack: FC<CoreStackProps> = ({ isSectionInView }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.05 });

  return (
    <div className="flex flex-col items-center justify-center">
      <motion.h3
        className="mb-4 text-3xl md:text-5xl"
        initial="hidden"
        animate={isSectionInView ? "visible" : "hidden"}
        variants={fadeUp(3)}
      >
        Core Stack
      </motion.h3>
      <ul
        role="list"
        className="flex flex-wrap gap-4 items-center justify-center"
        ref={ref}
      >
        {coreSkills.map((name, index) => (
          <motion.li
            key={name}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeUp(index)}
          >
            <SkillTile name={name} />
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default CoreStack;
