import type { SkillName } from "../../constants/skills";

export interface Project {
  name: string;
  logoUrl: string;
  skills: SkillName[];
  description: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    name: "Castaway",
    logoUrl: "/images/projects/castaway.png",
    skills: ["NestJS", "PostgreSQL", "AWS", "Docker", "Cloudflare"],
    description:
      "A mobile music streaming app, similar to Spotify, where users can browse, play, and manage their own audio library.",
    githubUrl: "https://github.com/castaway-ace",
  },
  {
    name: "Criwin",
    logoUrl: "/images/projects/criwin.png",
    skills: ["Python", "PostgreSQL", "MinIO", "Docker"],
    description:
      "A Discord bot that lets users download short form videos and play audio on demand from platforms like YouTube, TikTok, Instagram, and Reddit.",
    githubUrl: "https://github.com/maroonedace/CriWin",
  },
];
