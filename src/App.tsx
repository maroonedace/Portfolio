import Header from "./components/header";
import HomeSection from "./components/home";
import AboutMeSection from "./components/aboutMe";
import WorkSection from "./components/work";
import ProjectSection from "./components/project";
import ContactSection from "./components/contact";
import Footer from "./components/footer";
import SkipLink from "./components/skipLink";
import { MotionConfig } from "motion/react";

const App = () => {
  return (
    <MotionConfig reducedMotion="user">
      <SkipLink />
      <Header />
      <main id="main" tabIndex={-1} className="outline-hidden">
        <HomeSection />
        <AboutMeSection />
        <WorkSection />
        <ProjectSection />
        <ContactSection />
      </main>
      <Footer />
    </MotionConfig>
  );
};

export default App;
