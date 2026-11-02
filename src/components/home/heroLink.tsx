import { type FC } from "react";
import { motion } from "motion/react";
import { fadeUp } from "../../utils";

interface HeroLinkProps {
  label: string;
  href: string;
  isInView: boolean;
}

const HeroLink: FC<HeroLinkProps> = ({ label, href, isInView }) => (
  <motion.a
    className="bg-foreground text-background text-lg md:text-xl font-semibold py-3 px-4 md:py-4 md:px-8 rounded-2xl
     focus-ring"
    href={href}
    initial="hidden"
    animate={isInView ? "visible" : "hidden"}
    variants={fadeUp(2)}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    {label}
  </motion.a>
);

export default HeroLink;
