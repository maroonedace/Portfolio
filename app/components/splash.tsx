"use client";
import { useEffect, useMemo, useState } from "react";
import clsx from "clsx";

interface SplashProps {
  oncePerSession?: boolean;
  minDuration?: number;
}

const Splash = ({ oncePerSession = true, minDuration = 500 }: SplashProps) => {
  const [hide, setHide] = useState(false);

  const alreadySeen = useMemo(
    () =>
      typeof window !== "undefined" &&
      sessionStorage.getItem("splash-seen") === "1",
    []
  );

  useEffect(() => {
    if (oncePerSession && alreadySeen) {
      setHide(true);
      return;
    }

    let cancelled = false;
    const start = performance.now();

    const whenFonts =
      "fonts" in document ? (document as any).fonts.ready : Promise.resolve();

    Promise.all([whenFonts]).then(() => {
      const elapsed = performance.now() - start;
      const remaining = Math.max(0, minDuration - elapsed);
      setTimeout(() => {
        if (!cancelled) {
          if (oncePerSession) sessionStorage.setItem("splash-seen", "1");
        }
        setHide(true);
      }, remaining);
    });

    return () => {};
  }, [alreadySeen, oncePerSession, minDuration]);

  return (
    <div
      aria-hidden
      className={clsx(
        "fixed inset-0 z-[100] flex items-center justify-center bg-[#8A2BE2]",
        "transition-opacity duration-1000 motion-reduce:duration-0",
        hide ? "opacity-0 pointer-events-none" : "opacity-100"
      )}
    >
    </div>
  );
};

export default Splash;
