import PageWrapper from "./pageWrapper";
import Header from "./components/main/header/header";
import Projects from "./components/main/body/projects";
import AboutMe from "./components/main/body/aboutMe";

export default function Page() {
  return (
    <PageWrapper>
      <div>
        <Header />
        <div className="flex flex-col px-12 py-8 gap-2">
          <div>
            <h1>Software Engineer</h1>
          </div>
          <AboutMe />
          <Projects />
        </div>
      </div>
    </PageWrapper>
  );
}
