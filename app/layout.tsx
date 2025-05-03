import { FC, ReactNode } from "react";
import "./globals.css";

interface RootLayoutProps {
  children: ReactNode;
}

import { Inter } from "next/font/google";
import localFont from "next/font/local";
const inter = Inter({ subsets: ["latin"] });

const clashDisplay = localFont({
  src: [
    {
      path: "./assets/fonts/clash-display/ClashDisplayLight.otf",
      weight: "300",
    },

    {
      path: "./assets/fonts/clash-display/ClashDisplayRegular.otf",
      weight: "400",
    },
    {
      path: "./assets/fonts/clash-display/ClashDisplayMedium.otf",
      weight: "500",
    },
    {
      path: "./assets/fonts/clash-display/ClashDisplaySemibold.otf",
      weight: "600",
    },
    {
      path: "./assets/fonts/clash-display/ClashDisplayBold.otf",
      weight: "700",
    },
  ],
  variable: "--font-clash-display",
});

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en" className={`${inter.className}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </head>
      <body className={`${clashDisplay.variable} font-clash`}>{children}</body>
    </html>
  );
};

export default RootLayout;
