import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import mailSvg from "../../../assets/contact/mail.svg";
import linkedInSvg from "../../../assets/home/linkedin.svg";
import githubSvg from "../../../assets/home/github.svg";
import { FC, MutableRefObject } from "react";

type ContactItem = {
  name: string;
  href: string;
  src: string;
};

const contactItems: ContactItem[] = [
  {
    name: "Mail",
    href: "mailto:aostia@msn.com?subject=Portfolio Contact Form",
    src: mailSvg,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/aostia",
    src: linkedInSvg,
  },
  {
    name: "Github",
    href: "https://github.com/maroonedace",
    src: githubSvg,
  },
];

interface ContactProps {
  componentRef: MutableRefObject<HTMLDivElement>;
}

const Contact: FC<ContactProps> = ({ componentRef }) => {
  return (
    <div className="p-8 flex flex-col gap-2 items-center" ref={componentRef}>
      <h2 className=" sm:text-2xl md:text-3xl lg:text-4xl">
        Contact Me
      </h2>
      <div className="flex gap-2">
        {contactItems.map((item) => {
          return (
            <motion.div
              key={item.name}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{duration: 0.3, delay: 0.3}}
            >
              <motion.div
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
              >
                <Link href={item.href} tabIndex={0} className="flex items-center" target="_blank">
                  <Image
                    width="48"
                    height="48"
                    src={item.src}
                    alt={item.name}
                  />
                </Link>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Contact;
