import { StaticImageData } from "next/image";
import TritonXRLogo from "../../../../assets/body/project/TritonXR.png";
import PokedexAceLogo from "../../../../assets/body/project/pokedexAce.png";

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
    name: "Food Quest",
    logo: TritonXRLogo,
    tech: ["Unity", "C#", "XR", "3D Modeling"],
    description: "XR app teaching users how to nourish themselves through nutrition",
    embedLink: "https://www.youtube.com/embed/z-KPfnebmsY?si=Bq1rsKqwuddQ_xxN",
    github: "https://github.com/TritonXR/FoodQuest",
  },
  {
    name: "Pokédex-Ace",
    logo: PokedexAceLogo,
    tech: ["React", "Rust", "Supabase", "Tauri"],
    description: "A lightweight cross-platform app that allows the user to view Pokemon in a TCG inspired card format",
    github: "https://github.com/maroonedace/Pokedex-Ace",
  }
]