import { useRef, type FC } from "react";
import { motion, useInView } from "motion/react";
import { fadeUp } from "../../utils";
import { heroLinks } from "./constants";
import HeroLink from "./heroLink";
import ScrollCue from "./scrollCue";

const HomeSection: FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true,
    amount: 0.05
  });
  
  return (
    <section
      ref={ref}
      className="min-h-svh hero-media relative"
      id="home"
      aria-labelledby="home-title"
    >
      <div className="hero-scrim min-h-svh w-full flex items-center justify-center [@media(max-height:700px)]:py-36">
        <div className="flex flex-col items-center justify-center text-center gap-12 md:gap-16 pt-20 px-4">
          <div className="flex flex-col gap-8">
            <motion.h1 id="home-title" initial="hidden" animate={isInView ? "visible" : "hidden"}  variants={fadeUp(0)}>
              Anthony Ostia
            </motion.h1>
            <motion.p
              className="font-heading text-4xl md:text-6xl font-medium tracking-tight leading-tight text-balance"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeUp(1)}
            >
              Software Engineer
            </motion.p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {heroLinks.map((link) => (
              <HeroLink key={link.href} label={link.label} href={link.href} isInView={isInView} />
            ))}
          </div>
        </div>
      </div>

      <ScrollCue isInView={isInView} />
    </section>
  );
};

export default HomeSection;
