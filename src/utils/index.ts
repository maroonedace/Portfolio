import { type MouseEvent } from "react";

export const scrollToSection = (
  event: MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
  sectionId: string
) => {
  event.preventDefault();
  const element = document.querySelector(sectionId);
  element?.scrollIntoView({ behavior: "smooth" });
};
