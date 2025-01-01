import Image from "next/image";
import NZeroPic from "../assets/work/nZero/nzeroDashboard.jpeg";

const Content = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col lg:flex-row gap-6 items-center">
        <Image
          className="md:w-[50%] rounded-xl"
          src={NZeroPic}
          alt="Background Picture"
        />
        <p className="sm:text-base md:text-lg lg:text-xl">
          When I first got employed by NZero, I was very uncertain about
          performing well as it as my first professional job working in my
          field. However, I was able to quickly adapt to the environment and
          able to exceed the expectations of my leaders. Thw work revolved
          around a data platform that allowed our customers to better understand
          where their emissions is coming from. I mainly focused on developing
          on the front end of the application, but I also had opportunities to
          work with our backend and our database.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-6">
        <Image
          className="md:w-[50%] rounded-xl"
          src={NZeroPic}
          alt="Background Picture"
        />
        <p className="sm:text-base md:text-lg lg:text-xl">
          As I was able to showcase my abilities and achieved a promotion within
          a year, they decided to put me in a position to lead a whole new
          project revolving around a new data management platform. The objective
          of this project was to increase data accessibility and usability for
          our customers that allowed them to create, delete, and update their
          organizations accordingly. I handled the project by researching new
          technologies that we can use to increase productivity, write
          documentation that would help flesh out the requirements of the
          project, and create detailed tickets that would help the developers
          understand what they needed to do. At the end of the initial release
          of the project, we ended up getting feedback from our customers that
          they were able to understand their data better and were able to make
          better decisions based on the data that they were able to see.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row items-center gap-6">
        <Image
          className="md:w-[50%] rounded-xl"
          src={NZeroPic}
          alt="Background Picture"
        />
        <p className="sm:text-base md:text-lg lg:text-xl">
          After almost two years into the company, the management decided they
          would like to focus on updating the certain UI in order to increase
          user engagement and productivity. They brought me into a dedicated
          team that would focus on this project, where they would have me lead
          on updating our site details page. I paired up with designers and
          managers in order to solidify the new logic and design of the page. I
          also worked with developers on their pages such as implementing a new
          charting library that would allow us to display data in a more
          visually appealing way. After the release of our UI update, we
          received positive feedback from both our customers and our internal
          team. I was able to get promoted to Software Engineer II due to my
          work on this project.
        </p>
      </div>
    </div>
  );
};

export default Content;
