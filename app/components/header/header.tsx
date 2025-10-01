"use client";

import Image from "next/image";
import { FC, useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { onLinkClick } from "../body/utils";
import Link from "next/link";
import MotionWrapper from "../reusable/motionWrapper";

const navItems = [
  { label: "Home", href: "home" },
  { label: "About", href: "about" },
  { label: "Work", href: "work" },
  { label: "Projects", href: "projects" },
  { label: "Contact", href: "contact" },
];

const Header: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOverThreshold, setIsOverThreshold] = useState(false);
  const headerRef = useRef<HTMLHeadElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const onMenuOpen = useCallback(() => setIsModalOpen(true), []);
  const onMenuClose = useCallback(() => setIsModalOpen(false), []);

  const onNavItemClick = useCallback((id: string) => {
    onMenuClose();
    onLinkClick(id);
  }, []);

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
        !panelRef.current.contains(target) &&
        isModalOpen
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

  useEffect(() => {
    // Create sentinel element at the bottom of the header
    const heroSection = document.getElementById("home");
    const header = headerRef.current;
    if (!heroSection || !header) return;

    const sentinel = document.createElement("div");
    sentinel.style.cssText = `
      position: absolute;
      top: 100%;
      left: 0;
      width: 100%;
      height: 1px;
      pointer-events: none;
    `;
    sentinel.setAttribute("aria-hidden", "true");

    heroSection.appendChild(sentinel);

    // Observe when sentinel enters viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsOverThreshold(!entry.isIntersecting);
      },
      {
        threshold: 0,
        rootMargin: `-${heroSection.offsetHeight - header.offsetHeight}px 0px 0px 0px`,
      }
    );

    observer.observe(sentinel);

    return () => {
      observer.disconnect();
      if (sentinel.parentElement) {
        sentinel.parentElement.removeChild(sentinel);
      }
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className={`fixed inset-x-0 top-0 flex z-40 transition duration-300
          ${isOverThreshold ? "bg-zinc-800" : ""}
        `}
    >
      <nav className="flex p-4 items-center justify-between sm:justify-normal w-full">
        <span onClick={() => onLinkClick("home")} aria-label="Home">
          <div className="w-10 h-12 mr-6 relative cursor-pointer">
            <Image
              fill
              priority
              src="/images/header/marace.png"
              alt="Brand Logo"
            />
          </div>
        </span>

        {/* Desktop navigation */}
        <div className="hidden sm:flex items-center justify-between w-full">
          <div className="flex items-center gap-4">
            {navItems.map((item) => (
              <button
                onClick={() => {
                  onLinkClick(item.href);
                }}
                key={item.href}
                tabIndex={0}
                className="text-sm font-medium underline-offset-4 rounded-2xl text-white/90 hover:text-zinc-300 hover:underline p-2 focus-ring"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile toggle */}
        <button
          className={`sm:hidden p-2 focus-ring flex hover:text-zinc-300 ${isModalOpen ? "invisible" : ""}`}
          onClick={onMenuOpen}
          aria-label="Toggle Navigation"
          aria-expanded={isModalOpen}
        >
          <span className="material-icons" style={{ fontSize: 32 }}>
            menu
          </span>
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
            className="fixed inset-0 z-50 h-screen flex items-center justify-center bg-zinc-800/60 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
          >
            <button
              onClick={onMenuClose}
              onPointerDownCapture={(e) => e.stopPropagation()}
              aria-label="Close navigation"
              className="absolute top-4 right-4 p-2 focus-ring hover:text-zinc-400"
            >
              <span className="material-icons" style={{ fontSize: 32 }}>
                close
              </span>
            </button>
            <div
              className="bg-zinc-800/95 px-12 py-6 rounded-2xl"
              ref={panelRef}
            >
              <div className="flex flex-col items-center gap-6 py-6">
                {navItems.map((item) => (
                  <button
                    onClick={() => onNavItemClick(item.href)}
                    key={item.href}
                    className="text-lg font-medium text-white/90 hover:text-zinc-300 "
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </MotionWrapper>
      )}
    </header>
  );
};

export default Header;
