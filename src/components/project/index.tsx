import { type FC } from "react";
import type { Project } from "./type";
import SkillTile from "../skills/tile";
import { ArrowUpRightIcon, GitBranchIcon } from "@phosphor-icons/react";

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
    <section className="px-4 pb-6 scroll-mt-28" id="projects">
      <div>
        <h2 className="mb-12 text-center">Featured Projects</h2>
        {projects && (
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            {projects.map((p) => (
              <div
                key={p.name}
                className="rounded-xl p-6 bg-background flex flex-col md:flex-row gap-4"
              >
                <div className="flex justify-center">
                  <img
                    src={p.logo}
                    className="w-40 h-40 rounded-xl"
                    alt={`${p.name} Logo`}
                  />
                </div>
                <div className="flex flex-col flex-1">
                  <span className="text-3xl font-semibold text-center md:text-left mb-2">
                    {p.name}
                  </span>
                  <div className="flex flex-col justify-between gap-4 flex-1">
                    <div className="flex flex-wrap justify-center md:justify-start gap-2">
                      {p.skillNames.map((skill) => (
                        <SkillTile key={`${p.name}-${skill}`} name={skill} />
                      ))}
                    </div>
                    <div className="flex flex-col gap-4">
                      <p className="text-lg leading-relaxed text-center md:text-left">
                        {p.description}
                      </p>
                      <div className="flex flex-wrap justify-center md:justify-start gap-4">
                        {p.github && (
                          <a
                            href={p.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`View ${p.name} code on GitHub (opens in new tab)`}
                            tabIndex={0}
                            className="inline-flex items-center gap-2 bg-foreground text-background px-4 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-foreground 
                            focus:ring-offset-2 focus:ring-offset-background transition-transform hover:scale-105 active:scale-95"
                          >
                            <GitBranchIcon
                              size={20}
                              weight="fill"
                              aria-hidden="true"
                            />
                            <span className="text-lg font-medium">
                              View Code
                            </span>
                          </a>
                        )}
                        {p.embedLink && (
                          <a
                            href={p.embedLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Watch ${p.name} demo video (opens in new tab)`}
                            tabIndex={0}
                            className="inline-flex items-center gap-2 bg-foreground text-background px-4 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-foreground 
                            focus:ring-offset-2 focus:ring-offset-background transition-transform hover:scale-105 active:scale-95"
                          >
                            <span className="text-lg font-medium">
                              Watch Demo
                            </span>
                            <ArrowUpRightIcon
                              size={20}
                              weight="fill"
                              aria-hidden="true"
                            />
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
