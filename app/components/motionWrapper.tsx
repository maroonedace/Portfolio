"use client";
import { AnimatePresence } from "framer-motion";
import { ReactNode } from "react";

const MotionWrapper = ({
  children,
}: {
  children: ReactNode;
}) => {
  return (
    <AnimatePresence mode="wait">
      {children}
    </AnimatePresence>
  );
}

export default MotionWrapper;