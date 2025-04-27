import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FC, MutableRefObject, useEffect, useState } from "react";

import back from "../../../assets/home/back.jpg";
import fileSvg from "../../../assets/home/file.svg";
import { checkAboveThreshold } from "../utils/check";

interface HomeProps {
  componentRef: MutableRefObject<HTMLDivElement>;
}

const Home: FC<HomeProps> = ({ componentRef }) => {
  const [isAboveThreshold, setIsAboveThreshold] = useState(false);

  useEffect(() => {
    if (componentRef?.current) {
      setIsAboveThreshold(checkAboveThreshold(componentRef));
    }
  }, [componentRef]);

  return (
    <div className="relative bg-black h-[90vh]" ref={componentRef} id="home">
      <Image
        className="absolute h-full opacity-85"
        priority
        src={back}
        alt="back"
      />
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={isAboveThreshold ? { scale: 1, opacity: 1 } : {}}
        whileInView={!isAboveThreshold ? { scale: 1, opacity: 1 } : {}}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="h-full"
      >
        <div className="absolute inset-x-0 top-[18%] flex justify-center text-center">
          <h1 className="text-[100px]">
            Anthony Ostia
          </h1>
        </div>
        <div className="flex flex-col absolute inset-0 justify-center items-center text-center gap-4">
          <h2>
            Software Engineer
          </h2>
          <span className="text-2xl">
            Always looking for new opportunities to grow and engage in
            insightful conversations
          </span>
        </div>
        <div className="flex flex-col items-center gap-4 absolute inset-x-0 bottom-8">
          <motion.button
            whileHover={{
              scale: 1.1,
            }}
            tabIndex={-1}
          >
            <Link
              href="/resume.pdf"
              target="_blank"
              tabIndex={0}
              className="flex gap-2 border py-2 px-4 rounded border-white items-center"
            >
              <Image
                src={fileSvg}
                className="w-[32px] h-[32px] lg:w-[40px] lg:h-[40px]"
                alt="resume"
              />
              <p className="sm:text-base md:text-lg lg:text-xl">View Resume</p>
            </Link>
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
