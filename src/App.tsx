import Header from "./components/header";
import HomeSection from "./components/home";
import AboutMeSection from "./components/aboutMe";
import WorkSection from "./components/work";
import ProjectSection from "./components/project";
import ContactSection from "./components/contact";
import Footer from "./components/footer";
import { Fragment } from "react";

const App = () => {
  return (
    <Fragment>
      <Header />
      <main>
        <HomeSection />
        <AboutMeSection />
        <WorkSection />
        <ProjectSection />
        <ContactSection />
      </main>
      <Footer />
    </Fragment>
  );
};

export default App;
