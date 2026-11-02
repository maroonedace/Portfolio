import { EnvelopeIcon } from "@phosphor-icons/react/Envelope";
import { motion } from "motion/react";

const SubmitButton = ({ isSubmitting }: { isSubmitting: boolean }) => (
  <motion.button
    type="submit"
    disabled={isSubmitting}
    className="bg-foreground text-background focus-ring px-4 py-2 rounded-xl flex items-center justify-center gap-4 self-center disabled:opacity-50 disabled:cursor-not-allowed"
    whileHover={isSubmitting ? undefined : { scale: 1.05 }}
    whileTap={isSubmitting ? undefined : { scale: 0.95 }}
  >
    <EnvelopeIcon size={32} weight="fill" aria-hidden="true" />
    <span className="text-lg font-medium">
      {isSubmitting ? "Sending..." : "Send"}
    </span>
  </motion.button>
);

export default SubmitButton;
