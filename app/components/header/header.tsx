"use client";

import Link from "next/link";
import Image from "next/image";
import marace from "../../assets/marace.png";
import menu from "../../assets/home/menu.svg";
import close from "../../assets/header/close.svg";
import { FC, useEffect, useRef, useState } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

const Header: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const onMenuClick = () => {
    setIsModalOpen((prev) => !prev);
  };

  // Prevent background scroll when the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "";
  }, [isModalOpen]);

  // Close the modal when clicking outside of it
  useEffect(() => {
    if (!isModalOpen) return;

    const handleClick = (e: MouseEvent) => {
      const target = e.target as Node;

      if (
        panelRef.current &&
        buttonRef.current &&
        !panelRef.current.contains(target) &&
        !buttonRef.current.contains(target)
      ) {
        setIsModalOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [isModalOpen]);

  // Close the modal when the screen size is larger than 640px
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 640px)");

    const handleChange = (e: MediaQueryListEvent) => {
      if (e.matches) setIsModalOpen(false);
    };

    mq.addEventListener("change", handleChange);
    return () => mq.removeEventListener("change", handleChange);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 flex z-50 backdrop-blur-md bg-white/70 dark:bg-zinc-900/70`}
    >
      <nav className="flex p-4 items-center justify-between sm:justify-normal w-full">
        <Link href="#home">
          <Image
            className="h-12 w-10 mr-6"
            src={marace}
            alt="Brand Logo"
            priority
          />
        </Link>

        {/* Desktop navigation */}
        <div className="hidden sm:flex items-center justify-between w-full">
          <div className="flex items-center gap-4 ">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                tabIndex={0}
                className="text-sm font-medium underline-offset-4 hover:underline p-2"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <Link
            href="/resume.pdf"
            target="_blank"
            tabIndex={0}
            rel="noopener noreferrer"
            className="rounded-xl border border-white px-4 py-2 text-sm font-medium hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
          >
            Resume
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="sm:hidden rounded p-2"
          onClick={onMenuClick}
          aria-label="Toggle Navigation"
          ref={buttonRef}
        >
          <Image
            src={isModalOpen ? close : menu}
            className="w-6 h-6"
            alt="Toggle Navigation Button"
          />
        </button>
      </nav>

      {/* Mobile navigation */}
      {isModalOpen && (
        <div className="absolute inset-x-0 top-24 mx-8">
          <div
            className="bg-slate-800/95 flex flex-col gap-4 items-center p-6 rounded-2xl"
            ref={panelRef}
          >
            <div className="flex flex-col items-center gap-6 py-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onMenuClick}
                  className="text-lg font-medium"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-primary bg-primary text-white px-6 py-2 font-medium"
                onClick={onMenuClick}
              >
                Resume
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
