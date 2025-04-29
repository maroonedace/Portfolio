import Image from "next/image";
import IntroPic from "../assets/work/nZero/home.png";
import Scope1Pic from "../assets/work/nZero/scope1.png";
import Scope2Pic from "../assets/work/nZero/scope2.png";

const Content = () => {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col lg:flex-row gap-4 items-center">
        <div className="bg-[#e6e6e6] shrink-0 rounded-2xl flex p-2 items-center justify-center">
          <Image src={IntroPic} alt="Intro Picture" />
        </div>
        <p className="sm:text-base md:text-lg lg:text-xl">
          When I first joined NZero, I was uncertain about my ability to perform
          well, as it was my first professional role in my field. However, I
          quickly adapted to the environment and exceeded the expectations of my
          leaders. My work focused on developing a data platform that helped
          customers better understand the sources of their emissions. While my
          primary responsibility was front-end development, I also had the
          opportunity to contribute to the backend and database aspects of the
          application.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-4">
        <div className="bg-[#f9f9f9] shrink-0 rounded-2xl flex p-2 items-center justify-center">
          <Image src={Scope1Pic} alt="Background Picture" />
        </div>
        <p className="sm:text-base md:text-lg lg:text-xl">
          After showcasing my abilities and earning a promotion within a year, I
          was entrusted with leading a new project to develop a data management
          platform. The project's objective was to enhance data accessibility
          and usability, enabling customers to create, delete, and update their
          organizations with ease. In this role, I researched new technologies
          to improve productivity, authored comprehensive documentation to
          define project requirements, and created detailed tickets to guide
          developers on their tasks. Following the platform's initial release,
          customer feedback highlighted significant improvements in their
          ability to understand and utilize their data, ultimately empowering
          them to make more informed decisions.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row items-center gap-4">
        <div className="bg-[#f9f9f9] shrink-0 rounded-2xl flex p-2 items-center justify-center">
          <Image src={Scope2Pic} alt="Background Picture" />
        </div>
        <p className="sm:text-base md:text-lg lg:text-xl">
          After nearly two years with the company, management decided to focus
          on updating the user interface to enhance engagement and productivity.
          I was assigned to a dedicated team for this initiative and took the
          lead on revamping the site details page. I collaborated closely with
          designers and managers to refine the page's logic and design.
          Additionally, I worked with developers on various components,
          including implementing a new charting library to present data in a
          more visually appealing and effective manner. Following the release of
          the updated UI, we received positive feedback from both customers and
          the internal team. My contributions to the project earned me a
          promotion to Software Engineer II.
        </p>
      </div>
    </div>
  );
};

export default Content;
