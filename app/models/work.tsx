import { StaticImageData } from "next/image";
import NZeroSVG from "../assets/work/nZero/nZero.svg";
import OPLogo from "../assets/work/opLogo.jpeg";
import TritonXRLogo from "../assets/work/TritonXR.png";
import NZero from "../components/body/work/content/nzero";
import OP from "../components/body/work/content/op";
import TritonXR from "../components/body/work/content/tritonXR";

export type Work = {
  name: string;
  url: string;
  title: string;
  logo: StaticImageData;
  content: JSX.Element;
  startDate: Date;
  endDate: Date | null;
  website: string;
  github?: string;
  description: string;
  points: string[];
};

export const works: Work[] = [
  {
    name: "NZero",
    url: "nZero",
    title: "Software Engineer II",
    logo: NZeroSVG,
    startDate: new Date("2021-09-01T00:00:00"),
    endDate: new Date("2024-03-01T00:00:00"),
    content: <NZero />,
    website: "https://nzero.com",
    description: `NZero is a real-time data decarbonization platform for
            sustainability leaders focusing on performance tracking and
            delivering a carbon ROI. I was hired on the spot during an interview
            with the CEO and was promoted twice within the company.`,
    points: [
      "Facilitated a new data management page by precisely outlining the roadmap and writing detailed tickets to provide an efficient work structure",
      "Work directly with business stakeholders to refine requirements, iterate and finalize design, deliver working proofs of concept, and develop final data solutions",
      "Designed a user-friendly web interface that allowed customers to upload, search, and manage their data",
      "Utilized Material UI to create reusable React function components that implemented structured code techniques",
      "Refactored fragile TypeScript code to clean the application for optimal performance, improving systems performance by 70%"
    ],
  },
  {
    name: "Oceanside Perspective",
    url: "oceansidePerspective",
    title: "Software Engineer Project Lead",
    logo: OPLogo,
    startDate: new Date("2024-05-01T00:00:00"),
    endDate: null,
    content: <OP />,
    website: "https://www.oceansideperspective.org",
    description:
      "Worked on the non-profit learning platform created to integrate classic concepts and modern technology by building an intellectual bridge and connecting multi-generational thought leaders. ",
    points: [
      "Revamped website to highlight video logs and existing content",
      "Modified and enhanced search functionality, ultimately resulting in quicker load times of content retrieval",
      "Identified and decreased bugs and leakage",
      "Drove development projects to evolve the platform and project",
    ],
  },
  {
    name: "TritonXR",
    url: "tritonXR",
    title: "Project Manager",
    logo: TritonXRLogo,
    startDate: new Date("2018-11-01T00:00:00"),
    endDate: new Date("2020-06-01T00:00:00"),
    content: <TritonXR />,
    website: "https://www.facebook.com/tritonxr/",
    github: "https://github.com/TritonXR/FoodQuest",
    description:
      "Led the Food Quest project that introduced virtual reality to nutrition, teaching users how to nourish themselves through nutrition.",
    points: [
      "Extracted and transformed disparate data into actionable insights",
      "Developed rage, fireball, and ice ball mechanics for various classes",
      "Created cutting, mixing, and stirring mechanics that allowed the player to cook virtually",
      "Delegated project members on specific tasks and various mechanics, such as model creations for the monsters and food products",
    ],
  },
];
