// Icon sets are pinned so upstream renames can't break logos on the deployed site
const devicon = (path: string) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@2.17.0/icons/${path}`;
const simpleIcon = (slug: string) =>
  `https://cdn.jsdelivr.net/npm/simple-icons@16.31.0/icons/${slug}.svg`;

export const skillLogos = {
  AWS: devicon("amazonwebservices/amazonwebservices-original-wordmark.svg"),
  CircleCI: devicon("circleci/circleci-plain.svg"),
  Cloudflare: devicon("cloudflare/cloudflare-original.svg"),
  Docker: devicon("docker/docker-original.svg"),
  JavaScript: devicon("javascript/javascript-original.svg"),
  MinIO: simpleIcon("minio"),
  NestJS: devicon("nestjs/nestjs-original.svg"),
  "Next.js": devicon("nextjs/nextjs-original.svg"),
  "Node.js": devicon("nodejs/nodejs-original.svg"),
  PostgreSQL: devicon("postgresql/postgresql-original.svg"),
  Proxmox: devicon("proxmox/proxmox-original-wordmark.svg"),
  Python: devicon("python/python-original.svg"),
  Rails: devicon("rails/rails-plain.svg"),
  React: devicon("react/react-original.svg"),
  Rust: devicon("rust/rust-original.svg"),
  Supabase: devicon("supabase/supabase-original.svg"),
  "Tailwind CSS": devicon("tailwindcss/tailwindcss-original.svg"),
  Tauri: devicon("tauri/tauri-original.svg"),
  TypeScript: devicon("typescript/typescript-original.svg"),
  Vercel: devicon("vercel/vercel-original.svg"),
} satisfies Record<string, string>;

export type SkillName = keyof typeof skillLogos;
