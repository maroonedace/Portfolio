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
    <div className="sticky bottom-0 flex items-center justify-center mx-4">
      <motion.div
        className="bg-cyan-900 rounded-2xl p-8 cursor-pointer w-full"
        layoutId={`card-container-${work.name}`}
        onClick={handleClick}
      >
        {work.content}
      </motion.div>
    </div>
  );
};

export default CardDisplay;
