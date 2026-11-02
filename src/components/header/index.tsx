import { type FC } from "react";
import { pageLinks } from "./constants";
import MobileMenu from "./mobileMenu";
import ResumeLink from "./resumeLink";

const Header: FC = () => {
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

        <ResumeLink className="hidden md:inline-flex ml-auto" />

        <MobileMenu />
      </nav>
    </header>
  );
};

export default Header;
