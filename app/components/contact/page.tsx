"use client";

import Link from "next/link";
import Image from "next/image";

const contactInfo = [
  {
    href: "mailto:aostia815@gmail.com",
    src: "/images/contact/mail.svg",
    alt: "Mail",
  },
  {
    href: "https://github.com/maroonedace",
    src: "/images/skills/github.svg",
    alt: "Github",
  },
  {
    href: "https://linkedin.com/in/aostia",
    src: "/images/contact/linkedin.svg",
    alt: "LinkedIn",
  },
];

const Contact = () => {
  return (
    <div className="flex justify-center items-center p-4" id="contact">
      <div className="bg-zinc-800 flex flex-col gap-4 items-center w-full sm:w-2/3 lg:w-1/2 py-4 rounded-2xl">
        <h3 className="text-2xl font-semibold uppercase">Let's Connect</h3>
        <div className="flex gap-8">
          {contactInfo.map((info) => (
            <Link
              href={info.href}
              tabIndex={0}
              className="bg-white focus-ring p-2 rounded-full flex hover:scale-110 active:scale-95 transition motion-reduce:transform-none"
            >
              <Image src={info.src} alt={info.alt} width={48} height={48} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
