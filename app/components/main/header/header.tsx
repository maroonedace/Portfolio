"use client";

import { motion } from "framer-motion";
import Socials from "./socials/socials";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt } from "@fortawesome/free-regular-svg-icons";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex flex-row items-center justify-between bg-slate-200 p-4">
      <h1 className="text-black">Anthony Ostia</h1>
      <div className="flex flex-row items-center gap-6">
        <motion.div
          key="resume"
          initial={{scale: 0, opacity: 0.5}}
          animate={{scale: 1, opacity: 1}}
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
        <Socials />
      </div>
    </div>
  );
};

export default Header;
