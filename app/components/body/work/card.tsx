"use client";

import { motion } from "framer-motion";
import { FC } from "react";
import Image from "next/image";
import { Work } from "../../../models/work";

interface CardProps {
  work: Work;
  onModalOpen: (content: string) => void;
}

const Card: FC<CardProps> = ({ work, onModalOpen }) => {
  const handleClick = () => {
    onModalOpen(work.name);
  };

  const variants = {
    visible: { opacity: 0.3 },
    hidden: { opacity: 0 },
  };

  // const imageVariants = {
  //   visible: { opacity: 0.5 },
  //   hidden: { opacity: 1 },
  // };

  return (
    <motion.li
      className={`w-[300px] h-[300px] relative cursor-pointer`}
      onClick={handleClick}
      key={work.name}
      initial="hidden"
      whileHover="visible"
      layoutId="modal"
    >
      <motion.div
        layoutId={`card-container-${work.name}`}
        className="w-full h-full"
      >
        <motion.div
          className={`relative w-full h-full bg-slate-200 rounded-2xl`}
          layoutId={`card-${work.name}`}
        >
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            // variants={imageVariants}
          >
            <Image className="w-[60%]" src={work.logo} alt="" />
          </motion.div>
          <motion.div
            className="w-full h-full bg-black rounded-2xl relative"
            variants={variants}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-x-4 bottom-[15%] z-10 flex justify-center">
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.li>
  );
};

export default Card;
