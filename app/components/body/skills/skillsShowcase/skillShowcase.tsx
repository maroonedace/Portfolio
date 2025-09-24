import chunkArray from "../../../../utils/utils";
import Marquee from "./marquee";
import useSkills from "../utils/useSkills";
import SkillLabel from "./skillLabel";

const SkillShowcase = () => {
  const { skills, isSkillsFetched } = useSkills();

  if (!isSkillsFetched) return;

  const skillArray = chunkArray(skills, 3);
  return (
    <div className="flex flex-col gap-4">
      {skillArray.map((skillList, index) => {
        return (
          <Marquee
            direction={index % 2 == 0 ? "left" : "right"}
            key={"skillList" + index}
          >
            {skillList?.map((skill) => {
              return (
                <SkillLabel skill={skill} key={skill.name} />
              );
            })}
          </Marquee>
        );
      })}
    </div>
  );
};

export default SkillShowcase;
