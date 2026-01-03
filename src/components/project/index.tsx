import { type FC } from "react";
import type { Project } from "./type";
import SkillTile from "../skills/tile";
import {
  ArrowUpRightIcon,
  GitBranch,
  GitBranchIcon,
} from "@phosphor-icons/react";

const projects: Project[] = [
  {
    name: "Criwin",
    logo: "/img/project/criwin.png",
    skillNames: ["Python", "Docker", "Proxmox", "Cloudflare"],
    description: `Developed and containerized a Python-based Discord bot running on a Debian server to automate audio conversions 
      and manage soundboard functionality, leveraging Cloudflare for sound file storage and delivery.`,
    github: "https://github.com/maroonedace/Criwin/",
  },
  {
    name: "Acedex",
    logo: "/img/project/pokedexAce.png",
    skillNames: ["React", "Rust", "Supabase", "Tauri"],
    description: `Built a TCG-style Pokédex using Tauri and Rust to transform public API data into an interactive interface. 
      Enabled real-time filtering of more than 1000+ entries within a modern, cross platform application.`,
    github: "https://github.com/maroonedace/AceDex",
    embedLink: "https://www.youtube.com/watch?v=saD8ZQIfyYg",
  },
];

const ProjectSection: FC = () => {
  return (
    <section
      className=" bg-cyan-800 px-6 flex flex-col gap-8 items-center justify-center pb-12 scroll-mt-20"
      id="projects"
    >
      <div>
        <h2 className="mb-12 text-center">Featured Projects</h2>

        {projects && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {projects.map((p) => (
              <div
                key={p.name}
                className="rounded-xl p-6 bg-background flex flex-col items-center sm:items-start sm:flex-row gap-4"
              >
                <div className="shrink-0 h-50 w-50 relative">
                  <img
                    src={p.logo}
                    alt={`${p.name} Logo`}
                    sizes="160px"
                    className="rounded-xl"
                  />
                </div>
                <div className="flex flex-col h-full text-center">
                  <span className="text-2xl mb-2">{p.name}</span>
                  <div className="flex flex-col gap-4 h-full">
                    <div className="flex flex-wrap justify-center gap-2">
                      {p.skillNames.map((skill) => (
                        <SkillTile key={skill} name={skill} />
                      ))}
                    </div>
                    <div className="flex flex-col justify-between items-center gap-4">
                      <p className="text-lg">{p.description}</p>
                      <div className="flex gap-4">
                        {p.github && (
                          <a
                            href={p.github}
                            target="_blank"
                            tabIndex={0}
                            rel="noopener noreferrer"
                            className="focus-ring flex items-center gap-2 bg-foreground text-background px-4 py-2 rounded-2xl transition hover:scale-110 active:scale-95"
                          >
                            <GitBranchIcon size={32} weight="fill" />
                            <span className="text-lg font-medium">Repo</span>
                          </a>
                        )}
                        {p.embedLink && (
                          <a
                            href={p.embedLink}
                            target="_blank"
                            tabIndex={0}
                            rel="noopener noreferrer"
                            className="focus-ring flex items-center gap-2 bg-foreground text-background px-4 py-2 rounded-2xl transition hover:scale-110 active:scale-95"
                          >
                            <span className="text-lg font-medium">Demo</span>
                            <ArrowUpRightIcon size={32} weight="fill" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectSection;
