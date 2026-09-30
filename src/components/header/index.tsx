import { useRef, useState, type FC, type MouseEvent } from "react";
import { motion } from "motion/react";
import { pageLinks, resumeHref } from "./constants";
import { FileTextIcon } from "@phosphor-icons/react/FileText";
import { ListIcon } from "@phosphor-icons/react/List";
import { XIcon } from "@phosphor-icons/react/X";
import NewTabHint from "../newTabHint";

const Header: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDialogElement>(null);

  const openMenu = () => {
    menuRef.current?.showModal();
    setIsMenuOpen(true);
  };
  const closeMenu = () => menuRef.current?.close();

  const closeOnBackdropClick = (event: MouseEvent<HTMLDialogElement>) => {
    if (event.target === event.currentTarget) closeMenu();
  };

  return (
    <header className="fixed w-full z-40 bg-background">
      <nav className="flex h-header px-4 items-center justify-between md:justify-normal w-full">
        <a href="#home" className="rounded mr-4 focus-ring" aria-label="Home">
          <img src="/logo.svg" width={48} height={48} alt="" />
        </a>

        <ul role="list" className="hidden md:flex items-center gap-2">
          {pageLinks.map((item) => (
            <li key={item.href} className="flex">
              <a
                href={item.href}
                className="font-medium px-4 py-2 rounded-lg hover:underline underline-offset-4 hover:text-foreground/70 focus-ring"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <motion.a
          href={resumeHref}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex ml-auto items-center gap-2 bg-foreground text-background rounded-xl py-2 px-4
                    font-medium focus-ring"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FileTextIcon size={20} aria-hidden="true" weight="fill" />
          <span>
            Resume
            <NewTabHint />
          </span>
        </motion.a>

        <button
          type="button"
          className={`md:hidden p-2 flex rounded-lg hover:text-foreground/60 focus-ring ${
            isMenuOpen ? "opacity-0" : ""
          }`}
          aria-haspopup="dialog"
          aria-expanded={isMenuOpen}
          aria-controls="navigation-menu"
          aria-label="Open navigation menu"
          onClick={openMenu}
        >
          <ListIcon size={32} aria-hidden="true" />
        </button>
      </nav>

      <dialog
        ref={menuRef}
        id="navigation-menu"
        aria-labelledby="navigation-menu-title"
        className="m-auto bg-background text-foreground rounded-2xl backdrop:bg-background/60 backdrop:backdrop-blur-sm"
        onClick={closeOnBackdropClick}
        onClose={() => setIsMenuOpen(false)}
      >
        <div className="px-12 py-6 flex flex-col items-center">
          <button
            type="button"
            onClick={closeMenu}
            className="fixed top-4 right-4 p-2 rounded-lg focus-ring"
            aria-label="Close navigation menu"
          >
            <XIcon size={32} aria-hidden="true" />
          </button>

          <h2 id="navigation-menu-title" className="mb-4">
            Navigation
          </h2>

          <div className="flex flex-col items-center gap-6 p-6">
            <ul role="list" className="flex flex-col items-center gap-6">
              {pageLinks.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={closeMenu}
                    className="text-xl font-medium text-foreground px-2 rounded-lg focus-ring"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <motion.a
              href={resumeHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="inline-flex items-center gap-2 bg-foreground text-background rounded-xl py-2 px-4
                        font-medium focus-ring"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FileTextIcon size={20} aria-hidden="true" weight="fill" />
              <span className="text-xl">
                Resume
                <NewTabHint />
              </span>
            </motion.a>
          </div>
        </div>
      </dialog>
    </header>
  );
};

export default Header;
