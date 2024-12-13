"use client";

import { motion } from "framer-motion";
import { FC } from "react";
import Image from "next/image";
import { Work } from "../../../../models/work";

interface CardProps {
  work: Work;
  onModalOpen: (content: string) => void;
  index: number;
}

const Card: FC<CardProps> = ({ work, onModalOpen, index }) => {
  const handleClick = () => {
    onModalOpen(work.name);
  };

  return (
    <motion.div whileHover={{scale: 1.1}} initial={{scale: 1}}>
      <motion.div
        className={`w-[250px] h-[250px] cursor-pointer`}
        onClick={handleClick}
        initial={{ transform: "translateY(200px)", opacity: 0 }}
        whileInView={{ transform: "translateY(0px)", opacity: 1 }}
        transition={{ delay: 0.3 + index * 0.3 }}
        viewport={{ once: true }}
        key={work.name}
        layoutId="modal"
      >
        <motion.div
          layoutId={`card-container-${work.name}`}
          className="w-full h-full bg-white rounded-2xl"
        >
          <motion.div
            className={`relative w-full h-full`}
            layoutId={`card-${work.name}`}
          >
            <motion.div className="absolute inset-0 flex items-center justify-center">
              <Image width={200} className="h-auto" src={work.logo} alt="" priority />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Card;
