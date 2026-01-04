import { type FC } from "react";
import { ArrowDownIcon } from "@phosphor-icons/react";

const HomeSection: FC = () => {
  return (
    <section
      className="relative flex items-center justify-center min-h-dvh"
      id="home"
    >
      <div className="absolute inset-0 -z-10">
        <img
          className="object-cover w-full h-full"
          src="/img/hero.jpg"
          alt=""
          loading="eager"
        />
      </div>
      <div className="flex flex-col items-center justify-center text-center gap-12 pt-20 px-4">
        <div className="flex flex-col gap-4">
          <h1 className="font-outline-2">Anthony Ostia</h1>
          <h2 className="font-outline-2">Software Engineer</h2>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          <a
            href="#work"
            tabIndex={0}
            className="bg-foreground text-background text-base sm:text-xl font-semibold py-4 px-8 rounded-2xl hover:scale-105 active:scale-95 
            duration-200 focus:outline-none focus:ring-2 focus:ring-foreground focus:ring-offset-2 focus:ring-offset-background"
          >
            View Work
          </a>
          <a
            href="#contact"
            tabIndex={0}
            className="bg-foreground text-background text-base sm:text-xl font-semibold py-4 px-8 rounded-2xl hover:scale-105 active:scale-95 
            duration-200 focus:outline-none focus:ring-2 focus:ring-foreground focus:ring-offset-2 focus:ring-offset-background"
          >
            Let's Connect
          </a>
        </div>
      </div>

      <a
        href="#aboutMe"
        aria-label="Scroll to about section"
        tabIndex={0}
        className="absolute bottom-8 p-2 rounded-full hover:text-foreground/70 focus:outline-none focus:ring-2 focus:ring-foreground 
        focus:ring-offset-2 focus:ring-offset-background"
      >
        <ArrowDownIcon
          className="motion-safe:animate-bounce"
          size={64}
          strokeWidth={1.5}
          aria-hidden="true"
          weight="fill"
        />
      </a>
    </section>
  );
};

export default HomeSection;
