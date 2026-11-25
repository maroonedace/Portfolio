import type { SkillName } from "../../constants/skills";
import opLogo from "../../assets/images/work/op.svg";
import nzeroLogo from "../../assets/images/work/nzero.svg";

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
    logoUrl: opLogo,
    startDate: new Date("2024-05-01"),
    endDate: null,
    skills: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Vercel", "Tailwind CSS"],
    descriptions: [
      "Architected a Next.js and Supabase online learning platform from scratch, serving 80-120 students per quarter in a graduate-level leadership course",
      "Implemented Auth.js authentication and sessions, and built role-based access control to gate premium content",
      "Designed PostgreSQL schemas and RESTful Next.js API routes with pagination, filtering, and sorting",
      "Created reusable Next.js and Tailwind CSS components for navigation, search, paginated lists, and content grids",
      "Mentored three junior engineers to ship features independently through code reviews and weekly check-ins"
    ],
    websiteUrl: "https://www.oceansideperspective.org",
  },
  {
    name: "NZero",
    title: "Software Engineer II",
    logoUrl: nzeroLogo,
    startDate: new Date("2021-09-01"),
    endDate: new Date("2024-03-31"),
    skills: ["React", "TypeScript", "Rails", "PostgreSQL", "Docker", "Jest", "Cypress", "Material UI"],
    descriptions: [
      "Owned a React.js and TypeScript emissions data portal used by 30+ enterprise clients, collaborating with stakeholders and backend engineers from requirements through release",
      "Delivered interactive Recharts data visualizations alongside MUI-based custom date range selection and year-over-year emissions comparisons for a full website redesign",
      "Reduced data fetching load times by 60% by migrating server state from Redux.js to TanStack Query",
      "Expanded automated test coverage from 35% to 70% using Jest and React Testing Library for component tests and Cypress for end-to-end tests",
      "Designed Ruby on Rails API resources and endpoints, keeping them in sync with backend model changes",
    ],
    websiteUrl: "https://nzero.com",
  },
];
