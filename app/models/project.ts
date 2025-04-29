import { StaticImageData } from "next/image";
import TritonXRLogo from "../assets/work/TritonXR.png";

export type Project = {
  name: string;
  title: string;
  period: string;
  description: string;
  logo: StaticImageData;
  tech: string[];
  embedLink?: string;
  github?: "https://github.com/TritonXR/FoodQuest",
};

export const projects: Project[] = [
  {
    name: "TritonXR",
    title: "Project Manager",
    logo: TritonXRLogo,
    period: "2019 - 2020",
    tech: ["Unity", "C#", "XR", "3D Modeling"],
    description: "XR app teaching users how to nourish themselves through nutrition",
    embedLink: "https://www.youtube.com/embed/z-KPfnebmsY?si=Bq1rsKqwuddQ_xxN",
    github: "https://github.com/TritonXR/FoodQuest",
  }

]