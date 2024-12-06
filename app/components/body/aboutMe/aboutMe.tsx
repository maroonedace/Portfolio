import { FC, MutableRefObject } from "react";

interface AboutMeProps {
  componentRef: MutableRefObject<HTMLDivElement>
}

const AboutMe:FC<AboutMeProps> = ({componentRef}) => {
  return (
    <div className="flex flex-col gap-2 p-4 bg-cyan-700 h-[50vh]" ref={componentRef}>
      <h2>About Me</h2>
      <p className="">
        As a software engineer who has over 5 years of software development experience, I have found myself working on a variety of opportunities
        ranging from working in virtual reality experiences in Unity, focused on creating data analysis visualizations and reports with Python,
        and getting familiar with the full stack development utilizing many frameworks such as React.js, Ruby on Rails, and PostgreSQL.
      </p>
    </div>
  );
};

export default AboutMe;
