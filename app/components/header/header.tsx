"use client";

import Link from "next/link";
import Image from "next/image";
import marace from "../../assets/header/marace.png";
import { Links } from "../../page";
import { FC, MutableRefObject } from "react";
import { animate } from "framer-motion";

interface HeaderProps {
  links: Links[];
}

const Header: FC<HeaderProps> = ({ links }) => {
  const handleScrollToWork = (ref: MutableRefObject<HTMLDivElement>) => {
    if (ref.current) {
      animate(
        window.scrollY,
        ref.current.offsetTop,
        {
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
          onUpdate: (value) => window.scrollTo(0, value),
        }
      );
    }
  };

  return (
    <div className="bg-white p-2 sticky top-0 flex justify-between z-10">
      <Link href="/">
        <Image className="h-14 w-12" src={marace} alt="logo" />
      </Link>
      <div className="flex gap-4">
        {links.map((link) => {
          return <button key={link.name} onClick={() => handleScrollToWork(link.ref)}>{link.name}</button>;
        })}
      </div>
    </div>
  );
};

export default Header;
