"use client";

import AboutMe from "./body/aboutMe/aboutMe";
import Home from "./body/home/home";
import Project from "./body/projects/project";
import useProjects from "./body/projects/utils/useProjects";
import Skills from "./body/skills/skills";
import useSkills from "./body/skills/utils/useSkills";
import useWork from "./body/work/utils/useWork";
import WorkType from "./body/work/work";
import Footer from "./footer/footer";
import Header from "./header/header";

const Content = () => {
  const { works, isWorkFetched } = useWork();
  const { projects, isProjectsFetched } = useProjects();
  const { skills, isSkillsFetched } = useSkills();

  if (!isProjectsFetched || !isWorkFetched || !isSkillsFetched) return 
  return (
    <>
      <Header />
      <Home />
      <AboutMe />
      <Skills skills={skills} />
      <WorkType works={works} skills={skills} />
      <Project projects={projects} skills={skills} />
      <Footer />
    </>
  );
};

export default Content;
