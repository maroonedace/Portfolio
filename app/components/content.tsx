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
import SplashScreen from "./splashScreen";

const Content = () => {
  const { works, isWorkFetched } = useWork();
  const { projects, isProjectsFetched } = useProjects();
  const { skills, isSkillsFetched } = useSkills();

  const isDataLoaded = isWorkFetched && isProjectsFetched && isSkillsFetched;

  useEffect(() => {
    if (!isDataLoaded) return;
    
    const section = window.location.hash.replace("#", "");
    if (section) {
      document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
    }
  }, [isDataLoaded]);

  if (!isDataLoaded) return <SplashScreen />;

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