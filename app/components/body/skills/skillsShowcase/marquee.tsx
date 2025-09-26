"use client";
import { motion } from "framer-motion";
import { ReactNode, useEffect, useRef, useState } from "react";
import { useWindowSize } from "@react-hook/window-size";

type MarqueeProps = {
  children: ReactNode;
  direction: "left" | "right";
};

const MARQUEE_SPEED = 32;
const REPEAT = 3;

const Marquee = ({ children, direction }: MarqueeProps) => {
  const marquee = useRef<null | HTMLDivElement>(null);
  const [width] = useWindowSize();
  const [marqueeWidth, setMarqueeWidth] = useState(0);

  useEffect(() => {
    if (global.window !== undefined) {
      setMarqueeWidth(marquee.current!.scrollWidth);
    }
  }, [width]);

  const duplicateChildren = new Array(REPEAT).fill(children);

  const x =
    direction == "left"
      ? [0, -marqueeWidth / REPEAT]
      : [-marqueeWidth / REPEAT, 0];

  return (
    <motion.div className="overflow-hidden w-[90vw]">
      <motion.div
        animate={{
          x,
          scale: 1,
        }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          duration: MARQUEE_SPEED,
        }}
        ref={marquee}
        className="flex"
      >
        {duplicateChildren.map((child, index) => {
          return (
            <div
              key={index}
              className={`flex flex-row flex-shrink-0`}
            >
              {child}
            </div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default Marquee;
