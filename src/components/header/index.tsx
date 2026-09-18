import { useRef, useState, type FC } from "react";
import { motion } from "motion/react";
import { pageLinks, resumeHref } from "./constants";
import { FileTextIcon, ListIcon, XIcon } from "@phosphor-icons/react";

const Header: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  return (
    <header className="fixed w-full z-40 bg-background">
      <nav className="flex h-header px-4 items-center justify-between md:justify-normal w-full">
        <a
          href="#home"
          className="focus:outline-none focus:ring-2 focus:ring-foreground focus:ring-offset-2 focus:ring-offset-background rounded mr-4"
          aria-label="Home"
        >
          <img src="/logo.svg" width={48} height={48} alt="" />
        </a>

        <div className="hidden md:flex items-center gap-2">
          {pageLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              tabIndex={0}
              className="font-medium px-4 py-2 rounded-lg hover:underline underline-offset-4 hover:text-foreground/70 focus:outline-none 
              focus:ring-2 focus:ring-foreground focus:ring-offset-2 focus:ring-offset-background"
            >
              {item.label}
            </a>
          ))}
        </div>

        <motion.a
          href={resumeHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View resume (opens in new tab)"
          className="hidden md:inline-flex ml-auto items-center gap-2 bg-foreground text-background rounded-xl py-2 px-4
                    font-medium focus:outline-none focus:ring-2 focus:ring-foreground focus:ring-offset-2 focus:ring-offset-background"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FileTextIcon size={20} aria-hidden="true" weight="fill" />
          <span>Resume</span>
        </motion.a>

        <button
          ref={menuButtonRef}
          className={`md:hidden p-2 flex hover:text-foreground/60 ${
            isModalOpen ? "invisible" : ""
          }`}
          aria-haspopup="dialog"
          aria-expanded={isModalOpen}
          aria-label="Open navigation menu"
          onClick={() => setIsModalOpen(true)}
        >
          <ListIcon size={32} />
        </button>
      </nav>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 h-screen flex items-center justify-center bg-background/60 backdrop-blur-sm">
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="navigation-menu-title"
            className="bg-background px-12 py-6 rounded-2xl flex flex-col items-center"
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 p-2"
              aria-label="Close navigation menu"
            >
              <XIcon size={32} />
            </button>

            <h2 id="navigation-menu-title" className="mb-4">
              Navigation
            </h2>

            <div className="flex flex-col items-center gap-6 p-6">
              {pageLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsModalOpen(false)}
                  className="text-xl font-medium text-foreground"
                >
                  {item.label}
                </a>
              ))}

              <motion.a
                href={resumeHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View resume (opens in new tab)"
                onClick={() => setIsModalOpen(false)}
                className="inline-flex items-center gap-2 bg-foreground text-background rounded-xl py-2 px-4
                          font-medium focus:outline-none focus:ring-2 focus:ring-foreground focus:ring-offset-2 focus:ring-offset-background"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FileTextIcon size={20} aria-hidden="true" weight="fill" />
                <span className="text-xl">Resume</span>
              </motion.a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
