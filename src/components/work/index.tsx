import { useRef, type FC } from "react";

import { format } from "date-fns";
import SkillTile from "../skills/tile";
import { ArrowUpRightIcon } from "@phosphor-icons/react";
import { motion, useInView } from "motion/react";
import useWorks from "../../services/useWorks";
import { fadeUp } from "../../utils";

const WorkSection: FC = () => {
  const { works } = useWorks();
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.3,
  });
  return (
    <section className="px-4 py-16 scroll-mt-28" id="work">
      <div className="px-4 py-16 bg-background min-h-lvh rounded-lg" ref={ref}>
        <motion.h2
          className="mb-12 text-center"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeUp(0)}
        >
          Professional Experience
        </motion.h2>
        {works && (
          <div className="px-4 md:px-12">
            <div className="relative border-l-2 border-foreground space-y-20">
              {works.map((exp, index) => {
                const startDate = format(new Date(exp.startDate), "MMM yyyy");
                const endDate = exp.endDate
                  ? format(new Date(exp.endDate), "MMM yyyy")
                  : "Present";

                return (
                  <motion.div
                    className="flex flex-col md:flex-row gap-4 md:gap-8 ml-8"
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={fadeUp(index + 1)}
                    key={exp.name}
                  >
                    <div className="md:w-1/2 relative">
                      <span
                        className="absolute -left-10 top-11 h-4 w-4 rounded-full bg-background ring-4 ring-foreground"
                        aria-hidden="true"
                      />
                      <div className="flex flex-col items-center md:items-start md:flex-row text-center md:text-start gap-4">
                        <img
                          src={exp.logoUrl}
                          alt={`${exp.name} logo`}
                          className="w-24 h-24 rounded-lg bg-foreground p-2"
                        />
                        <div className="flex flex-col">
                          <span className="text-2xl font-semibold">
                            {exp.title}
                          </span>
                          <span className="text-xl font-medium">
                            {exp.name}
                          </span>
                          <time
                            className="text-base italic mt-1"
                            dateTime={exp.startDate}
                          >
                            {startDate} - {endDate}
                          </time>
                        </div>
                      </div>
                      <div className="mt-4 flex flex-wrap justify-center md:justify-start gap-4">
                        {exp.skillNames.map((name) => (
                          <SkillTile name={name} key={`${exp.name}-${name}`} />
                        ))}
                      </div>
                    </div>
                    <div className="mt-4 md:mt-0 md:w-1/2 flex flex-col gap-4">
                      <ul className="list-disc pl-5 space-y-2">
                        {exp.descriptions.map((bullet, index) => (
                          <li
                            key={`${exp.name}-bullet-${index}`}
                            className="text-lg leading-relaxed"
                          >
                            {bullet}
                          </li>
                        ))}
                      </ul>
                      <div className="flex justify-center md:justify-start mt-2">
                        <motion.a
                          href={exp.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          tabIndex={0}
                          aria-label={`Visit ${exp.name} website (opens in new tab)`}
                          className="inline-flex items-center gap-2 bg-foreground text-background rounded-xl py-2 px-4 
                          font-medium focus:outline-none focus:ring-2 focus:ring-foreground focus:ring-offset-2 focus:ring-offset-background"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <span className="text-lg">Visit Website</span>
                          <ArrowUpRightIcon
                            size={20}
                            aria-hidden="true"
                            weight="fill"
                          />
                        </motion.a>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default WorkSection;
