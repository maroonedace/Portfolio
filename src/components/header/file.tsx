import { useState, type FC } from "react";
import { navItems } from "./utils";

const Header: FC = () => {
  return (
    <header
      className={`fixed inset-x-0 flex z-40 transition duration-300 bg-primary`}
    >
      <nav className="flex p-4 items-center justify-between sm:justify-normal w-full">
        <img
          className="mr-4 cursor-pointer"
          src="/img/marace.png"
          alt="Brand Logo"
        />

        <div className="hidden sm:flex items-center justify-between w-full">
          <div className="flex items-center gap-4">
            {navItems.map((item) => (
              <span
                key={item.href}
                tabIndex={0}
                className="text-sm font-medium font-clash-display underline-offset-4 rounded-2xl cursor-pointer text-white/90 
                hover:text-white/60 hover:underline p-2 focus-ring"
              >
                {item.label}
              </span>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
