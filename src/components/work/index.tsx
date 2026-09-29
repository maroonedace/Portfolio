import { useRef, type FC } from "react";
import { motion, useInView } from "motion/react";
import { fadeUp } from "../../utils";
import WorkCard from "./card";
import { works } from "./constants";

const sortedWorks = [...works].sort(
  (a, b) => b.startDate.getTime() - a.startDate.getTime()
);

const WorkSection: FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.05,
  });
  return (
    <section className="px-4 py-8" id="work" aria-labelledby="work-title">
      <div className="px-4 py-16 bg-background min-h-lvh rounded-lg">
        <motion.h2
          id="work-title"
          className="mb-12 text-center"
          initial="hidden"
          ref={ref}
          animate={isInView ? "visible" : "hidden"}
          variants={fadeUp(0)}
        >
          Professional Experience
        </motion.h2>
        <div className="px-4 md:px-12">
          <ol
            role="list"
            className="relative border-l-2 border-foreground space-y-20"
          >
            {sortedWorks.map((work) => {
              return <WorkCard work={work} key={work.name} />;
            })}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
