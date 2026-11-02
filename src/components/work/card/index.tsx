import { motion, useInView } from "motion/react";
import { useRef, type FC } from "react";
import { fadeUp } from "../../../utils";
import { type Work } from "../constants";
import CompanyName from "./companyName";
import DateRange from "./dateRange";
import SkillList from "../../common/skillList";
import DescriptionList from "./descriptionList";

interface WorkCardProps {
  work: Work;
}

const WorkCard: FC<WorkCardProps> = ({ work }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.05,
  });

  return (
    <motion.li
      className="flex flex-col md:flex-row gap-4 md:gap-8 ml-8"
      initial="hidden"
      ref={ref}
      animate={isInView ? "visible" : "hidden"}
      variants={fadeUp(0)}
    >
      <div className="md:w-1/2 relative">
        <span
          className="absolute -left-10 top-11 h-4 w-4 rounded-full bg-background ring-4 ring-foreground"
          aria-hidden="true"
        />
        <div className="flex flex-col items-center md:items-start md:flex-row text-center md:text-start gap-4">
          <img
            src={work.logoUrl}
            alt=""
            className="w-24 h-24 rounded-lg bg-foreground p-2"
          />
          <div className="flex flex-col">
            <h3 className="flex flex-col tracking-normal">
              <span className="text-2xl">{work.title}</span>
              <span className="sr-only"> at </span>
              <CompanyName name={work.name} websiteUrl={work.websiteUrl} />
            </h3>
            <DateRange startDate={work.startDate} endDate={work.endDate} />
          </div>
        </div>
        <SkillList skills={work.skills} className="mt-4" />
      </div>
      <div className="mt-4 md:mt-0 md:w-1/2 flex flex-col gap-4">
        <DescriptionList descriptions={work.descriptions} />
      </div>
    </motion.li>
  );
};

export default WorkCard;
