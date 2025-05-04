import { MutableRefObject } from "react";
import AboutMe from "./components/body/aboutMe/aboutMe";
import Home from "./components/body/home/home";
import Work from "./components/body/work/work";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Skills from "./components/body/skills/skills";
import Project from "./components/body/project/project";

export interface Links {
  name: string;
  ref: MutableRefObject<HTMLDivElement>;
}

const Page = () => {
  return (
    <>
      <Header />
      <Home />
      <AboutMe />
      <Skills />
      <Work />
      <Project />
      <Footer />
    </>
  );
}

export default Page;
