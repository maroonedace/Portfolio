import { useRef, useState, type FC } from "react";
import { pageLinks } from "./constants";
import { ListIcon, XIcon } from "@phosphor-icons/react";

const Header: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  return (
    <header className="fixed w-full z-40 bg-background">
      <nav className="flex p-4 items-center justify-between sm:justify-normal w-full">
        <a
          href="#home"
          tabIndex={0}
          className="focus:outline-none focus:ring-2 focus:ring-foreground focus:ring-offset-2 focus:ring-offset-background rounded mr-4"
          aria-label="Home"
        >
          <img src="/img/marace.png" />
        </a>

        <div className="hidden sm:flex items-center gap-2">
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

        <button
          ref={menuButtonRef}
          className={`sm:hidden p-2 flex hover:text-foreground/60 ${
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
            aria-label="Navigation menu"
            className="bg-background px-12 py-6 rounded-2xl flex flex-col items-center"
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 p-2"
              aria-label="Close navigation menu"
            >
              <XIcon size={32} />
            </button>

            <h3>Navigation</h3>

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
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
