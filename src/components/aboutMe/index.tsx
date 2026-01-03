import { type FC } from "react";

const AboutMeSection: FC = () => {
  return (
    <section
      className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-12 px-6 py-12 
      bg-linear-to-b from-primary to-cyan-800 scroll-mt-20"
      id="about"
    >
      <img
        src="/img/pfp.jpg"
        alt="Anthony Ostia headshot"
        className="rounded-lg w-75 h-100"
      />
      <div className="flex flex-col items-center justify-center">
        <h2 className="mb-8 mt-4">About Me</h2>
        <div className="flex flex-col gap-4 items-center justify-center max-w-4xl">
          <p className="text-xl">
            Software Engineer with over four years of experience developing
            full-stack web applications that deliver functional performance and
            engaging user experience. Proficient in designing responsive UIs,
            implementing scalable backend systems, and managing databases.
            Experienced in leading development teams, improving system
            efficiency, and maintaining high-quality code through automated
            testing and CI/CD pipelines. Known for delivering maintainable
            solutions under tight deadlines and collaborating effectively across
            distributed teams.{" "}
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
