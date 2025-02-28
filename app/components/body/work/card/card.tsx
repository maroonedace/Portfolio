"use client";

import { motion } from "framer-motion";
import { FC, useCallback } from "react";
import Image from "next/image";
import { Work } from "../../../../models/work";
import { useRouter } from "next/navigation";

interface CardProps {
  work: Work;
  index: number;
  isAboveThreshold: boolean;
}

const Card: FC<CardProps> = ({ work, index, isAboveThreshold }) => {
  const router = useRouter();

  const handleClick = useCallback(() => {
    router.push(`/${work.url}`);
  }, []);

  return (
    <motion.div whileHover={{ scale: 1.1 }} initial={{ scale: 1 }}>
      <motion.div
        className={`w-[100px] h-[100px] sm:w-[148px] sm:h-[148px] md:w-[248px] md:h-[248px] cursor-pointer`}
        initial={{ transform: "translateY(200px)", opacity: 0 }}
        animate={isAboveThreshold ? { transform: "translateY(0px)", opacity: 1 }: {}}
        whileInView={!isAboveThreshold ? { transform: "translateY(0px)", opacity: 1 }: {}}
        transition={{ delay: 0.3 + index * 0.3 }}
        onClick={handleClick}
        viewport={{ once: true }}
        key={work.name}
        layoutId="modal"
      >
        <motion.div
          layoutId={`card-container-${work.name}`}
          className="w-full h-full bg-white rounded-2xl p-4"
        >
          <motion.div
            className={`relative w-full h-full`}
            layoutId={`card-${work.name}`}
          >
            <motion.div className="absolute inset-0 flex items-center justify-center">
              <Image
                width={200}
                className="h-auto"
                src={work.logo}
                alt=""
                priority
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Card;
