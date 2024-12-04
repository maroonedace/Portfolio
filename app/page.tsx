"use client";

import AboutMe from "./components/body/aboutMe/aboutMe";
import Landing from "./components/body/landing/landing";
import Work from "./components/body/work/work";
import Contact from "./components/footer/contact";
import PageWrapper from "./pageWrapper";

export default function Page() {
  return (
    <PageWrapper>
      <div>
        <Landing />
        <AboutMe />
        <Work />
        <Contact />
      </div>
    </PageWrapper>
  );
}
