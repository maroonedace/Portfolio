import { type FC } from "react";
import { motion } from "motion/react";
import useSkills from "../../services/useSkills";

interface SkillProps {
  name: string;
}

const SkillTile: FC<SkillProps> = ({ name }) => {
  const { skills } = useSkills();
  const skill = skills?.find((skill) => skill.name === name);
  return (
    skill && (
      <motion.div
        className="bg-foreground py-2 px-4 rounded-xl flex items-center justify-center gap-2 cursor-default select-none"
        key={skill.name}
        whileHover={{
          y: -4,
          scale: 1.02,
        }}
      >
        <img className="h-6 w-6" src={skill.logo} alt={skill.name} />
        <span className="text-background font-medium">{skill.name}</span>
      </motion.div>
    )
  );
};

export default SkillTile;
