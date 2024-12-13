import { FC, MutableRefObject } from "react";

interface AboutMeProps {
  componentRef: MutableRefObject<HTMLDivElement>;
}

const AboutMe: FC<AboutMeProps> = ({ componentRef }) => {
  return (
    <div
      className="flex flex-col gap-4 p-4 bg-cyan-700 py-[300px] text-center items-center justify-center bg-gradient-to-b from-[#010005] from-1% to-cyan-700 text-white"
      ref={componentRef}
    >
      <h1>About Me</h1>
      <p className="w-3/4 text-xl">
        As a software engineer who has over 5 years of software development
        experience, I have found myself working on a variety of opportunities
        ranging from working in virtual reality experiences in Unity, focused on
        creating data analysis visualizations and reports with Python, and
        getting familiar with the full stack development utilizing many
        frameworks such as React.js, Ruby on Rails, and PostgreSQL.
      </p>
    </div>
  );
};

export default AboutMe;
