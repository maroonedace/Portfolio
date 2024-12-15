import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import mailSvg from "../../../assets/contact/mail.svg";

const Contact = () => {
  return (
    <div className="p-8 flex flex-col gap-2 items-center">
      <h2 className="text-white">Contact Me</h2>
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
    </div>
  );
};

export default Contact;
