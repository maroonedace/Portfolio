"use client";

import { motion } from "framer-motion";
import { FC } from "react";

interface ProjectProps {
  key: string;
  title: string;
  company: string;
  picture: JSX.Element;
}

const Project: FC<ProjectProps> = ({ key, title, company, picture }) => {
  return (
    <motion.button
      key={key}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 1 }}
      className={"bg-white p-4 rounded flex flex-row justify-between"}
    >
      <div className="flex flex-col sm:items-center md:items-start">
        <h3>{title}</h3>
        <h4>{company}</h4>
      </div>
      {picture}
    </motion.button>
  );
};

export default Project;
