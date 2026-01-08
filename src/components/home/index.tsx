import { useRef, type FC } from "react";
import { ArrowDownIcon } from "@phosphor-icons/react";
import { motion, useInView } from "motion/react";
import { fadeUp } from "../../utils";

const HomeSection: FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true,
    amount: 0.3
  });
  
  return (
    <section
      ref={ref}
      className="min-h-lvh bg-[url(/images/hero.jpg)] bg-cover relative"
      id="home"
    >
      <div className="md:bg-black/20 min-h-lvh w-full flex items-center justify-center">
        <div className="flex flex-col items-center justify-center text-center gap-12 pt-20 px-4">
          <div className="flex flex-col gap-4">
            <motion.h1 initial="hidden" animate={isInView ? "visible" : "hidden"}  variants={fadeUp(0)}>
              Anthony Ostia
            </motion.h1>
            <motion.h2
              className="font-medium"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"} 
              variants={fadeUp(1)}
            >
              Software Engineer
            </motion.h2>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            <motion.a
              className="bg-foreground text-background text-lg md:text-xl font-semibold py-3 px-4 md:py-4 md:px-8 rounded-2xl
               focus:outline-none focus:ring-2 focus:ring-foreground focus:ring-offset-2 focus:ring-offset-background active:ring-0 active:ring-offset-0"
              href="#work"
              tabIndex={0}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"} 
              variants={fadeUp(2)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Work
            </motion.a>
            <motion.a
              className="bg-foreground text-background text-lg md:text-xl font-semibold py-3 px-4 md:py-4 md:px-8 rounded-2xl
               focus:outline-none focus:ring-2 focus:ring-foreground focus:ring-offset-2 focus:ring-offset-background"
              href="#contact"
              tabIndex={0}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"} 
              variants={fadeUp(2)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Connect
            </motion.a>
          </div>
        </div>
      </div>

      <motion.a
        className="absolute bottom-8 p-2 left-1/2 -translate-x-1/2 rounded-full hover:text-foreground/70 focus:outline-none focus:ring-2 focus:ring-foreground 
        focus:ring-offset-2 focus:ring-offset-background"
        href="#about"
        aria-label="Scroll to about section"
        tabIndex={0}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"} 
        variants={fadeUp(3)}
      >
        <ArrowDownIcon
          className="motion-safe:animate-bounce"
          size={64}
          strokeWidth={1.5}
          aria-hidden="true"
          weight="fill"
        />
      </motion.a>
    </section>
  );
};

export default HomeSection;
