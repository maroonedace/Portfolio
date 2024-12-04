import Image from "next/image";
import marace from "../../../assets/header/marace.png";
import Link from "next/link";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt } from "@fortawesome/free-regular-svg-icons";

const Landing = () => {
  return (
    <div className="h-[50vh] flex flex-col">
      <div className="flex justify-between items-center p-4 border-b border-black">
        <Link href="/">
          <Image className="h-14 w-12" src={marace} alt="logo" />
        </Link>
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
              Resume
            </Link>
          </motion.button>
        </motion.div>
      </div>
      <div className="flex items-center justify-center flex-col grow">
        <h1 className="text-white text-center">Software Engineer</h1>
        <h2 className="text-white text-center">
          Always looking for new opportunities to grow and engage in insightful
          conversations.
        </h2>
      </div>
    </div>
  );
};

export default Landing;
