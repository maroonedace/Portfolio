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
    title: "Web Application Evaluation Engineer",
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
      "Built and modified web applications to test model behavior and identify performance or design limitations.",
      "Created and documented visual UI/UX defects to support dataset generation for model training and improvement.",
      "Collaborated asynchronously with a distributed team of engineers and designers to refine evaluation frameworks and resolve ambiguous rubric interpretations.",
      "Contributed to the development of prompt libraries and task collections used to benchmark frontier AI model capabilities.",
    ],
  },
  {
    name: "Oceanside Perspective",
    title: "Lead Software Development Engineer",
    logo: OPLogo,
    period: "2024 - Present",
    skills: ["Next.js", "Tailwind CSS", "Supabase", "Typescript", "Vercel"],
    website: "https://www.oceansideperspective.org",
    points: [
      "Increased user engagement by 20% through implementation of animations, skeleton screens, and seamless visual transitions.",
      "Improved search functionality to reduce query response time by 25%, leveraging TypeScript and Supabase optimizations.",
      "Spearheaded a codebase refactor to eliminate redundancy and improve work efficiency by 20%, converting legacy code to TypeScript.",
      "Directed a team of 3-6 developers, creating detailed agile stories, prioritizing tasks, and ensuring timely delivery.",
    ],
  },
  {
    name: "NZero",
    title: "Software Engineer II",
    logo: NZeroSVG,
    period: "2021 - 2024",
    website: "https://nzero.com",
    skills: ["Ruby on Rails", "React", "Docker", "PostgreSQL", "Material UI"],
    points: [
      "Designed and delivered a new data management platform that increased data accessibility and usability for customers by 30%.",
      "Streamlined API performance with Ruby, reducing data transmission times by 15% and improving front-end responsiveness.",
      "Enhanced codebase stability with 25% fewer breakages by designing 100+ robust test cases and comprehensive documentation.",
      "Partnered with product, design, and external stakeholders to turn requirements into shipped features.",
    ],
  },
];
