import Image from "next/image";
import { Skill } from "../utils/useSkills";
import { FC } from "react";

const skillColorMap: Record<string, { bg: string; text: string }> = {
  js: { bg: "#CAB307", text: "#000000" },
  ts: { bg: "#2A66A7", text: "#FFFFFF" },
  python: { bg: "#3776AB", text: "#FFFFFF" },
  ruby: { bg: "#CC342D", text: "#FFFFFF" },
  csharp: { bg: "#5A1B6E", text: "#FFFFFF" },
  rust: { bg: "#510000", text: "#FFFFFF" },
  react: { bg: "#20232a", text: "#FFFFFF" },
  next: { bg: "#181818", text: "#FFFFFF" },
  tw: { bg: "#05879E", text: "#FFFFFF" },
  mui: { bg: "#0069D1", text: "#FFFFFF" },
  vite: { bg: "#2E38FF", text: "#FFFFFF" },
  tauri: { bg: "#1EA6B3", text: "#000000" },
  node: { bg: "#44683B", text: "#FFFFFF" },
  rails: { bg: "#750000", text: "#FFFFFF" },
  pgsql: { bg: "#316192", text: "#FFFFFF" },
  supabase: { bg: "#218356", text: "#FFFFFF" },
  redis: { bg: "#A30023", text: "#FFFFFF" },
  jest: { bg: "#950F1C", text: "#FFFFFF" },
  rspec: { bg: "#871D34", text: "#FFFFFF" },
  cypress: { bg: "#2FA272", text: "#FFFFFF" },
  postman: { bg: "#D13800", text: "#FFFFFF" },
  aws: { bg: "#D17D00", text: "#000000" },
  docker: { bg: "#1074C1", text: "#FFFFFF" },
  vercel: { bg: "#181818", text: "#FFFFFF" },
  heroku: { bg: "#5B00D1", text: "#FFFFFF" },
  circleci: { bg: "#696969", text: "#FFFFFF" },
  git: { bg: "#C22A0F", text: "#FFFFFF" },
  figma: { bg: "#C6370C", text: "#FFFFFF" },
  storybook: { bg: "#D10046", text: "#FFFFFF" },
};

interface SkillProps {
  skill: Skill;
}

const SkillLabel: FC<SkillProps> = ({ skill }) => {
  const colorConfig = skillColorMap[skill.slug] || { bg: "#6B7280", text: "#FFFFFF" };
  return (
    <div
      className="bg-gray-800 py-1 px-2 sm:py-2 sm:px-3 rounded flex flex-row items-center gap-2 mr-4"
      key={skill.name}
    >
      <div className="h-8 w-8 sm:h-10 sm:w-10 relative">
        <Image layout="fill" src={skill.src} alt={skill.name} loading="lazy" />
      </div>
      <span className="text-white text-md sm:text-lg">{skill.name}</span>
    </div>
  );
};

export default SkillLabel;
