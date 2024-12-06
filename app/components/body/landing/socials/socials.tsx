import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

import linkedInSvg from "../../../../assets/home/linkedin.svg"
import githubSvg from "../../../../assets/home/github.svg"

const socials = [
  {
    icon: githubSvg,
    href: "https://github.com/meximanian",
  },
  {
    icon: linkedInSvg,
    href: "https://www.linkedin.com/in/aostia",
  },
];

const Socials = () => {
  return (
    <div className="flex flex-row gap-4">
      {socials.map((btn, index) => (
        <motion.div
          key={index}
          initial={{
            scale: 0,
          }}
          animate={{ rotate: 360, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.75,
          }}
        >
          <motion.button
            whileHover={{
              scale: 1.2,
            }}
            whileTap={{
              scale: 0.9,
            }}
            className="border p-2 rounded-full border-white"
          >
            <Link
              className="flex gap-2 items-center"
              href={btn.href}
              target="_blank"
            >
              <Image
                width="40"
                height="40"
                src={btn.icon}
                alt={btn.href}
              />
            </Link>
          </motion.button>
        </motion.div>
      ))}
    </div>
  );
};

export default Socials;
