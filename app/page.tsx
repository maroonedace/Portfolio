"use client";

import { MutableRefObject, useRef } from "react";
import AboutMe from "./components/body/aboutMe/aboutMe";
import Home from "./components/body/landing/home";
import Work from "./components/body/work/work";
import Header from "./components/header/header";
import PageWrapper from "./pageWrapper";

export interface Links {
  name: string;
  ref: MutableRefObject<HTMLDivElement>;
}

export default function Page() {
  // References
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutMeRef = useRef<HTMLDivElement>(null);
  const workRef = useRef<HTMLDivElement>(null);

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
      name: "Work",
      ref: workRef,
    },
  ];

  return (
    <PageWrapper>
      <>
        <Header links={links} />
        <Home componentRef={homeRef} />
        <AboutMe componentRef={aboutMeRef} />
        <Work componentRef={workRef} />
      </>
    </PageWrapper>
  );
}
