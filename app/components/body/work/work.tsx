import { FC, MutableRefObject } from "react";
import CardList from "./card/cardList";
import { motion } from "framer-motion";

interface WorkProps {
  componentRef: MutableRefObject<HTMLDivElement>;
}

const Work: FC<WorkProps> = ({ componentRef }) => {
  return (
    <div
      className="px-4 flex flex-col gap-8 items-center justify-center bg-cyan-700 py-10 md:py-20"
      id="work"
      ref={componentRef}
    >
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="flex items-center flex-col"
      >
        <h2 className="sm:text-2xl md:text-3xl lg:text-4xl">Featured Works</h2>
        <p className="sm:text-base md:text-lg lg:text-xl">
          Click on one of the following below to learn more
        </p>
      </motion.div>
      <CardList />
    </div>
  );
};

export default Work;
