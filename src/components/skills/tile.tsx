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
        <img className="h-8 w-8" src={skill.logo} alt={skill.name} />
        <span className="text-black">{skill.name}</span>
      </div>
    )
  );
};

export default SkillTile;
