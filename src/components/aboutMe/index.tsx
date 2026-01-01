import { type FC } from "react";

const AboutMe: FC = () => {
  return (
    <section
      className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-12 px-6 py-12 bg-gradient-to-b from-primary to-cyan-800 scroll-mt-20"
      id="about"
    >
      <img
        src="/images/aboutMe/portrait.jpg"
        alt="Anthony Ostia headshot"
        className="rounded-lg w-75 h-100"
      />
      <div className="flex flex-col items-center justify-center">
        <h2 className="mb-8 mt-4 md:mt-0">About Me</h2>
        <div className="flex flex-col gap-4 items-center justify-center max-w-5xl">
          {/* {aboutData.descriptions.map((desc, index) => (
            <p key={index} className="text-center">
              {desc}
            </p>
          ))} */}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
