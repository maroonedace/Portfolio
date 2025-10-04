import Image from "next/image";
import { Skill } from "../utils/useSkills";
import { FC } from "react";

interface SkillProps {
  skill: Skill;
}

const SkillLabel: FC<SkillProps> = ({ skill }) => {
  return (
    <div
      className="bg-gray-800 py-2 px-4 rounded flex flex-row items-center gap-2 mr-2 md:mr-4"
      key={skill.name}
    >
      <div className="h-8 w-8 md:h-12 md:w-12 relative">
        <Image fill src={skill.logoUrl} alt={skill.name} loading="lazy" />
      </div>
      <span className="text-white text-base md:text-xl">{skill.name}</span>
    </div>
  );
};

export default SkillLabel;
