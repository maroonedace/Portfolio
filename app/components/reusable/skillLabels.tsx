import { FC } from "react";
import { skills } from "../../../public/data/skills";
import Image from "next/image";

const skillColorMap: Record<string, string> = {
  js: "bg-js",
  ts: "bg-ts",
  python: "bg-python",
  ruby: "bg-ruby",
  csharp: "bg-csharp",
  rust: "bg-rust",
  react: "bg-react",
  next: "bg-next",
  tw: "bg-tw",
  mui: "bg-mui",
  vite: "bg-vite",
  tauri: "bg-tauri",
  node: "bg-node",
  rails: "bg-rails",
  pgsql: "bg-pgsql",
  supabase: "bg-supabase",
  redis: "bg-redis",
  jest: "bg-jest",
  rspec: "bg-rspec",
  cypress: "bg-cypress",
  postman: "bg-postman",
  aws: "bg-aws",
  docker: "bg-docker",
  vercel: "bg-vercel",
  heroku: "bg-heroku",
  circleci: "bg-circleci",
  git: "bg-git",
  figma: "bg-figma",
  storybook: "bg-storybook",
  debian: "bg-debian",
  proxmox: "bg-proxmox",
  aseprite: "bg-aseprite",
  sckitlearn: "bg-sckitlearn",
  matplotlib: "bg-matplotlib",
  numpy: "bg-numpy",
  jupyter: "bg-jupyter",
  anaconda: "bg-anaconda",
  pandas: "bg-pandas",
  electron: "bg-electron",
  godot: "bg-godot",
};

interface SkillLabelsProps {
  projectSkills: string[];
}

const SkillLabels: FC<SkillLabelsProps> = ({ projectSkills }) => {
  return projectSkills.map((skillName) => {
    const skill = skills.find((s) => s.name === skillName);
    const colorConfig = skillColorMap[skill.slug];
    return (
      <div
        key={skillName}
        className={`${colorConfig} rounded-xl px-2 py-1 flex gap-2 items-center`}
      >
        <div className="h-6 w-6 relative">
          <Image fill src={skill.logoUrl} alt={skill.name} />
        </div>
        <span className="text-base">{skillName}</span>
      </div>
    );
  });
};

export default SkillLabels;
