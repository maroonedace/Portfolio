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

export default function Page() {
  // References
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutMeRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const workRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const links: Links[] = [
    {
      name: "Home",
      ref: homeRef,
    },
    {
      name: "About Me",
      ref: aboutMeRef,
    },
    {
      name: "Skills",
      ref: skillsRef,
    },
    {
      name: "Work",
      ref: workRef,
    },
    {
      name: "Contact",
      ref: contactRef,
    }
  ];

  return (
    <>
      <Header links={links} />
      <Home componentRef={homeRef} />
      <AboutMe componentRef={aboutMeRef} />
      <Skills componentRef={skillsRef} />
      <Work componentRef={workRef} />
      <Contact componentRef={contactRef} />
      <Footer />
    </>
  );
}
