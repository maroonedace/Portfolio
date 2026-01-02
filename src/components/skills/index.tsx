import { type FC } from "react";
import SkillTile from "./tile";

const Skills: FC = () => {
  const skillList = [{ logoUrl: "", name: "React" }];
  return (
    <section className="px-6 pb-12">
      <div className="rounded-lg flex flex-col items-center">
        <h2 className=" text-center mb-10">Skills</h2>
        <div>
          {skillList?.map((skill) => {
            return <SkillTile skill={skill} key={skill.name} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
