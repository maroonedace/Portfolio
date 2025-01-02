import Image from "next/image";
import OPPic from "../assets/work/op/work.png";

const Content = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-4 items-center">
      <Image className="rounded-2xl sm:w-[70%] md:w-[50%] lg:w-[40%]" src={OPPic} alt="LITE" />
      <p className="sm:text-base md:text-lg lg:text-xl">
        As a volunteer at Oceanside Perspective, I initially joined to develop a
        new website aimed at facilitating the exchange of ideas with users by
        showcasing content. While working on the project, I identified flaws in
        the existing UI and its underlying logic that impacted the website's
        functionality. I took the initiative to refactor the codebase,
        organizing it into a cleaner file structure and improving code
        readability and maintainability. Additionally, I led the team by setting
        up a Jira board to streamline task management and assigning
        responsibilities to team members. To further enhance the website, I
        contributed to its redesign, focusing on improving user engagement and
        creating a more user-friendly experience.
      </p>
    </div>
  );
};

export default Content;
