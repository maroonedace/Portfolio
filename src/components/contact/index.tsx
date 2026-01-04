import {
  EnvelopeIcon,
  GithubLogoIcon,
  LinkedinLogoIcon,
} from "@phosphor-icons/react";

const ContactSection = () => {
  return (
    <div className="flex justify-center items-center px-6 pb-4 bg-cyan-800" id="contact">
      <div className="bg-background flex flex-col items-center w-full py-4 rounded-2xl">
        <h3>Let's Connect</h3>
        <div className="flex gap-4 sm:gap-8">
          <a
            href="mailto:aostia815@gmail.com"
            target="_blank"
            className="bg-foreground text-background focus:outline-none focus:ring-2 focus:ring-foreground
             p-2 rounded-full flex items-center md:w-40 justify-center gap-2 hover:scale-110 active:scale-95 transition"
          >
            <EnvelopeIcon size={48} weight="fill" />
            <span className="text-lg font-medium hidden sm:block">Mail</span>
          </a>
          <a
            href="https://github.com/maroonedace"
            target="_blank"
            className="bg-foreground text-background focus:outline-none focus:ring-2 focus:ring-foreground
             p-2 rounded-full flex items-center md:w-40 justify-center gap-2 hover:scale-110 active:scale-95 transition"
          >
            <div className="rounded-full bg-background text-foreground p-2">
              <GithubLogoIcon size={32} weight="fill" />
            </div>
            <span className="text-lg font-medium hidden sm:block">Github</span>
          </a>
          <a
            href="https://linkedin.com/in/aostia"
            target="_blank"
            className="bg-foreground text-background focus:outline-none focus:ring-2 focus:ring-foreground
             p-2 rounded-full flex items-center md:w-40 justify-center gap-2 hover:scale-110 active:scale-95 transition"
          >
            <LinkedinLogoIcon size={48} weight="fill" />
            <span className="text-lg font-medium hidden sm:block">LinkedIn</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
