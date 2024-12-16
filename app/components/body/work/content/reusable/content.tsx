import { motion } from "framer-motion";
import Image from "next/image";
import TechSkillList from "./techList";
import { Work } from "../../../../../models/work";
import { Skill } from "../../../../../models/skill";
import { FC } from "react";
import { format } from "date-fns";
import Link from "next/link";

interface ContentProps {
  work: Work;
  listOfSkills: Skill[];
}

const Content: FC<ContentProps> = ({ work, listOfSkills }) => {
  const startDate = format(work.startDate, "MMMM yyyy");
  const endDate = work.endDate ? format(work.endDate, "MMMM yyyy") : null;
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-center gap-4 xs:max-sm:flex-wrap lg:flex-nowrap">
        {/* <motion.div className="flex shrink-0" layoutId={`card-${work.name}`}>
          <Image
            className="rounded-2xl bg-white w-[100px] h-[100px] p-4 lg:w-[300px] lg:h-[300px] lg:p-8"
            src={work.logo}
            alt="Logo"
          />
        </motion.div> */}
        <motion.div
          className="p-4 bg-gray-700 rounded-2xl flex flex-col w-full justify-between gap-4 text-white"
          initial={{ transform: "translateX(-200px)", opacity: 0 }}
          whileInView={{ transform: "translateX(0px)", opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div>
            <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl">
              {work.title}
            </h2>
            <h3 className="text-sm sm:text-base md:text-lg lg:text-xl">
              {startDate} {endDate ? `- ${endDate}` : ""}
            </h3>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-sm sm:text-base md:text-lg lg:text-xl">
              Technologies Utilized
            </h3>
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
          className="rounded-2xl bg-white w-full h-[100px] lg:w-[800px] lg:h-[400px] p-8"
          src={work.logo}
          alt="Dashboard Page"
        />
        <div className="p-4 flex flex-col gap-4">
          <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl">
            {work.description}
          </p>
          <div>
            <ul className="list-disc pl-4">
              {work.points.map((point) => {
                return <li className="text-white text-sm lg:text-base">{point}</li>;
              })}
            </ul>
          </div>
          <div className="flex gap-4">
            <Link
              href={work.website}
              target="_blank"
              className="py-2 px-4 rounded-2xl border border-white text-white cursor-pointer hover:bg-gray-600"
            >
              View Website
            </Link>
            {work.github && (
              <Link
                href={work.github}
                target="_blank"
                className="py-2 px-4 rounded-2xl border border-white text-white cursor-pointer hover:bg-gray-600"
              >
                View Github
              </Link>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Content;
