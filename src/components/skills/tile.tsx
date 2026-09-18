import { type FC } from "react";
import { skillLogos, type SkillName } from "../../constants/skills";

interface SkillProps {
  name: SkillName;
}

const SkillTile: FC<SkillProps> = ({ name }) => {
  return (
    <div className="bg-foreground py-2 px-4 rounded-xl flex items-center justify-center gap-2 cursor-default select-none">
      <img className="h-6 w-6" src={skillLogos[name]} alt="" />
      <span className="text-background font-medium">{name}</span>
    </div>
  );
};

export default SkillTile;
