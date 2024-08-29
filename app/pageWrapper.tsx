"use client";

import { motion, AnimatePresence } from "framer-motion";
import { FC } from "react";

interface PageWrapperProps {
  children: JSX.Element;
}

const PageWrapper: FC<PageWrapperProps> = ({ children }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 25 }}
        transition={{ delay: 0.5 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageWrapper;
