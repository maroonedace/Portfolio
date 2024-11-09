"use client";

import { motion } from "framer-motion";
import { FC, useState } from "react";

interface ProjectProps {
  key: string;
  title: string;
  company: string;
  picture: JSX.Element;
  selected: string | null;
  setSelected: (value: string) => void
}

const Project: FC<ProjectProps> = ({ key, title, company, picture, selected, setSelected }) => {

  const textVariants = {
    open: {
      display: "flex",
      opacity: 1,
      transition: {
        delay: 0.75,
      },
    },
    closed: {
      display: "none",
      opacity: 0,
    },
  };

  const variants = {
    open: {
      x: 10,
      width: 800,
      height: "auto",
      transition: {
        duration: 0.75,
        type: "spring",
      },
    },
    closed: {
      x: 0,
      width: 500,
      transition: {
        duration: 0.75,
        type: "spring",
      },
    },
  };

  const handleClick = () => {
    if (selected === company) {
      setSelected(null)
    }
    else {
      setSelected(company)
    }
  }

  return (
    <motion.div
      onClick={handleClick}
      key={key}
      variants={variants}
      animate={selected === company ? "open" : "closed"}
      className="bg-white p-4 rounded flex flex-row justify-between"
    >
      <div className="flex flex-col sm:items-center md:items-start">
        <div className="flex flex-col mb-4">
          <h3>{title}</h3>
          <h4>{company}</h4>
        </div>
          <motion.div variants={textVariants}>
            Worked on the non-profit learning platform created to integrate
            classic concepts and modern technology by building an intellectual
            bridge and connecting multi-generational thought leaders. Integrated
            professional experience into the volunteer culture and created an
            optimized, organized team with KPIs and best practices, facilitating
            meetings and leading the junior volunteers on the project to enhance
            the platform's front end.
          </motion.div>
      </div>
      {picture}
    </motion.div>
  );
};

export default Project;
