import { FC, MutableRefObject } from "react";
import tailwindCssSvg from "../../../assets/skills/tailwindCss.svg";
import typeScriptSvg from "../../../assets/skills/typescript.svg";
import dockerSvg from "../../../assets/skills/docker.svg";
import javascriptSvg from "../../../assets/skills/javascript.svg";
import pythonSvg from "../../../assets/skills/python.svg";
import reactSvg from "../../../assets/skills/react.svg";
import nodeJsSvg from "../../../assets/skills/nodejs.svg";
import html5Svg from "../../../assets/skills/html5.svg";
import css3Svg from "../../../assets/skills/css3.svg";
import rubyOnRailsSvg from "../../../assets/skills/rubyOnRails.svg";
import cSvg from "../../../assets/skills/c.svg";
import unitySvg from "../../../assets/skills/unity.svg"
import postgresqlSvg from "../../../assets/skills/postgresql.svg"
import mongodbSvg from "../../../assets/skills/mongodb.svg"
import Image from "next/image";

interface SkillsProps {
  componentRef: MutableRefObject<HTMLDivElement>;
}

const skillList = [
  tailwindCssSvg,
  typeScriptSvg,
  dockerSvg,
  javascriptSvg,
  pythonSvg,
  reactSvg,
  nodeJsSvg,
  html5Svg,
  css3Svg,
  rubyOnRailsSvg,
  cSvg,
  unitySvg,
  postgresqlSvg,
  mongodbSvg,
];

const Skills: FC<SkillsProps> = ({ componentRef }) => {
  return (
    <div
      className="flex bg-gray-500 items-center px-4 pt-4 pb-8 flex-col gap-4"
      ref={componentRef}
    >
      <h2>Skills</h2>
      <div className="flex gap-8 w-[80%] flex-wrap">
        {skillList.map((skill, index) => {
          return (
            <div
              key={index + 100}
              className="bg-white rounded-2xl w-[128px] h-[128px] flex items-center justify-center"
            >
              <Image width="80" height="80" src={skill} alt="icon" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
