import chunkArray from "../../../../utils/utils";
import Marquee from "./marquee";
import useSkills from "../utils/useSkills";
import Image from "next/image";

const SkillShowcase = () => {
  const { skills, isSkillsFetched } = useSkills();

  if (!isSkillsFetched) return;

  const skillArray = chunkArray(skills, 3);
  return (
    <div className="flex flex-col gap-4 w-[90%]">
      {skillArray.map((skillList, index) => {
        return (
          <Marquee
            direction={index % 2 == 0 ? "left" : "right"}
            key={"skillList" + index}
          >
            {skillList?.map((skill) => {
              return (
                <div
                  className="bg-zinc-500/70 py-2 px-3 rounded flex flex-row items-center gap-2 mr-4"
                  key={skill.name}
                >
                  <Image
                    src={skill.src}
                    alt={skill.name}
                    loading="lazy"
                    width={40}
                    height={40}
                  />
                  <span className="text-md text-white/90">{skill.name}</span>
                </div>
              );
            })}
          </Marquee>
        );
      })}
    </div>
  );
};

export default SkillShowcase;
