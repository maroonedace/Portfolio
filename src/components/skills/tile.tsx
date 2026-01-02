import { type FC } from "react";
import type { Skill } from "./model";

interface SkillProps {
  skill: Skill;
}

const SkillTile: FC<SkillProps> = ({ skill }) => {
  return (
    <div
      className="bg-primary py-2 px-4 rounded flex flex-row items-center gap-2 mr-2"
      key={skill.name}
    >
      <div className="h-8 w-8 relative">
        <img src={skill.logoUrl} alt={skill.name} />
      </div>
      <span className="text-white text-base md:text-xl">{skill.name}</span>
    </div>
  );
};

export default SkillTile;