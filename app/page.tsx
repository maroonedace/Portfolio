"use client";

import { MutableRefObject, useRef, useState } from "react";
import AboutMe from "./components/body/aboutMe/aboutMe";
import Home from "./components/body/home/home";
import Work from "./components/body/work/work";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Skills from "./components/body/skills/skills";
import Contact from "./components/body/contact/contact";

export interface Links {
  name: string;
  ref: MutableRefObject<HTMLDivElement>;
}

const Page = () => {
  // References
  const aboutMeRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const workRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Header />
      <Home />
      <AboutMe componentRef={aboutMeRef} />
      <Skills componentRef={skillsRef} />
      <Work componentRef={workRef} />
      <Contact componentRef={contactRef} />
      <Footer />
    </>
  );
}

export default Page;
