import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import mailSvg from "../../../assets/contact/mail.svg";
import linkedInSvg from "../../../assets/home/linkedin.svg"
import githubSvg from "../../../assets/home/github.svg"
import { FC, MutableRefObject } from "react";

interface ContactProps {
  componentRef: MutableRefObject<HTMLDivElement> 
}

const Contact: FC<ContactProps> = ({componentRef}) => {
  return (
    <div className="p-8 flex flex-col gap-2 items-center" ref={componentRef}>
      <h2 className="text-white">Contact Me</h2>
      <div className="flex gap-2">
        <motion.div
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 1 }}
        >
          <Link
            href="mailto:aostia@msn.com?subject=Porfolio Contact Form"
            className="flex items-center"
          >
            <Image width="60" height="60" src={mailSvg} alt="Mail" />
          </Link>
        </motion.div>
        <motion.div
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 1 }}
        >
          <Link
            href="https://www.linkedin.com/in/aostia"
            className="flex items-center"
          >
            <Image width="60" height="60" src={linkedInSvg} alt="LinkedIn" />
          </Link>
        </motion.div>
        <motion.div
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 1 }}
        >
          <Link
            href="https://github.com/maroonedace"
            className="flex items-center"
          >
            <Image width="60" height="60" src={githubSvg} alt="Github" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
