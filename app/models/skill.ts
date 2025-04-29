import tailwindCssSvg from "../assets/skills/tailwindCss.svg";
import typeScriptSvg from "../assets/skills/typescript.svg";
import dockerSvg from "../assets/skills/docker.svg";
import javascriptSvg from "../assets/skills/javascript.svg";
import javaSvg from "../assets/skills/java.svg";
import pythonSvg from "../assets/skills/python.svg";
import reactSvg from "../assets/skills/react.svg";
import nodeJsSvg from "../assets/skills/nodejs.svg";
import rubyOnRailsSvg from "../assets/skills/ruby-on-rails.svg";
import cSvg from "../assets/skills/c.svg";
import unitySvg from "../assets/skills/unity.svg";
import postgresqlSvg from "../assets/skills/postgresql.svg";
import mongodbSvg from "../assets/skills/mongodb.svg";
import microsoftSqlServerSvg from "../assets/skills/microsoft-sql-server.svg"
import supbaseSvg from "../assets/skills/supabase.svg";
import nextjsSvg from "../assets/skills/nextjs.svg";
import rubySvg from "../assets/skills/ruby.svg";
import materialUISvg from "../assets/skills/materialUI.svg";
import reduxSvg from "../assets/skills/redux.svg";
import gitSvg from "../assets/skills/git.svg";
import herokuSvg from "../assets/skills/heroku.svg";
import awsSvg from "../assets/skills/aws.svg";
import rustSvg from "../assets/skills/rust.svg"
import figmaSvg from "../assets/skills/figma.svg"

export interface Skill {
  name: string
  logo: any
}

export const languageSkillList: Skill[] = [
  {
    name: "Javascript",
    logo: javascriptSvg,
  },
  {
    name: "Typescript",
    logo: typeScriptSvg,
  },
  {
    name: "Python",
    logo: pythonSvg,
  },
  {
    name: "C#",
    logo: cSvg,
  },
  {
    name: "Ruby",
    logo: rubySvg,
  },
  {
    name: "Java",
    logo: javaSvg,
  },
  {
    name: "Rust",
    logo: rustSvg
  }
]


export const technologySkillList: Skill[] = [
    {
      name: "React.js",
      logo: reactSvg,
    },
    {
      name: "Next.js",
      logo: nextjsSvg,
    },
    {
      name: "Redux",
      logo: reduxSvg,
    },
    {
      name: "Git",
      logo: gitSvg,
    },
    {
      name: "Ruby on Rails",
      logo: rubyOnRailsSvg,
    },
    {
      name: "Node.js",
      logo: nodeJsSvg,
    },
    {
      name: "PostgreSQL",
      logo: postgresqlSvg,
    },
    {
      name: "MongoDB",
      logo: mongodbSvg,
    },
    {
      name: "Supabase",
      logo: supbaseSvg,
    },
    {
      name: "Docker",
      logo: dockerSvg,
    },
    {
      name: "Heroku",
      logo: herokuSvg,
    },
    {
      name: "AWS",
      logo: awsSvg,
    },
    {
      name: "Tailwind CSS",
      logo: tailwindCssSvg,
    },
    {
      name: "Material UI",
      logo: materialUISvg,
    },
    {
      name: "Figma",
      logo: figmaSvg,
    },
    {
      name: "Unity",
      logo: unitySvg,
    },
  ];