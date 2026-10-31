import { useSyncExternalStore } from "react";

const wideQuery = window.matchMedia("(min-width: 360px)");
const subscribeToWidth = (onChange: () => void) => {
  wideQuery.addEventListener("change", onChange);
  return () => wideQuery.removeEventListener("change", onChange);
};
const getIsWide = () => wideQuery.matches;

export const useTurnstileSize = () =>
  useSyncExternalStore(subscribeToWidth, getIsWide) ? "flexible" : "compact";
