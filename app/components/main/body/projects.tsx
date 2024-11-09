"use client"

import Project from "./project";
import Image from "next/image";
import OPLogo from "../../../assets/opLogo.jpeg";
import StreamerRealityLogo from "../../../assets/StreamerRealityLogo.jpeg";
import TritonXRLogo from "../../../assets/TritonXR.png";
import { useRef, useState } from "react";

const projects = [
  {
    title: "Software Engineer Project Lead",
    company: "Oceanside Perspective",
    image: OPLogo,
  },
  {
    title: "Software Engineer",
    company: "Streamer Reality",
    image: StreamerRealityLogo,
  },
  {
    title: "Project Manager",
    company: "Triton XR",
    image: TritonXRLogo,
  },
];

const Projects = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const [selected, setSelected] = useState<string | null>(null)

  // const width = containerRef?.current?.clientWidth;

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-white">Projects</h1>
      <h3 className="text-white">
        Click the following to learn more about each project
      </h3>
      <div
        ref={containerRef}
        className="grid grid-cols-1 gap-8"
      >
        {projects.map((project) => {
          return (
            <Project
              key={project.company}
              title={project.title}
              company={project.company}
              selected={selected}
              setSelected={setSelected}
              picture={
                <Image
                  draggable={false}
                  className="max-h-[200px] w-[200px]"
                  src={project.image}
                  alt={`${project.company} Logo`}
                />
              }
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
