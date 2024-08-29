import { FC, ReactNode } from "react"
import "./globals.css"

interface RootLayoutProps {
  children: ReactNode;
}

import '@fortawesome/fontawesome-svg-core/styles.css'

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
};

export default RootLayout
