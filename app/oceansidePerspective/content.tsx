import Image from "next/image";
import OPPic from "../assets/work/op/opdashboard.png";

const Content = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col lg:flex-row gap-6 items-center">
        <Image
          className="md:w-[50%] rounded-xl"
          src={OPPic}
          alt="Background Picture"
        />
        <p className="sm:text-base md:text-lg lg:text-xl">
          Working as a volunteer at Oceanside Perspective, I came into the role
          with only knowing about the need of a new website that would allow the
          exchanging of ideas with its users by showcasing content. As I started
          to do developing on the project, I came to understand some of the
          flaws the current UI and its logic had in order to run the website. I
          started working on refactoring the work into a more organized file
          structure and updated the code to be more readable and maintainable. I
          also helped in leading the team by setting up a Jira board and
          assigning tasks to the team members. I then started working on the
          redesign of the website in order to increase user engagement and make
          the website more user friendly.
        </p>
      </div>
    </div>
  );
};

export default Content;
