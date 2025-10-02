"use client";

import { useEffect } from "react";
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
import Contact from "./body/contact/contact";

const Content = () => {
  const { works, isWorkFetched } = useWork();
  const { projects, isProjectsFetched } = useProjects();
  const { skills, isSkillsFetched } = useSkills();

  useEffect(() => {
    if (!isProjectsFetched || !isWorkFetched || !isSkillsFetched) return;
    const section = window.location.hash.replace("#", "");
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
  }, [isProjectsFetched, isWorkFetched, isSkillsFetched]);

  if (!isProjectsFetched || !isWorkFetched || !isSkillsFetched) return;

  return (
    <>
      <Header />
      <Home />
      <AboutMe />
      <Skills skills={skills} />
      <WorkType works={works} skills={skills} />
      <Project projects={projects} skills={skills} />
      <Contact />
      <Footer />
    </>
  );
};

export default Content;
