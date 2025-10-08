import Image from "next/image";
import { FC } from "react";
import { Skill } from "../../../../public/data/skills";

interface SkillProps {
  skill: Skill;
}

const SkillLabel: FC<SkillProps> = ({ skill }) => {
  return (
    <div
      className="bg-primary py-2 px-4 rounded flex flex-row items-center gap-2 mr-2 md:mr-4"
      key={skill.name}
    >
      <div className="h-8 w-8 md:h-12 md:w-12 relative">
        <Image fill src={skill.logoUrl} alt={skill.name} />
      </div>
      <span className="text-white text-base md:text-xl">{skill.name}</span>
    </div>
  );
};

export default SkillLabel;
