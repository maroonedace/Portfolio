import { type FC } from "react";
import { pageLinks } from "./constants";
import { scrollToSection } from "../../utils";

const Header: FC = () => {
  return (
    <header className="fixed w-full z-40 bg-primary">
      <nav className="flex p-4 items-center w-full">
        <a href="/" aria-label="Home">
          <img
            className="mr-4 cursor-pointer"
            src="/img/marace.png"
            alt="Brand Logo"
          />
        </a>

        <div className="flex items-center gap-4">
          {pageLinks.map((item) => (
            <a
              key={item.href}
              tabIndex={0} 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.href);
              }}
              className="font-medium underline-offset-4 rounded-2xl cursor-pointer text-white/90 
                hover:text-white/60 hover:underline p-2 focus:outline-none focus:ring-2 focus:ring-white/50"
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
