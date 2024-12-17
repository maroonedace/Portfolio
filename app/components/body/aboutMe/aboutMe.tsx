import { FC, MutableRefObject } from "react";
import mePic from "../../../assets/home/me.jpg"
import Image from "next/image";

interface AboutMeProps {
  componentRef: MutableRefObject<HTMLDivElement>;
}

const AboutMe: FC<AboutMeProps> = ({ componentRef }) => {
  return (
    <div
      className="flex flex-col gap-4 md:flex-row px-8 py-[60px] sm:py-[80px] md:py-[100px] lg:py-[120px] bg-cyan-700 text-center items-center justify-center bg-gradient-to-b from-[#010005] from-1% to-cyan-700 text-white"
      ref={componentRef}
    >
      <Image src={mePic} className=" w-[200px] md:w-[300px] rounded-2xl" alt="Self Portait"/>
      <div className="flex flex-col gap-4 items-center">
        <h2 className="sm:text-2xl md:text-3xl lg:text-4xl">
          About Me
        </h2>
        <p className="w-full sm:w-[90%] md:w-[85%] lg:w-[80%] sm:text-base md:text-lg lg:text-2xl">
          As a software engineer who has over 5 years of software development
          experience, I have found myself working on a variety of opportunities
          ranging from working in virtual reality experiences in Unity, focused on
          creating data analysis visualizations and reports with Python, and
          getting familiar with the full stack development utilizing many
          frameworks such as React.js, Ruby on Rails, and PostgreSQL.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
