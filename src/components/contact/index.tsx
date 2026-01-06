import {
  EnvelopeIcon,
  GithubLogoIcon,
  LinkedinLogoIcon,
} from "@phosphor-icons/react";
import { motion } from "motion/react";

const ContactSection = () => {
  return (
    <div
      className="flex justify-center items-center px-4 py-16 bg-cyan-800"
      id="contact"
    >
      <div className="bg-background flex flex-col items-center w-full max-w-xl py-8 px-4 rounded-2xl">
        <span className="text-3xl font-semibold mb-8">Let's Connect</span>
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 w-auto">
          <motion.a
            href="mailto:aostia815@gmail.com"
            aria-label="Send me an email"
            tabIndex={0}
            className="bg-foreground text-background focus:outline-none focus:ring-2 focus:ring-foreground focus:ring-offset-2 focus:ring-offset-background
             px-4 py-2 rounded-xl flex items-center justify-center gap-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <EnvelopeIcon size={40} weight="fill" aria-hidden="true" />
            <span className="text-lg font-medium">Mail</span>
          </motion.a>
          <motion.a
            href="https://github.com/maroonedace"
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={0}
            className="bg-foreground text-background focus:outline-none focus:ring-2 focus:ring-foreground focus:ring-offset-2 focus:ring-offset-background
             px-4 py-2 rounded-xl flex items-center justify-center gap-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="rounded-full bg-background text-foreground p-2">
              <GithubLogoIcon size={20} weight="fill" aria-hidden="true" />
            </div>
            <span className="text-lg font-medium">Github</span>
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/aostia"
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={0}
            className="bg-foreground text-background focus:outline-none focus:ring-2 focus:ring-foreground focus:ring-offset-2 focus:ring-offset-background
             px-4 py-2 rounded-xl flex items-center justify-center gap-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <LinkedinLogoIcon size={40} weight="fill" aria-hidden="true" />
            <span className="text-lg font-medium">LinkedIn</span>
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
