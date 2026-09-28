import type { SkillName } from "../../constants/skills";
import castawayLogo from "../../assets/images/projects/castaway.svg";
import castawayVideo from "../../assets/videos/projects/castaway.mp4";
import criwinLogo from "../../assets/images/projects/criwin.svg";
import criwinVideo from "../../assets/videos/projects/criwin.mp4";

export interface Project {
  name: string;
  logoUrl: string;
  skills: SkillName[];
  description: string;
  highlights: string[];
  githubUrl?: string;
  video: string;
}

export const projects: Project[] = [
  {
    name: "Castaway",
    logoUrl: castawayLogo,
    skills: ["NestJS", "PostgreSQL", "Prisma", "React Native", "AWS", "Docker", "Cloudflare"],
    description:
      "A mobile music streaming app, similar to Spotify, where users can browse, play, and manage their own audio library.",
    highlights: [
      "Background streaming with lock-screen controls and crossfade between tracks",
      "Swipe-up Now Playing screen with backgrounds pulled from the album art",
      "Catalog-wide search that opens straight into artist, album, and playlist pages",
    ],
    githubUrl: "https://github.com/castaway-ace",
    video: castawayVideo,
  },
  {
    name: "Criwin",
    logoUrl: criwinLogo,
    skills: ["Python", "PostgreSQL", "AWS", "Docker", "FastAPI"],
    description:
      "A Discord bot that lets users download short form videos and play audio on demand from platforms like YouTube, TikTok, Instagram, and Reddit.",
    highlights: [
      "Downloads video, images, and audio from YouTube, TikTok, Instagram, and Reddit",
      "Soundboard that joins your voice channel and plays sounds on demand",
      "Web admin panel for uploading sounds used for the soundboard and managing the bot's settings",
    ],
    githubUrl: "https://github.com/maroonedace/CriWin",
    video: criwinVideo,
  },
];
