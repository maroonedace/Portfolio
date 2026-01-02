import { type FC } from "react";
import type { Skill } from "./model";

interface SkillProps {
  skill: Skill;
}

const SkillTile: FC<SkillProps> = ({ skill }) => {
  return (
    <div
      className="bg-white py-2 px-4 rounded flex items-center justify-center gap-2 mr-2"
      key={skill.name}
    >
      <img className="h-8 w-8" src={skill.logoUrl} alt={skill.name} />
      <span className="text-black">{skill.name}</span>
    </div>
  );
};

export default SkillTile;