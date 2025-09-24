import Image from "next/image";
import { Skill } from "../utils/useSkills";
import { FC } from "react";

interface SkillProps {
  skill: Skill;
}

const SkillLabel: FC<SkillProps> = ({ skill }) => {
  return (
    <div
      className="bg-gray-800 py-1 px-2 md:py-2 md:px-4 rounded flex flex-row items-center gap-2 mr-2 md:mr-4"
      key={skill.name}
    >
      <div className="h-6 w-6 md:h-12 md:w-12 relative">
        <Image layout="fill" src={skill.src} alt={skill.name} loading="lazy" />
      </div>
      <span className="text-white text-sm md:text-xl">{skill.name}</span>
    </div>
  );
};

export default SkillLabel;
