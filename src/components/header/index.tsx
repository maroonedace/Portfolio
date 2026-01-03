import {
  useEffect,
  useRef,
  useState,
  type FC,
} from "react";
import { pageLinks } from "./constants";
import { ListIcon, XIcon } from "@phosphor-icons/react";

const Header: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const handleNavClick = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (!isModalOpen) return;

    const controller = new AbortController();
    const { signal } = controller;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsModalOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", handleKeyDown, { signal });

    return () => controller.abort();
  }, [isModalOpen]);

  return (
    <header className="fixed w-full z-40 bg-background">
      <nav className="flex p-4 items-center justify-between sm:justify-normal w-full">
        <a
          href="#home"
          aria-label="Go to home page"
        >
          <img
            className="mr-4 cursor-pointer"
            src="/img/marace.png"
            alt="Brand Logo"
          />
        </a>

        <div className="hidden sm:flex items-center gap-4">
          {pageLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-lg font-medium underline-offset-4 rounded-2xl cursor-pointer
                hover:text-foreground/60 hover:underline p-2 focus:outline-none focus:ring-2 focus:ring-foreground/50"
            >
              {item.label}
            </a>
          ))}
        </div>

        <button
          ref={menuButtonRef}
          className={`sm:hidden p-2 focus-ring flex hover:text-foreground/60 ${
            isModalOpen ? "invisible" : ""
          }`}
          aria-haspopup="dialog"
          aria-expanded={isModalOpen}
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
            aria-label="Navigation menu"
            className="bg-background px-12 py-6 rounded-2xl flex flex-col items-center"
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 p-2 focus-ring hover:text-foreground/60"
              aria-label="Close navigation menu"
            >
              <XIcon size={32} />
            </button>

            <h4 className="text-white">Navigation</h4>

            <div className="flex flex-col items-center gap-6 p-6">
              {pageLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-xl font-medium text-foreground/80
                    hover:text-foreground/60 hover:underline focus-ring"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
