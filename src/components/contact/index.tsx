import {
  EnvelopeIcon,
  GithubLogoIcon,
  LinkedinLogoIcon,
} from "@phosphor-icons/react";

const ContactSection = () => {
  return (
    <div className="flex justify-center items-center px-6 pb-6 bg-cyan-800" id="contact">
      <div className="bg-background flex flex-col gap-4 items-center w-full py-4 rounded-2xl">
        <h4 className="uppercase">Let's Connect</h4>
        <div className="flex gap-8">
          <a
            href="mailto:aostia815@gmail.com"
            tabIndex={0}
            className="bg-foreground text-background focus-ring p-2 rounded-full flex items-center md:w-40 justify-center gap-2 hover:scale-110 active:scale-95 transition"
          >
            <EnvelopeIcon size={48} weight="fill" />
            <span className="font-medium">Mail</span>
          </a>
          <a
            href="https://github.com/maroonedace"
            tabIndex={0}
            className="bg-foreground text-background focus-ring p-2 rounded-full flex items-center md:w-40 justify-center gap-2 hover:scale-110 active:scale-95 transition"
          >
            <div className="rounded-full bg-background text-foreground p-2">
              <GithubLogoIcon size={32} weight="fill" />
            </div>
            <span className="font-medium">Github</span>
          </a>
          <a
            href="https://linkedin.com/in/aostia"
            tabIndex={0}
            className="bg-foreground text-background focus-ring p-2 rounded-full flex items-center md:w-40 justify-center gap-2 hover:scale-110 active:scale-95 transition"
          >
            <LinkedinLogoIcon size={48} weight="fill" />
            <span className="font-medium">LinkedIn</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
