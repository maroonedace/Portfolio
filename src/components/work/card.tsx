import { motion, useInView } from "motion/react";
import { useRef, type FC } from "react";
import type { Work } from "./model";
import { fadeUp } from "../../utils";
import { ArrowUpRightIcon } from "@phosphor-icons/react";
import SkillTile from "../skills/tile";
import { formatMonthYear } from "../../lib/dates";

interface WorkCardProps {
  work: Work;
}

const WorkCard: FC<WorkCardProps> = ({ work }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.05,
  });

  const startDate = formatMonthYear(work.startDate);
  const endDate = work.endDate ? formatMonthYear(work.endDate) : "Present";
  return (
    <motion.div
      className="flex flex-col md:flex-row gap-4 md:gap-8 ml-8"
      initial="hidden"
      ref={ref}
      animate={isInView ? "visible" : "hidden"}
      variants={fadeUp(0)}
      key={work.name}
    >
      <div className="md:w-1/2 relative">
        <span
          className="absolute -left-10 top-11 h-4 w-4 rounded-full bg-background ring-4 ring-foreground"
          aria-hidden="true"
        />
        <div className="flex flex-col items-center md:items-start md:flex-row text-center md:text-start gap-4">
          <img
            src={work.logoUrl}
            alt={`${work.name} logo`}
            className="w-24 h-24 rounded-lg bg-foreground p-2"
          />
          <div className="flex flex-col">
            <span className="text-2xl font-semibold">{work.title}</span>
            <span className="text-xl font-medium">{work.name}</span>
            <time className="text-base italic mt-1" dateTime={work.startDate}>
              {startDate} - {endDate}
            </time>
          </div>
        </div>
        <div className="mt-4 flex flex-wrap justify-center md:justify-start gap-4">
          {work.skillNames.map((name) => (
            <SkillTile name={name} key={`${work.name}-${name}`} />
          ))}
        </div>
      </div>
      <div className="mt-4 md:mt-0 md:w-1/2 flex flex-col gap-4">
        <ul className="list-disc pl-5 space-y-2">
          {work.descriptions.map((bullet, index) => (
            <li
              key={`${work.name}-bullet-${index}`}
              className="text-lg leading-relaxed"
            >
              {bullet}
            </li>
          ))}
        </ul>
        <div className="flex justify-center md:justify-start mt-2">
          <motion.a
            href={work.website}
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={0}
            aria-label={`Visit ${work.name} website (opens in new tab)`}
            className="inline-flex items-center gap-2 bg-foreground text-background rounded-xl py-2 px-4 
                          font-medium focus:outline-none focus:ring-2 focus:ring-foreground focus:ring-offset-2 focus:ring-offset-background"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-lg">Visit Website</span>
            <ArrowUpRightIcon size={20} aria-hidden="true" weight="fill" />
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default WorkCard;
