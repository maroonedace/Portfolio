import { type FC } from "react";
import { motion } from "motion/react";
import { easeInOut } from "motion/react";
import useSkills from "../../services/useSkills";

interface SkillProps {
  name: string;
  index: number;
}

const fadeUp = (i: number) => ({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1 + 0.5, duration: 0.35, ease: easeInOut },
  },
});

const SkillTile: FC<SkillProps> = ({ name, index }) => {
  const { skills } = useSkills();
  const skill = skills?.find((skill) => skill.name === name);
  return (
    skill && (
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp(index)}
        key={skill.name}
      >
        <motion.div
          className="bg-foreground py-2 px-4 rounded-xl flex items-center justify-center gap-2 cursor-default select-none"
          whileHover={{
            y: -4,
            scale: 1.02,
          }}
        >
          <img className="h-6 w-6" src={skill.logo} alt={skill.name} />
          <span className="text-background font-medium">{skill.name}</span>
        </motion.div>
      </motion.div>
    )
  );
};

export default SkillTile;
