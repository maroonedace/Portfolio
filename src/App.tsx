import Header from "./components/header";
import HomeSection from "./components/home";
import AboutMeSection from "./components/aboutMe";
import WorkSection from "./components/work";
import ProjectSection from "./components/project";
import ContactSection from "./components/contact";
import Footer from "./components/footer";
import { Fragment } from "react/jsx-runtime";
import useWorks from "./services/useWorks";
import useSkills from "./services/useSkills";
import useProjects from "./services/useProjects";
import { useScrollRestoration } from "./hooks/useScrollRestoration";

const App = () => {
  const { isWorksFetched } = useWorks();
  const { isSkillsFetched } = useSkills();
  const { isProjectsFetched } = useProjects();

  const allDataLoaded = isWorksFetched && isSkillsFetched && isProjectsFetched;

  useScrollRestoration({
    isLoading: !allDataLoaded,
    delay: 200,
  });

  return (
    <Fragment>
      <Header />
      <HomeSection />
      <AboutMeSection />
      <WorkSection />
      <ProjectSection />
      <ContactSection />
      <Footer />
    </Fragment>
  );
};

export default App;
