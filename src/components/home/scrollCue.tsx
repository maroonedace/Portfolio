import { type FC } from "react";
import { ArrowDownIcon } from "@phosphor-icons/react/ArrowDown";
import { motion } from "motion/react";
import { fadeUp } from "../../utils";

interface ScrollCueProps {
  isInView: boolean;
}

const ScrollCue: FC<ScrollCueProps> = ({ isInView }) => (
  <motion.a
    className="absolute bottom-8 p-2 left-1/2 -translate-x-1/2 rounded-full hover:text-foreground/70 focus-ring"
    href="#about"
    aria-label="Scroll to about section"
    initial="hidden"
    animate={isInView ? "visible" : "hidden"}
    variants={fadeUp(3)}
  >
    <ArrowDownIcon
      className="w-10 h-10 md:w-16 md:h-16 motion-safe:animate-bounce"
      strokeWidth={1.5}
      aria-hidden="true"
      weight="fill"
    />
  </motion.a>
);

export default ScrollCue;
