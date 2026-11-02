import { type FC } from "react";
import type { SkillName } from "../../constants/skills";
import SkillTile from "./skillTile";

interface SkillListProps {
  skills: SkillName[];
  className?: string;
}

const SkillList: FC<SkillListProps> = ({ skills, className = "" }) => (
  <ul role="list" className={`flex flex-wrap justify-center md:justify-start gap-2 ${className}`}>
    {skills.map((name) => (
      <li key={name}>
        <SkillTile name={name} />
      </li>
    ))}
  </ul>
);

export default SkillList;
