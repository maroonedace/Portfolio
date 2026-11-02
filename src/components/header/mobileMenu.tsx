import { useRef, useState, type FC, type MouseEvent } from "react";
import { pageLinks } from "./constants";
import { ListIcon } from "@phosphor-icons/react/List";
import { XIcon } from "@phosphor-icons/react/X";
import ResumeLink from "./resumeLink";

const MobileMenu: FC = () => {
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
    <>
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

            <ResumeLink className="inline-flex" labelClassName="text-xl" onClick={closeMenu} />
          </div>
        </div>
      </dialog>
    </>
  );
};

export default MobileMenu;
