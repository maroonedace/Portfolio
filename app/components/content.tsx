"use client";

import { useEffect } from "react";
import AboutMe from "./body/aboutMe/aboutMe";
import Home from "./body/home/home";
import Project from "./body/projects/project";
import useProjects from "./body/projects/utils/useProjects";
import Skills from "./body/skills/skills";
import useWork from "./body/work/utils/useWork";
import WorkType from "./body/work/work";
import Footer from "./footer/footer";
import Header from "./header/header";
import Contact from "./body/contact/contact";

const Content = () => {
  const { works, isWorkFetched } = useWork();
  const { projects, isProjectsFetched } = useProjects();

  useEffect(() => {
    if (!isProjectsFetched || !isWorkFetched) return;
    const section = window.location.hash.replace("#", "");
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
  }, [isProjectsFetched, isWorkFetched]);

  if (!isProjectsFetched || !isWorkFetched) return;

  return (
    <>
      <Header />
      <Home />
      <AboutMe />
      <Skills />
      <WorkType works={works} />
      <Project projects={projects} />
      <Contact />
      <Footer />
    </>
  );
};

export default Content;
