import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import Link from "next/link";

const socials = [
  {
    icon: faGithub,
    href: "https://github.com/meximanian",
  },
  {
    icon: faLinkedin,
    href: "https://www.linkedin.com/in/aostia",
    color: "text-linkedIn",
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
          className="flex"
        >
          <motion.button
            whileHover={{
              scale: 1.2,
            }}
            whileTap={{
              scale: 0.9,
            }}
          >
            <Link
              className="flex gap-2 items-center"
              href={btn.href}
              target="_blank"
            >
              <FontAwesomeIcon
                icon={btn.icon}
                size="xl"
                className={btn?.color ? btn.color : ""}
              />
            </Link>
          </motion.button>
        </motion.div>
      ))}
    </div>
  );
};

export default Socials;
