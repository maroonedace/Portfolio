"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FC } from "react";
import { works } from "../../../../models/work";

interface CardDisplayProps {
  name: string;
  onModalClose: () => void;
}

const CardDisplay: FC<CardDisplayProps> = ({ name, onModalClose }) => {
  const work = works.find((work) => work.name === name);

  const handleClick = () => {
    onModalClose();
  };

  return (
    <div className="absolute inset-0 flex items-center mx-4">
      <motion.div
        className="bg-cyan-800 rounded-2xl p-4 cursor-pointer"
        layoutId={`card-container-${work.name}`}
        onClick={handleClick}
      >
        <div className="flex">
          <motion.div
            className={`bg-white p-4 rounded-2xl w-[200px] h-[200px] flex items-center justify-center`}
            layoutId={`card-${work.name}`}
          >
            <Image src={work.logo} alt="" />
          </motion.div>
          <div className="p-4 flex flex-col gap-2 w-9/12">
            <div className="text-white text-2xl">{work.title}</div>
            <p className="text-white text-lg text-wrap">{work.summary}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CardDisplay;
