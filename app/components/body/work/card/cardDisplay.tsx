"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FC, useEffect, useRef, useState } from "react";
import { works } from "../../../../models/work";

interface CardDisplayProps {
  name: string;
  onModalClose: () => void;
}

const CardDisplay: FC<CardDisplayProps> = ({ name, onModalClose }) => {
  const work = works.find((work) => work.name === name);
  const displayRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number>(null);

  const handleClick = () => {
    onModalClose();
  };

  useEffect(() => {
    if (displayRef) {
      setHeight(displayRef.current.clientHeight);
    }
  }, [displayRef]);

  return (
    <div
      ref={displayRef}
      className={`flex items-center justify-center mx-4 sticky bottom-8`}
      style={{ marginTop: `-${height}px` }}
    >
        <motion.div
          className="bg-cyan-900 rounded-2xl p-4 lg:p-8 cursor-pointer w-full"
          layoutId={`card-container-${work.name}`}
          onClick={handleClick}
        >
          {work.content}
        </motion.div>
    </div>
  );
};

export default CardDisplay;
