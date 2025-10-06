"use client";

import { useEffect, useState } from "react";
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
import SplashScreen from "./splashScreen";

const Content = () => {
  const { works, isWorkFetched } = useWork();
  const { projects, isProjectsFetched } = useProjects();

  const [isVisible, setIsVisible] = useState(false);

  const isDataLoaded = isWorkFetched && isProjectsFetched;


  useEffect(() => {
    if (!isDataLoaded) return;

    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 50);

    return () => clearTimeout(timer);
  }, [isDataLoaded]);

  useEffect(() => {
    const handleBeforeUnload = () => {
      sessionStorage.setItem("scrollPosition", window.scrollY.toString());
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, []);

  useEffect(() => {
    if (!isDataLoaded) return;
    const savedPosition = sessionStorage.getItem("scrollPosition");
    if (savedPosition) {
      window.scrollTo(0, parseInt(savedPosition));
    }
  }, [isDataLoaded]);

  return (
    <div className="relative">
      <div
        className={`transition-opacity duration-500 ease-in-out ${
          isVisible ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <SplashScreen />
      </div>
      {isDataLoaded && (
        <div
          className={`transition-opacity duration-500 ease-in-out ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <Header />
          <Home />
          <AboutMe />
          <Skills />
          <WorkType works={works} />
          <Project projects={projects} />
          <Contact />
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Content;
