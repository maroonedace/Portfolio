import { motion } from "framer-motion";
import WorkSkillList from "./skillList";
import { format } from "date-fns";
import Image from "next/image";
import { FC } from "react";
import { Work } from "../../models/work";
import { Skill } from "../../models/skill";

interface WorkDetailHeaderProps {
  work: Work;
}

const WorkDetailHeader: FC<WorkDetailHeaderProps> = ({
  work,
}) => {
  const startDate = format(work.startDate, "MMMM yyyy");
  const endDate = work.endDate ? format(work.endDate, "MMMM yyyy") : null;

  return (
    <div className="flex justify-center gap-4 xs:max-sm:flex-wrap">
      <motion.div
        className="p-4 bg-cyan-800 rounded-2xl flex flex-col items-center sm:items-start sm:flex-row w-full gap-4 "
        initial={{ transform: "translateX(-200px)", opacity: 0 }}
        animate={{ transform: "translateX(0px)", opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <motion.div className="flex shrink-0" layoutId={`card-${work.name}`}>
          <Image
            className="rounded-2xl bg-white w-[200px] h-[200px] p-4 md:w-[264px] md:h-[264px] lg:p-8"
            src={work.logo}
            alt="Logo"
          />
        </motion.div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <h3 className="sm:text-xl md:text-2xl lg:text-3xl">{work.title}</h3>
            <h4 className="sm:text-lg md:text-xl lg:text-2xl">
              {startDate} {endDate ? `- ${endDate}` : ""}
            </h4>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="sm:text-lg md:text-xl lg:text-2xl">
              Technologies Utilized
            </h4>
            <WorkSkillList listOfSkills={work.listOfSkills} />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default WorkDetailHeader