
import NZeroSVG from "../assets/body/work/nZero/nZero.svg";
import OPLogo from "../assets/body/work/op/opLogo.jpeg";
import MercorLogo from "../assets/body/work/mercor/mercor.png";
import { StaticImageData } from "next/image";

export type Work = {
  name: string;
  title: string;
  period: string;
  logo: StaticImageData;
  website: string;
  points: string[];
};

export const works: Work[] = [
  {
    name: "Mercor",
    title: "Web Development & Design Expert",
    logo: MercorLogo,
    period: "2025 - Present",
    website: "https://www.mercor.com",
    points: [
      "Assess the functionality, usability, and visual appeal of web applications to ensure high-quality user experiences.",
      "Develop structured prompt ideas and grading criteria to evaluate web applications effectively.",
      "Conducted manual UI/UX quality assurance testing to evaluate design system robustness.",
      "Collaborate with fellow experts by asking and answering technical questions to improve evaluation standards and prompt engineering quality",
    ],
  },
  {
    name: "Oceanside Perspective",
    title: "Software Engineer Project Lead",
    logo: OPLogo,
    period: "2024 - Present",
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
    points: [
      "Designed and delivered a new data management platform that increased data accessibility and usability for customers by 30%.",
      "Streamlined API performance with Ruby, reducing data transmission times by 15% and improving front-end responsiveness.",
      "Enhanced codebase stability with 25% fewer breakages by designing 100+ robust test cases and comprehensive documentation.",
      "Partnered with product, design, and external stakeholders to turn requirements into shipped features.",
    ],
  },
];
