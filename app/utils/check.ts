import { MutableRefObject } from "react";

export const checkAboveThreshold = (
  ref: MutableRefObject<HTMLDivElement>
): boolean => {
  if (typeof window === "undefined") return false;
  const rect = ref.current.getBoundingClientRect();

  const scrollY = window.scrollY;

  const elementTop = rect.top + scrollY;

  return elementTop < scrollY;
};
