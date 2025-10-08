"use client";

import Link from "next/link";

const contactInfo = [
  {
    href: "mailto:aostia815@gmail.com",
    src: "ph-envelope",
    alt: "Mail",
  },
  {
    href: "https://github.com/maroonedace",
    src: "ph-github-logo",
    alt: "Github",
  },
  {
    href: "https://linkedin.com/in/aostia",
    src: "ph-linkedin-logo",
    alt: "LinkedIn",
  },
];

const Contact = () => {
  return (
    <div className="flex justify-center items-center p-4" id="contact">
      <div className="bg-primary flex flex-col gap-4 items-center w-full sm:w-2/3 lg:w-1/2 py-4 rounded-2xl">
        <h4 className="uppercase">Let's Connect</h4>
        <div className="flex gap-8">
          {contactInfo.map((info) => (
            <Link
              href={info.href}
              key={info.alt}
              tabIndex={0}
              className="bg-secondary text-primary focus-ring p-2 rounded-full flex hover:scale-110 active:scale-95 transition motion-reduce:transform-none"
            >
              <i className={`ph-fill ${info.src} text-[48px]`} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
