import Project from "./project";
import Image from "next/image";
import OPLogo from "../../../assets/opLogo.jpeg";
import StreamerRealityLogo from "../../../assets/StreamerRealityLogo.jpeg"
import TritonXRLogo from "../../../assets/TritonXR.png"

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
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-white">Projects</h1>
      <h3 className="text-white">Click the following to learn more about each project</h3>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* <Project
        key="NZero"
        title="Software Engineer II"
        company="NZero"
        picture={
          <Image src={NZeroLogo} alt="NZero Logo" width="200" height="200" />
        }
      /> */}
        {projects.map((project) => {
          return (
            <Project
              key={project.company}
              title={project.title}
              company={project.company}
              picture={
                <Image
                  draggable={false}
                  src={project.image}
                  alt={`${project.company} Logo`}
                  width="200"
                  height="200"
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
