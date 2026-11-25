import type { SkillName } from "../../constants/skills";
import castawayLogo from "../../assets/images/projects/castaway.svg";
import castawayVideo from "../../assets/videos/projects/castaway.mp4";

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
      "Built a NestJS REST API with Prisma and PostgreSQL, containerized with Docker and served through a Cloudflare Tunnel, with every merge to main tested and deployed by GitHub Actions",
      "Engineered an upload pipeline that catalogs full albums straight from their audio file tags and keeps the media in S3-compatible object storage for streaming",
      "Secured accounts with JWT authentication, role-based access control, and refresh-token rotation that revokes the whole session if a stolen token is reused",
      "Developed a React Native (Expo) app for iOS and Android with background playback, crossfade, lock-screen controls, and a Now Playing screen colored by the album art",
    ],
    githubUrl: "https://github.com/castaway-ace",
    video: castawayVideo,
  },
];
