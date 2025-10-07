import { FC, ReactNode } from "react";
import localFont from "next/font/local";
import ReactQueryProvider from "./utils/providers/reactQueryProvider";
 
import "./globals.css";
 
const clashDisplay = localFont({
  src: [
    {
      path: "../public/fonts/clash-display/ClashDisplayLight.otf",
      weight: "300",
    },

    {
      path: "../public/fonts/clash-display/ClashDisplayRegular.otf",
      weight: "400",
    },
    {
      path: "../public/fonts/clash-display/ClashDisplayMedium.otf",
      weight: "500",
    },
    {
      path: "../public/fonts/clash-display/ClashDisplaySemibold.otf",
      weight: "600",
    },
    {
      path: "../public/fonts/clash-display/ClashDisplayBold.otf",
      weight: "700",
    },
  ],
});

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <ReactQueryProvider>
      <html lang="en" className={clashDisplay.className}>
        <head>
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdn.jsdelivr.net/npm/@phosphor-icons/web@2.1.1/src/fill/style.css"
          />
        </head>

        <body>
          {children}
        </body>
      </html>
    </ReactQueryProvider>
  );
};

export default RootLayout;
