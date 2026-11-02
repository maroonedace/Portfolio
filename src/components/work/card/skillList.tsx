import { type FC } from "react";
import type { SkillName } from "../../../constants/skills";
import SkillTile from "../../common/skillTile";

interface SkillListProps {
  skills: SkillName[];
}

const SkillList: FC<SkillListProps> = ({ skills }) => (
  <ul
    role="list"
    className="mt-4 flex flex-wrap justify-center md:justify-start gap-4"
  >
    {skills.map((name) => (
      <li key={name}>
        <SkillTile name={name} />
      </li>
    ))}
  </ul>
);

export default SkillList;
