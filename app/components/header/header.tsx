"use client";

import Link from "next/link";
import Image from "next/image";
import marace from "../../assets/marace.png";
import { Links } from "../../page";
import { FC, MutableRefObject } from "react";
import { animate } from "framer-motion";

interface HeaderProps {
  links: Links[];
}

const Header: FC<HeaderProps> = ({ links }) => {
  const headerHeight = 14
  const headerPadding = 2
  const handleScrollToWork = (ref: MutableRefObject<HTMLDivElement>) => {
    if (ref.current) {
      animate(
        window.scrollY,
        ref.current.offsetTop - (headerHeight * 4) - (headerPadding * 4) - 8,
        {
          duration: 1.5,
          ease: [0.22, 1, 0.36, 1],
          onUpdate: (value) => window.scrollTo(0, value),
        }
      );
    }
  };

  return (
    <div className={`bg-gray-700 p-${headerPadding} sticky top-0 flex justify-between z-10`}>
      <Link href="/">
        <Image className={`h-${headerHeight} w-12`} src={marace} alt="logo" />
      </Link>
      <div className="flex gap-4">
        {links.map((link) => {
          return <button key={link.name} className="text-white hover:underline" onClick={() => handleScrollToWork(link.ref)}>{link.name}</button>;
        })}
      </div>
    </div>
  );
};

export default Header;
