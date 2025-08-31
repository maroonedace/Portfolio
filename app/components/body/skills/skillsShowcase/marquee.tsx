"use client";
import React from "react";
import clsx from "clsx";

type MarqueeProps = {
  children: React.ReactNode;
  direction: "left" | "right";
};

const Marquee = ({ children, direction }: MarqueeProps) => {
  const a1 =
    direction === "left" ? "animate-marqueeLeft" : "animate-marqueeRight";
  const a2 =
    direction === "left" ? "animate-marqueeLeft2" : "animate-marqueeRight2";

  return (
    <div className="relative overflow-hidden">
      <div
        className={clsx(
          a1,
          "inline-flex items-center whitespace-nowrap w-max will-change-transform"
        )}
      >
        {children}
      </div>
      <div
        className={clsx(
          a2,
          "absolute top-0 inline-flex items-center whitespace-nowrap w-max will-change-transform left-0"
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default Marquee;
