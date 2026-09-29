import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import { fadeUp } from "../../utils";
import ContactForm from "./contactForm";
import SuccessMessage from "./successMessage";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.05,
  });
  const [sent, setSent] = useState(false);

  return (
    <div
      className="flex justify-center items-center px-4 pt-16 pb-32 bg-linear-to-b from-cyan-800 to-background"
      ref={ref}
      id="contact"
    >
      <motion.div
        className="bg-background flex flex-col items-center w-full max-w-xl py-8 px-3 md:px-8 rounded-2xl"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={fadeUp(0)}
      >
        <span className="text-3xl font-semibold mb-8">Let's Connect</span>
        {sent ? (
          <SuccessMessage />
        ) : (
          <ContactForm loadTurnstile={isInView} onSent={() => setSent(true)} />
        )}
      </motion.div>
    </div>
  );
};

export default ContactSection;
