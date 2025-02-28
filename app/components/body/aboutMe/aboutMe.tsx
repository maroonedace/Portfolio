import { FC, MutableRefObject, useEffect, useState } from "react";
import mePic from "../../../assets/home/me.jpeg";
import Image from "next/image";
import { motion } from "framer-motion";
import { checkAboveThreshold } from "../utils/check";

interface AboutMeProps {
  componentRef: MutableRefObject<HTMLDivElement>;
}

const AboutMe: FC<AboutMeProps> = ({ componentRef }) => {
  const [isAboveThreshold, setIsAboveThreshold] = useState(false);

  useEffect(() => {
    if (componentRef?.current) {
      setIsAboveThreshold(checkAboveThreshold(componentRef));
    }
  }, [componentRef]);

  return (
    <div
      className="flex items-center px-8 h-[90vh] bg-cyan-700 bg-gradient-to-b from-[#010005] from-1% to-cyan-700 "
      ref={componentRef}
    >
      <motion.div
        className="flex flex-col gap-8 md:flex-row items-center"
        initial={{ transform: "translateY(200px)", opacity: 0 }}
        animate={
          isAboveThreshold ? { transform: "translateY(0px)", opacity: 1 } : {}
        }
        whileInView={
          !isAboveThreshold ? { transform: "translateY(0px)", opacity: 1 } : {}
        }
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        <Image
          src={mePic}
          className=" w-[200px] md:w-[300px] rounded-2xl"
          alt="Self Portrait"
        />
        <div className="flex flex-col gap-4">
          <h2 className="sm:text-2xl md:text-3xl lg:text-4xl text-center">
            About Me
          </h2>
          <p className="w-full sm:text-base md:text-lg lg:text-xl">
            As a software engineer who has over 5 years of software development
            experience, I have found myself working on a variety of
            opportunities ranging from working in virtual reality experiences in
            Unity, focused on creating data analysis visualizations and reports
            with Python, and getting familiar with the full stack development
            utilizing many frameworks such as React.js, Ruby on Rails, and
            PostgreSQL.
          </p>
          <p className="w-full sm:text-base md:text-lg lg:text-xl">
            In my free time, I enjoy taking casual walks to reflect and
            destress, embarking on adventures like exploring new cities or
            hiking, and spending quality time with family and friends.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutMe;
