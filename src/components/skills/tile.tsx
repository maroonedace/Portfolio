import { type FC } from "react";
import { skills } from "../../data/skill";

interface SkillProps {
  name: string;
}

const SkillTile: FC<SkillProps> = ({ name }) => {
  const skill = skills.find((skill) => skill.name === name);
  return (
    skill && (
      <div
        className="bg-foreground py-2 px-4 rounded-xl flex items-center justify-center gap-2 mr-2"
        key={skill.name}
      >
        <img className="h-6 w-6" src={skill.logo} alt={skill.name} />
        <span className="text-background font-medium">{skill.name}</span>
      </div>
    )
  );
};

export default SkillTile;
