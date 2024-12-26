import { FC, MutableRefObject, useCallback, useEffect, useState } from "react";
import mePic from "../../../assets/home/me.jpeg";
import Image from "next/image";
import { motion } from "framer-motion";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../../../tailwind.config";
import { calculateInitial, calculateView, pxToNumber } from "../../../util/converter";

interface AboutMeProps {
  componentRef: MutableRefObject<HTMLDivElement>;
}

const AboutMe: FC<AboutMeProps> = ({ componentRef }) => {
  const fullConfig = resolveConfig(tailwindConfig);
  const width = window?.screen?.width;

  const [initial, setInitial] = useState<string>(
    calculateInitial(fullConfig, width)
  );
  const [view, setView] = useState<string>(calculateView(fullConfig, width));

  useEffect(() => {
    setInitial(calculateInitial(fullConfig, width));
    setView(calculateView(fullConfig, width));
  }, [width]);

  return (
    <div
      className="px-8 py-[60px] sm:py-[80px] md:py-[100px] lg:py-[120px] bg-cyan-700 bg-gradient-to-b from-[#010005] from-1% to-cyan-700 text-white"
      ref={componentRef}
    >
      <motion.div
        className="flex flex-col gap-8 md:flex-row items-center justify-center text-center"
        initial={{ transform: initial, opacity: 0 }}
        whileInView={{ transform: view, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        <Image
          src={mePic}
          className=" w-[200px] md:w-[300px] rounded-2xl"
          alt="Self Portrait"
        />
        <div className="flex flex-col gap-4 items-center">
          <h2 className="sm:text-2xl md:text-3xl lg:text-4xl">About Me</h2>
          <p className="w-full sm:text-base md:text-lg lg:text-2xl">
            As a software engineer who has over 5 years of software development
            experience, I have found myself working on a variety of
            opportunities ranging from working in virtual reality experiences in
            Unity, focused on creating data analysis visualizations and reports
            with Python, and getting familiar with the full stack development
            utilizing many frameworks such as React.js, Ruby on Rails, and
            PostgreSQL.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutMe;
