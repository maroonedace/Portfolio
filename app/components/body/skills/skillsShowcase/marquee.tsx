"use client";
import React from "react";
import clsx from "clsx";

type MarqueeProps = {
  children: React.ReactNode;
  direction: "left" | "right";
};

const Marquee = ({
  children,
  direction,
}: MarqueeProps) => {
  const a1 =
    direction === "left" ? "animate-marqueeLeft" : "animate-marqueeRight";
  const a2 =
    direction === "left" ? "animate-marqueeLeft2" : "animate-marqueeRight2";

  return (
    <div className="relative overflow-hidden">
      <div
        className="relative"
        style={{
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 24px, black calc(100% - 24px), transparent)",
          maskImage:
            "linear-gradient(to right, transparent, black 24px, black calc(100% - 24px), transparent)",
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
        }}
      >
        <div
          className={clsx(
            a1,
            "inline-flex items-center gap-2 whitespace-nowrap w-max will-change-transform"
          )}
        >
          {children}
        </div>
        <div
          className={clsx(
            a2,
            "absolute top-0 inline-flex items-center gap-2 whitespace-nowrap w-max will-change-transform"
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

export default Marquee
