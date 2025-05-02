"use client";

import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";

import mailSvg from "../../assets/footer/mail.svg";
import linkedInSvg from "../../assets/footer/linkedin.svg";
import githubSvg from "../../assets/footer/github.svg";
import { useEffect, useState } from "react";
import MotionWrapper from "../motionWrapper";

const Footer = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const toggleTheme = () =>
    setTheme(resolvedTheme === "dark" ? "light" : "dark");

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <MotionWrapper>
    <footer
      id="contact"
      className="border-t border-zinc-800 bg-zinc-900 py-8 px-6"
    >
      <div className="flex items-end justify-between">
        {/* Contact */}
        <div className="flex flex-col gap-2 items-center">
          <h3 className="text-lg font-semibold uppercase tracking-wide text-muted-foreground">
            Get in touch
          </h3>
          <div className="flex gap-2">
            <Link
              href="mailto:aostia@msn.com"
              className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
            >
              <Image className="h-10 w-10" src={mailSvg} alt="logo" />
            </Link>
            <Link
              href="https://github.com/maroonedace"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
            >
              <Image className="h-10 w-10" src={githubSvg} alt="logo" />
            </Link>
            <Link
              href="https://linkedin.com/in/aostia"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
            >
              <Image className="h-10 w-10" src={linkedInSvg} alt="logo" />
            </Link>
          </div>
        </div>

        {/* Meta + theme toggle */}
        <div className="flex flex-col items-start sm:items-center md:items-end">
          <p className="text-sm text-right">
            © {new Date().getFullYear()} Anthony Ostia
            <br />
            Icons by{" "}
            <Link
              className="underline"
              href="https://icons8.com"
              target="_blank"
            >
              Icons8
            </Link>
          </p>
        </div>
      </div>
    </footer>
    </MotionWrapper>
  );
};

export default Footer;
