import NZeroSVG from "../../../../assets/body/work/nZero/nZero.svg";
import OPLogo from "../../../../assets/body/work/op/opLogo.jpeg";
import MercorLogo from "../../../../assets/body/work/mercor/mercor.png";
import { StaticImageData } from "next/image";

export type Work = {
  name: string;
  title: string;
  period: string;
  skills: string[];
  logo: StaticImageData;
  website: string;
  points: string[];
};

export const works: Work[] = [
  {
    name: "Mercor Intelligence",
    title: "Web Development & Design Expert",
    logo: MercorLogo,
    period: "2025 - Present",
    skills: [
      "UI/UX Evaluation",
      "Web Standards",
      "Technical Writing",
      "Front-End Design",
    ],
    website: "https://www.mercor.com",
    points: [
      "Built and modified web applications to evaluate model performance; contributed to prompt libraries and datasets.",
      "Reported UI/UX defects and collaborated with distributed teams to refine evaluation processes.",
    ],
  },
  {
    name: "Oceanside Perspective",
    title: "Senior Software Engineer",
    logo: OPLogo,
    period: "2024 - Present",
    skills: ["Next.js", "Tailwind CSS", "Node.js", "Supabase", "Vercel"],
    website: "https://www.oceansideperspective.org",
    points: [
      "Led a team of 3 developers to launch a content subscription demo using Next.js, Node.js, and Supabase.",
      "Increased user engagement by 30% with UI/UX improvements (search filtering, navigation, animations).",
      "Designed backend API routes for dynamic content retrieval; integrated Tailwind CSS and Framer Motion."
    ],
  },
  {
    name: "NZero",
    title: "Software Engineer II",
    logo: NZeroSVG,
    period: "2021 - 2024",
    website: "https://nzero.com",
    skills: ["React", "Material UI", "Ruby on Rails", "PostgreSQL", "AWS"],
    points: [
      "Promoted twice for ownership and delivery across front-end and back-end using React, Rails, and PostgreSQL.",
      "Led development of a data management portal that reduced manual data handling by 60%.",
      "Implemented new metric visualizations, client filtering, and unit conversions in a full UI refresh.",
      "Boosted API efficiency with React Query, improved coverage by 35% via unit testing (Jest/RSpec).",
      "Set up CI/CD pipelines with GitHub Actions, deployed infrastructure on AWS EC2/S3 and previously Heroku."
    ],
  },
];
