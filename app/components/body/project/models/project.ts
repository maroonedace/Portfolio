import { StaticImageData } from "next/image";
import TritonXRLogo from "../../../../assets/body/project/TritonXR.png";
import AceDexLogo from "../../../../assets/body/project/pokedexAce.png";
import ADokiToRememberLogo from "../../../../assets/body/project/aDokiToRemember.png";

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
    name: "A Doki To Remember",
    logo: ADokiToRememberLogo,
    tech: ["GDScript", "Asperite", "Godot"],
    description: "A game jam project developed over two weeks.",
    embedLink: "https://maroonedace.itch.io/a-doki-to-remember",
    github: "https://github.com/maroonedace/A-Doki-To-Remember/",
  },
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
    embedLink: "https://youtu.be/CGiiyc2ylgk",
    github: "https://github.com/TritonXR/FoodQuest",
  },
]