import PageWrapper from "./pageWrapper";
import Header from "./components/main/header/header";
import Projects from "./components/main/body/projects";

export default function Page() {
  return (
    <PageWrapper>
      <div>
        <Header />
        <div className="flex flex-col px-12 py-8 gap-2">
          <Projects />
        </div>
      </div>
    </PageWrapper>
  );
}
