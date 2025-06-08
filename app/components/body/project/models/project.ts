import { StaticImageData } from "next/image";
import TritonXRLogo from "../../../../assets/body/project/TritonXR.png";
import AceDexLogo from "../../../../assets/body/project/pokedexAce.png";

export type Project = {
  name: string;
  description: string;
  logo: StaticImageData;
  tech: string[];
  embedLink?: string;
  github?: string;
};

export const projects: Project[] = [
    {
    name: "AceDex",
    logo: AceDexLogo,
    tech: ["React", "Rust", "Supabase", "Tauri"],
    description: "A lightweight cross-platform app that allows the user to view Pokemon in a TCG-styled card format.",
    github: "https://github.com/maroonedace/AceDex",
    embedLink: "https://youtu.be/saD8ZQIfyYg"
  },
  {
    name: "Food Quest",
    logo: TritonXRLogo,
    tech: ["Unity", "C#", "XR", "3D Modeling"],
    description: "XR app teaching users how to nourish themselves through nutrition.",
    embedLink: "https://youtu.be/z-KPfnebmsY?si=HTrXGv4j_Mzx7e0n",
    github: "https://github.com/TritonXR/FoodQuest",
  },
]