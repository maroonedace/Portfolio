import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FC, MutableRefObject } from "react";

import back from "../../../assets/home/back.jpg";
import fileSvg from "../../../assets/home/file.svg"

interface HomeProps {
  componentRef: MutableRefObject<HTMLDivElement>;
}

const Home: FC<HomeProps> = ({ componentRef }) => {
  return (
    <div className="text-white relative bg-black h-[40vh] md:h-[60vh] lg:h-[80vh]" ref={componentRef}>
      <Image className="absolute h-full opacity-85" priority src={back} alt="back" />
      <div>
        <div className="flex flex-col absolute inset-0 justify-center items-center text-center">
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl">Software Engineer</h1>
          <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl">
            Always looking for new opportunities to grow and engage in
            insightful conversations
          </h2>
        </div>
        <div className="flex flex-col items-center gap-4 absolute inset-x-0 bottom-8">
          <motion.div
            key="resume"
            initial={{ scale: 0, opacity: 0.5 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              delay: 0.75,
            }}
          >
            <motion.button
              whileHover={{
                scale: 1.1,
              }}
              whileTap={{
                scale: 0.9,
              }}
            >
              <Link
                href="/resume.pdf"
                target="_blank"
                className="flex gap-2 border py-2 px-4 rounded border-white items-center"
              >
                <Image src={fileSvg} className="w-[32px] h-[32px] lg:w-[40px] lg:h-[40px]" alt="resume" />
                <p className="text-sm sm:text-base md:text-lg lg:text-xl">View Resume</p>
              </Link>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;
