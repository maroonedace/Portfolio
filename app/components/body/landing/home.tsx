import Image from "next/image";
import marace from "../../../assets/header/marace.png";
import Link from "next/link";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt } from "@fortawesome/free-regular-svg-icons";
import Socials from "../../footer/socials/socials";
import { FC, MutableRefObject } from "react";

interface HomeProps {
  componentRef: MutableRefObject<HTMLDivElement>;
}

const Home: FC<HomeProps> = ({ componentRef }) => {
  return (
    <div className="h-[50vh] flex text-black relative" ref={componentRef}>
      <div className="flex justify-center flex-col w-full text-center">
        <h1>Software Engineer</h1>
        <h2>
          Always looking for new opportunities to grow and engage in insightful
          conversations.
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
              className="flex gap-2 border py-2 px-4 rounded border-black"
            >
              <FontAwesomeIcon icon={faFileAlt} size="xl" />
              View Resume
            </Link>
          </motion.button>
        </motion.div>
        <Socials />
      </div>
    </div>
  );
};

export default Home;
