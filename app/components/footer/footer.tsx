"use client";

import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="border-t border-zinc-800 bg-zinc-900 py-8 px-6 scroll-mt-[82px]"
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
              tabIndex={0}
              className="bg-white focus-ring p-2 rounded-full flex"
            >
              <i className="ph-fill ph-envelope text-[32px] text-black" />
            </Link>
            <Link
              href="https://github.com/maroonedace"
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={0}
              aria-label="GitHub"
              className="bg-white focus-ring p-2 rounded-full flex"
            >
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
                alt="Github Logo"
                width={32}
                height={32}
              />
            </Link>
            <Link
              href="https://linkedin.com/in/aostia"
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={0}
              aria-label="LinkedIn"
              className="bg-white focus-ring p-2 rounded-full flex"
            >
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg"
                alt="LinkedIn Logo"
                width={32}
                height={32}
              />
            </Link>
          </div>
        </div>

        {/* Meta + theme toggle */}
        <div className="flex flex-col items-start sm:items-center md:items-end">
          <p className="text-sm text-right">
            © {new Date().getFullYear()} Anthony Ostia
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
