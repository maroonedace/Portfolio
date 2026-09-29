import { motion } from "motion/react";
import { socialLinks } from "./constants";

const Footer = () => {
  return (
    <footer className="bg-background p-4">
      <div className="flex items-center justify-between">
        <div className="flex gap-4">
          {socialLinks.map(({ label, href, Icon }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="rounded-lg focus:outline-none focus:ring-2 focus:ring-foreground focus:ring-offset-2 focus:ring-offset-background"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon size={32} weight="fill" aria-hidden="true" />
            </motion.a>
          ))}
        </div>
        <span className="text-sm">
          © {new Date().getFullYear()} Anthony Ostia
        </span>
      </div>
    </footer>
  );
};

export default Footer;
