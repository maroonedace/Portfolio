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
          alt="Background image"
        />
      </div>
      <div className="flex flex-col items-center justify-center text-center gap-12 pt-20">
        <div className="flex flex-col gap-4">
          <h1>Anthony Ostia</h1>
          <h2>Software Engineer</h2>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          <a
            href="#work"
            tabIndex={0}
            className="bg-foreground text-background text-md sm:text-xl font-semibold py-4 px-6 rounded-2xl hover:scale-110 
            duration-200 focus:outline-none focus:ring-2 focus:ring-foreground focus:ring-offset-2 focus:ring-offset-background"
          >
            View Work
          </a>
          <a
            href="#contact"
            tabIndex={0}
            className="bg-foreground text-background text-md sm:text-xl font-semibold py-4 px-6 rounded-2xl hover:scale-110 
            duration-200 focus:outline-none focus:ring-2 focus:ring-foreground focus:ring-offset-2 focus:ring-offset-background"
          >
            Let's Connect
          </a>
        </div>
      </div>

      <a
        href="#aboutMe"
        tabIndex={0}
        className="absolute bottom-8 flex hover:text-foreground/60 focus:outline-none focus:ring-2 focus:ring-foreground 
        focus:ring-offset-2 focus:ring-offset-background rounded-full"
      >
        <ArrowDownIcon
          className="motion-safe:animate-bounce cursor-pointer"
          size={64}
          weight="fill"
        />
      </a>
    </section>
  );
};

export default HomeSection;
