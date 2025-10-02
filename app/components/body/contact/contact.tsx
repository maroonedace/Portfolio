import Link from "next/link";
import Image from "next/image";

const Contact = () => {
  return (
    <div className="flex justify-center items-center p-4" id="contact">
      <div className="bg-zinc-800 flex flex-col gap-2 items-center w-full md:w-1/2 py-4 rounded-2xl">
        <h3 className="text-2xl font-semibold uppercase">
          Get in touch
        </h3>
        <div className="flex gap-4">
          <Link
            href="mailto:aostia815@gmail.com"
            tabIndex={0}
            className="bg-white focus-ring p-3 rounded-full flex hover:scale-105 active:scale-95 transition motion-reduce:transform-none"
          >
            <i className="ph-fill ph-envelope text-[48px] text-black" />
          </Link>
          <Link
            href="https://github.com/maroonedace"
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={0}
            aria-label="GitHub"
            className="bg-white focus-ring p-3 rounded-full flex hover:scale-105 active:scale-95 transition motion-reduce:transform-none"
          >
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
              alt="Github Logo"
              width={48}
              height={48}
            />
          </Link>
          <Link
            href="https://linkedin.com/in/aostia"
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={0}
            aria-label="LinkedIn"
            className="bg-white focus-ring p-3 rounded-full flex hover:scale-105 active:scale-95 transition motion-reduce:transform-none"
          >
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg"
              alt="LinkedIn Logo"
              width={48}
              height={48}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
