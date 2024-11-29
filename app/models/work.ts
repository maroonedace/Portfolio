import { StaticImageData } from "next/image";
import NZeroLogo from "../assets/NZeroLogo.jpeg";
import NZeroSVG from "../assets/nZero.svg"
import OPLogo from "../assets/opLogo.jpeg";
import TritonXRLogo from "../assets/TritonXR.png";

export type Work = {
  name: string;
  url: string,
  title: string;
  backgroundColor: string;
  logo: StaticImageData;
  summary: string;
};

export const works: Work[] = [
  {
    name: "NZero",
    url: "nZero",
    title: "Software Engineer II",
    backgroundColor: "white",
    logo: NZeroSVG,
    summary: `Analytical, insightful, collaborative Software Engineer with
                proven ability to effectively bridge the gap between business
                and technical communications; translates business needs into
                software requirements and analyzes, interprets, and presents
                data clearly and concisely to drive business decisions. Works
                collaboratively across functions and with internal stakeholders
                to resolve software and business challenges, focusing on
                customer satisfaction. Builds relationships cross-functionally
                with internal customers, coworkers, and senior leaders. Takes
                the initiative to understand systems and complex processes;
                committed to removing barriers to success. High business acumen;
                communicates effectively and with transparency. Successfully and
                consistently presents ideas and solution updates to key
                stakeholders and senior leadership.`,
  },
  {
    name: "Oceanside Perspective",
    url: "oceansidePerspective",
    title: "Software Engineer Project Lead",
    backgroundColor: "white",
    logo: OPLogo,
    summary: `Worked on the non-profit learning platform created to integrate classic concepts and modern technology by building an intellectual bridge and connecting multi-generational thought leaders. Integrated professional experience into the volunteer culture and created an optimized, organized team with KPIs and best practices, facilitating meetings and leading the junior volunteers on the project to enhance the platform's front end. `,
  },
  {
    name: "TritonXR",
    url: "tritonXR",
    title: "Project Manager",
    backgroundColor: "white",
    logo: TritonXRLogo,
    summary: `Led the Food Quest project that introduced virtual reality to nutrition, teaching users how to nourish themselves through nutrition. Facilitated meetings, provided guidance and feedback to the team, and was responsible for ensuring deadlines were met. `,
  },
];
