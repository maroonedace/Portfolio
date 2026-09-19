// Icon sets are pinned so upstream renames can't break logos on the deployed site
const devicon = (path: string) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@2.17.0/icons/${path}`;

export const skillLogos = {
  AWS: devicon("amazonwebservices/amazonwebservices-original-wordmark.svg"),
  CircleCI: devicon("circleci/circleci-plain.svg"),
  Cloudflare: devicon("cloudflare/cloudflare-original.svg"),
  Docker: devicon("docker/docker-original.svg"),
  FastAPI: devicon("fastapi/fastapi-original.svg"),
  "GitHub Actions": devicon("githubactions/githubactions-original.svg"),
  NestJS: devicon("nestjs/nestjs-original.svg"),
  "Next.js": devicon("nextjs/nextjs-original.svg"),
  "Node.js": devicon("nodejs/nodejs-original.svg"),
  Prisma: devicon("prisma/prisma-original.svg"),
  PostgreSQL: devicon("postgresql/postgresql-original.svg"),
  Python: devicon("python/python-original.svg"),
  Rails: devicon("rails/rails-plain.svg"),
  React: devicon("react/react-original.svg"),
  "React Native": devicon("reactnative/reactnative-original.svg"),
  Supabase: devicon("supabase/supabase-original.svg"),
  "Tailwind CSS": devicon("tailwindcss/tailwindcss-original.svg"),
  TypeScript: devicon("typescript/typescript-original.svg"),
  Vercel: devicon("vercel/vercel-original.svg"),
} satisfies Record<string, string>;

export type SkillName = keyof typeof skillLogos;
