import { motion, useInView } from "motion/react";
import { useRef, type FC } from "react";
import { fadeUp } from "../../utils";
import { type Work } from "./constants";
import { ArrowUpRightIcon } from "@phosphor-icons/react/ArrowUpRight";
import SkillTile from "../skills/tile";
import NewTabHint from "../newTabHint";
import { formatMonthYear, toIsoMonth } from "../../lib/dates";

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
              {work.websiteUrl ? (
                <a
                  href={work.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="self-center md:self-start inline-flex items-center gap-1 text-xl font-medium hover:underline
                            underline-offset-4 hover:text-foreground/70 rounded focus-ring"
                >
                  <span>
                    {work.name}
                    <NewTabHint />
                  </span>
                  <ArrowUpRightIcon size={18} aria-hidden="true" weight="fill" />
                </a>
              ) : (
                <span className="text-xl font-medium">{work.name}</span>
              )}
            </h3>
            <p className="text-base italic mt-1">
              <time dateTime={toIsoMonth(work.startDate)}>
                {formatMonthYear(work.startDate)}
              </time>
              {" - "}
              {work.endDate ? (
                <time dateTime={toIsoMonth(work.endDate)}>
                  {formatMonthYear(work.endDate)}
                </time>
              ) : (
                "Present"
              )}
            </p>
          </div>
        </div>
        <ul
          role="list"
          className="mt-4 flex flex-wrap justify-center md:justify-start gap-4"
        >
          {work.skills.map((name) => (
            <li key={`${work.name}-${name}`}>
              <SkillTile name={name} />
            </li>
          ))}
        </ul>
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
      </div>
    </motion.li>
  );
};

export default WorkCard;
