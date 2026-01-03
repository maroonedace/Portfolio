import { type FC } from "react";
import { scrollToSection } from "../../utils";

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
            className="bg-black text-xl font-medium py-4 px-6 rounded-2xl hover:scale-110 
            duration-200 focus:outline-none focus:ring-2 focus:ring-white/50"
            tabIndex={0}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#work");
            }}
          >
            View Work
          </a>
          <a
            href="#contact"
            className="bg-black text-xl font-medium py-4 px-6 rounded-2xl hover:scale-110 
            duration-200 focus:outline-none focus:ring-2 focus:ring-white/50"
            tabIndex={0}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#contact");
            }}
          >
            Let's Connect
          </a>
        </div>
      </div>

      <button
        className="absolute bottom-8 flex hover:text-white/60 focus:outline-none focus:ring-2 focus:ring-white rounded-full"
        onClick={() => scrollToSection("#work")}
        aria-label="Scroll to work section"
      >
        <i className="ph-fill ph-arrow-down text-[64px] motion-safe:animate-bounce" />
      </button>
    </section>
  );
};

export default HomeSection;
