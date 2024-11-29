"use client";

import { FC, ReactNode } from "react";
import "./globals.css";

// interface RootLayoutProps {
//   children: ReactNode;
// }

import "@fortawesome/fontawesome-svg-core/styles.css";
import { AnimatePresence, motion } from "framer-motion";

const RootLayout = ({ children, modal }) => {
  return (
    <html lang="en">
      <body>
        <AnimatePresence>{children}</AnimatePresence>
        <AnimatePresence
          mode="wait"
          initial={false}
          onExitComplete={() => null}
        >
          {modal}
        </AnimatePresence>
      </body>
    </html>
  );
};

export default RootLayout;
