"use client";

import Link from "next/link";
import Image from "next/image";
import marace from "../../assets/header/marace.png";
import { FC, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import MotionWrapper from "../motionWrapper";


const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#work" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Header: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  const openMenu = () => setIsModalOpen(true);
  const closeMenu = () => setIsModalOpen(false);

  // Prevent background scroll when the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "";
  }, [isModalOpen]);

  // Close the modal when clicking / tapping outside of it
  useEffect(() => {
    if (!isModalOpen) return;

    // One AbortController lets us register multiple event types
    // and clean them up in a single call.
    const controller = new AbortController();
    const { signal } = controller;

    const handlePointer = (e: Event) => {
      const target = e.target as Node;
      if (
        panelRef.current &&
        !panelRef.current.contains(target)
      ) {
        setIsModalOpen(false);
      }
    };

    document.addEventListener("pointerdown", handlePointer, { signal });

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsModalOpen(false);
    };

    document.addEventListener("keydown", handleKey, { signal });

    // AbortController automatically removes all listeners
    return () => controller.abort();
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
      className={`fixed inset-x-0 top-0 flex z-40 backdrop-blur-md bg-zinc-900/70`}
    >
      <nav className="flex p-4 items-center justify-between sm:justify-normal w-full">
        <Link href="#home">
          <Image
            width={40}
            height={48}
            className="w-10 h-auto mr-6"
            priority
            src={marace}
            alt="Brand Logo"
          />
        </Link>

        {/* Desktop navigation */}
        <div className="hidden sm:flex items-center justify-between w-full">
          <div className="flex items-center gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                tabIndex={0}
                className="text-sm font-medium underline-offset-4 text-white/90 hover:text-zinc-300 hover:underline p-2 focus-ring"
              >
                {item.label}
              </Link>
            ))}
          </div>
          {/* <Link
            href="/resume.pdf"
            target="_blank"
            tabIndex={0}
            rel="noopener noreferrer"
            className="rounded-xl bg-cyan-500 text-zinc-900 px-4 py-2 text-sm font-medium transition hover:bg-cyan-400 focus-ring"
          >
            Resume
          </Link> */}
        </div>

        {/* Mobile toggle */}
        <button
          className={`sm:hidden p-2 focus-ring flex hover:text-zinc-300 ${isModalOpen ? "invisible" : ""}`}
          onClick={openMenu}
          aria-label="Toggle Navigation"
          aria-expanded={isModalOpen}
        >
          <span className="material-icons" style={{ fontSize: 32 }}>menu</span>
        </button>
      </nav>

      {/* Mobile navigation */}
      {isModalOpen && (
        <MotionWrapper>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 h-screen flex items-center justify-center bg-zinc-900/60 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
          >
            <button
              onClick={closeMenu}
              onPointerDownCapture={(e) => e.stopPropagation()}
              aria-label="Close navigation"
              className="absolute top-4 right-4 p-2 focus-ring hover:text-zinc-300"
            >
              <span className="material-icons" style={{ fontSize: 32 }}>
                close
              </span>
            </button>
            <div
              className="bg-zinc-900/95 px-12 py-6 rounded-2xl"
              ref={panelRef}
            >
              <div className="flex flex-col items-center gap-6 py-6">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    className="text-lg font-medium text-cyan-400 hover:text-cyan-300"
                  >
                    {item.label}
                  </Link>
                ))}
                {/* <Link
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl bg-cyan-500 hover:bg-cyan-400 text-zinc-900 px-6 py-2 font-medium"
                  onClick={closeMenu}
                >
                  Resume
                </Link> */}
              </div>
            </div>
          </motion.div>
        </MotionWrapper>
      )}
    </header>
  );
};

export default Header;
