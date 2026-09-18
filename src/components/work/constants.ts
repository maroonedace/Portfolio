import type { SkillName } from "../../constants/skills";

export interface Work {
  name: string;
  title: string;
  logoUrl: string;
  startDate: Date;
  endDate: Date | null;
  skills: SkillName[];
  descriptions: string[];
  websiteUrl?: string;
}

export const works: Work[] = [
  {
    name: "Oceanside Perspective",
    title: "Senior Software Engineer",
    logoUrl: "src/assets/images/work/opLogo.jpeg",
    startDate: new Date("2024-05-01"),
    endDate: null,
    skills: ["Next.js", "Supabase", "Node.js", "Vercel", "Tailwind CSS"],
    descriptions: [
      "Architected and shipped a greenfield online learning platform using Next.js and Supabase, serving 80 to 120 students per quarter in a graduate level leadership course",
      "Built responsive, component-driven UI for authentication, search, and filtering using React Hooks",
      "Designed PostgreSQL schemas and built REST endpoints supporting pagination, filtering, and sorting, with indexing to optimize query performance",
      "Mentored junior engineers through code reviews and feature delivery while reporting biweekly user signup and flow metrics to inform board-level product decisions",
    ],
    websiteUrl: "https://www.oceansideperspective.org",
  },
  {
    name: "NZero",
    title: "Software Engineer II",
    logoUrl: "src/assets/images/work/nZero.svg",
    startDate: new Date("2021-09-01"),
    endDate: new Date("2024-03-31"),
    skills: ["React", "Rails", "PostgreSQL", "Docker"],
    descriptions: [
      "Built and maintained a scalable data management portal using React and TypeScript, serving 30+ enterprise clients tracking carbon emissions across multiple facilities",
      "Led UI redesign featuring interactive data visualizations, date range selectors, and streamlined filtering workflows, enabling users to reference reports directly within the platform",
      "Reduced data fetching load times by 60% by migrating from Redux to TanStack Query",
      "Developed Ruby on Rails models and API endpoints serving emissions data to the frontend",
      "Expanded test coverage from 35% to 70% using Jest, React Testing Library, and Cypress",
    ],
    websiteUrl: "https://nzero.com",
  },
];
