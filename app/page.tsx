"use client";

import { MutableRefObject, useRef, useState } from "react";
import AboutMe from "./components/body/aboutMe/aboutMe";
import Home from "./components/body/landing/home";
import Work from "./components/body/work/work";
import Header from "./components/header/header";
import PageWrapper from "./pageWrapper";
import Footer from "./components/footer/footer";
import Skills from "./components/body/skills/skills";
import CardDisplay from "./components/body/work/card/cardDisplay";

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
  ];

  const [isModalClicked, setIsModalClicked] = useState(false);
  const [modalContent, setModalContent] = useState<string | null>(null);

  const onModalOpen = (content: string) => {
    setIsModalClicked(true);
    setModalContent(content);
  };

  const onModalClose = () => {
    setIsModalClicked(false);
    setModalContent(null);
  };

  return (
    <PageWrapper>
      <>
        <Header links={links} />
        <Home componentRef={homeRef} />
        <AboutMe componentRef={aboutMeRef} />
        <Skills componentRef={skillsRef} />
        <Work componentRef={workRef} onModalOpen={onModalOpen} />
        <Footer />
        {isModalClicked && (
          <CardDisplay name={modalContent} onModalClose={onModalClose} />
        )}
      </>
    </PageWrapper>
  );
}
