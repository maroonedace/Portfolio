import aws from "../assets/images/skills/aws.svg";
import circleci from "../assets/images/skills/circleci.svg";
import cloudflare from "../assets/images/skills/cloudflare.svg";
import docker from "../assets/images/skills/docker.svg";
import fastapi from "../assets/images/skills/fastapi.svg";
import githubActions from "../assets/images/skills/githubActions.svg";
import nestjs from "../assets/images/skills/nestjs.svg";
import nextjs from "../assets/images/skills/nextjs.svg";
import nodejs from "../assets/images/skills/nodejs.svg";
import prisma from "../assets/images/skills/prisma.svg";
import postgresql from "../assets/images/skills/postgresql.svg";
import python from "../assets/images/skills/python.svg";
import rails from "../assets/images/skills/rails.svg";
import react from "../assets/images/skills/react.svg";
import reactNative from "../assets/images/skills/reactNative.svg";
import supabase from "../assets/images/skills/supabase.svg";
import tailwindcss from "../assets/images/skills/tailwindcss.svg";
import typescript from "../assets/images/skills/typescript.svg";
import vercel from "../assets/images/skills/vercel.svg";

export const skillLogos = {
  AWS: aws,
  CircleCI: circleci,
  Cloudflare: cloudflare,
  Docker: docker,
  FastAPI: fastapi,
  "GitHub Actions": githubActions,
  NestJS: nestjs,
  "Next.js": nextjs,
  "Node.js": nodejs,
  Prisma: prisma,
  PostgreSQL: postgresql,
  Python: python,
  Rails: rails,
  React: react,
  "React Native": reactNative,
  Supabase: supabase,
  "Tailwind CSS": tailwindcss,
  TypeScript: typescript,
  Vercel: vercel,
} satisfies Record<string, string>;

export type SkillName = keyof typeof skillLogos;
