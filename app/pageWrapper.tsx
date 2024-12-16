"use client";

import { AnimatePresence } from "framer-motion";
import { FC } from "react";

interface PageWrapperProps {
  children: JSX.Element;
}

const PageWrapper: FC<PageWrapperProps> = ({ children }) => {
  return (
    <AnimatePresence>
      {children}
    </AnimatePresence>
  );
};

export default PageWrapper;
