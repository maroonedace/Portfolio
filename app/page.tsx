import PageWrapper from "./pageWrapper";
import Header from "./components/main/header";

export default function Page() {
  return (
    <PageWrapper>
      <div>
        <Header />
        <div className="flex flex-col p-4 gap-2">
          <h2>Software Engineer</h2>
          <div>Leading project teams in successful implementations to meet company goals and objectives</div>
          <div>
            <h3>Experiences</h3>
            <div>
              <p>NZero</p>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
