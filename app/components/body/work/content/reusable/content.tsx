import { motion } from "framer-motion";
import Image from "next/image";
import TechSkillList from "./techList";
import { Work } from "../../../../../models/work";
import { Skill } from "../../../../../models/skill";
import { FC } from "react";
import { format } from "date-fns";

interface ContentProps {
  work: Work
  listOfSkills: Skill[] 
}

const Content: FC<ContentProps> = ({ work, listOfSkills }) => {
  const startDate = format(work.startDate, "MMMM yyyy")
  const endDate = work.endDate ? format(work.endDate, "MMMM yyyy") : null
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-center gap-4 xs:max-sm:flex-wrap lg:flex-nowrap">
        <motion.div className="flex shrink-0" layoutId={`card-${work.name}`}>
          <Image
            className="rounded-2xl bg-white w-[100px] h-[100px] lg:w-[300px] lg:h-[300px] p-8"
            src={work.logo}
            alt="Logo"
          />
        </motion.div>
        <motion.div
          className="p-4 bg-gray-700 rounded-2xl flex flex-col w-full justify-between gap-4 text-white"
          initial={{ transform: "translateX(-200px)", opacity: 0 }}
          whileInView={{ transform: "translateX(0px)", opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div>
            <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl">{work.title}</h2>
            <h3 className="text-sm sm:text-base md:text-lg lg:text-xl">{startDate} {endDate ? `- ${endDate}`: ""}</h3>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-sm sm:text-base md:text-lg lg:text-xl">Technologies Utilized</h3>
            <TechSkillList listOfSkills={listOfSkills} />
          </div>
        </motion.div>
      </div>
      <motion.div
        initial={{ transform: "translateX(-200px)", opacity: 0 }}
        whileInView={{ transform: "translateX(0px)", opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="bg-gray-700 rounded-2xl p-4 flex xs:max-sm:flex-wrap lg:flex-nowrap"
      >
        <Image
          className="rounded-2xl bg-white w-[264px] h-[100px] lg:w-[800px] lg:h-[400px] p-8"
          src={work.logo}
          alt="Dashboard Page"
        />
        <p className="text-white p-4 text-sm sm:text-base md:text-lg lg:text-xl">
          NZero is a real-time data decarbonization platform for sustainability
          leaders focusing on performance tracking and delivering a carbon ROI.
          I was hired on the spot during an interview with the CEO and was
          promoted twice within the company. During my tenure, I was tasked with
          a variety of stories such as creating new
        </p>
      </motion.div>
    </div>
  );
};

export default Content;
