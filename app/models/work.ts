
import NZeroSVG from "../assets/work/nZero/nZero.svg";
import OPLogo from "../assets/work/op/opLogo.jpeg";
import MercorLogo from "../assets/work/mercor/mercor.png";
import TritonXRLogo from "../assets/work/TritonXR.png";
import { nZeroSkillList, opSkillList, Skill, tritonXRSkillList } from "./skill";
import { StaticImageData } from "next/image";

export type Work = {
  name: string;
  title: string;
  period: string;
  logo: StaticImageData;
  listOfSkills: Skill[];
  website: string;
  points: string[];
};

export const works: Work[] = [
  {
    name: "Mercor",
    title: "Web Development & Design Expert",
    logo: MercorLogo,
    period: "2025 - Present",
    listOfSkills: nZeroSkillList,
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
    listOfSkills: opSkillList,
    website: "https://www.oceansideperspective.org",
    points: [
      "Revamped website to highlight video logs and existing content",
      "Modified and enhanced search functionality, ultimately resulting in quicker load times of content retrieval",
      "Identified and decreased bugs and leakage",
      "Drove development projects to evolve the platform and project",
    ],
  },
  {
    name: "NZero",
    title: "Software Engineer II",
    logo: NZeroSVG,
    period: "2021 - 2024",
    listOfSkills: nZeroSkillList,
    website: "https://nzero.com",
    points: [
      "Facilitated a new data management page by precisely outlining the roadmap and writing detailed tickets to provide an efficient work structure",
      "Work directly with business stakeholders to refine requirements, iterate and finalize design, deliver working proofs of concept, and develop final data solutions",
      "Designed a user-friendly web interface that allowed customers to upload, search, and manage their data",
      "Utilized Material UI to create reusable React function components that implemented structured code techniques",
      "Refactored fragile TypeScript code to clean the application for optimal performance, improving systems performance by 70%"
    ],
  },
  // {
  //   name: "TritonXR",
  //   url: "tritonXR",
  //   title: "Project Manager",
  //   logo: TritonXRLogo,
  //   period: "2021 - 2024",
  //   startDate: new Date("2018-11-01T00:00:00"),
  //   endDate: new Date("2020-06-01T00:00:00"),
  //   listOfSkills: tritonXRSkillList,
  //   embedLink: "https://www.youtube.com/embed/z-KPfnebmsY?si=Bq1rsKqwuddQ_xxN",
  //   website: "https://www.facebook.com/tritonxr/",
  //   github: "https://github.com/TritonXR/FoodQuest",
  //   description:
  //     "Led the Food Quest project that introduced virtual reality to nutrition, teaching users how to nourish themselves through nutrition.",
  //   points: [
  //     "Extracted and transformed disparate data into actionable insights",
  //     "Developed rage, fireball, and ice ball mechanics for various classes",
  //     "Created cutting, mixing, and stirring mechanics that allowed the player to cook virtually",
  //     "Delegated project members on specific tasks and various mechanics, such as model creations for the monsters and food products",
  //   ],
  // },
];
