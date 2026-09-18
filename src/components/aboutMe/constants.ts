import type { SkillName } from "../../constants/skills";

export const coreSkills: SkillName[] = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "AWS",
  "PostgreSQL",
  "Cloudflare",
  "Docker",
  "CircleCI",
];

// A certificate shows its own badge when it has one, otherwise the issuer's logo
export type Certificate = {
  name: string;
  issuer: string;
  url: string;
} & ({ badgeUrl: string } | { issuerLogoUrl: string });

export const certificates: Certificate[] = [
  {
    name: "AWS Certified Solutions Architect - Associate",
    issuer: "Amazon Web Services",
    url: "https://www.credly.com/badges/04b12fb8-445d-412e-a9bd-0963e6221af3/public_url",
    badgeUrl:
      "https://images.credly.com/size/680x680/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png",
  }
];
