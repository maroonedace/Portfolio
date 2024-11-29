"use client";

import { FC, ReactNode } from "react";
import "./globals.css";

interface RootLayoutProps {
  children: ReactNode;
}

import "@fortawesome/fontawesome-svg-core/styles.css";
import { AnimatePresence, motion } from "framer-motion";

const RootLayout:FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <AnimatePresence>{children}</AnimatePresence>
      </body>
    </html>
  );
};

export default RootLayout;
