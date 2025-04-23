"use client";

import Link from "next/link";
import Image from "next/image";
import marace from "../../assets/marace.png";
import { Links } from "../../page";
import { FC, MutableRefObject } from "react";
import { animate } from "framer-motion";
import MobileLinks from "./mobileLinks/mobileLinks";
import Socials from "./socials/socials";
import NavigationLinks from "./navigationLinks/navigationLinks";

interface HeaderProps {
  links: Links[];
}

const Header: FC<HeaderProps> = ({ links }) => {
  const headerHeight = 14;
  const headerPadding = 4;

  const handleScrollToWork = (ref: MutableRefObject<HTMLDivElement>) => {
    if (ref.current) {
      animate(
        window.scrollY,
        ref.current.offsetTop - headerHeight * 4 - headerPadding * 4 - 8,
        {
          duration: 1.5,
          ease: [0.22, 1, 0.36, 1],
          onUpdate: (value) => window.scrollTo(0, value),
        }
      );
    }
  };

  return (
    <div
      className={`bg-gray-800 p-${headerPadding} sticky top-0 flex z-10 justify-between items-center`}
    >
      <div className="flex items-center gap-4">
        <Link href="/">
          <Image
            className={`h-${headerHeight} w-12`}
            src={marace}
            alt="Brand Logo"
            priority
          />
        </Link>
        <MobileLinks links={links} handleScrollToWork={handleScrollToWork} />
        <div className="hidden gap-4 md:flex">
          <NavigationLinks
            links={links}
            handleScrollToWork={handleScrollToWork}
          />
        </div>
      </div>
      <Socials />
    </div>
  );
};

export default Header;
