import { useEffect, useRef, useState, type FC } from "react";
import { useInView, useReducedMotion } from "motion/react";
import { PauseIcon } from "@phosphor-icons/react/Pause";
import { PlayIcon } from "@phosphor-icons/react/Play";

interface DemoVideoProps {
  src: string;
  label: string;
}

const play = (element: HTMLVideoElement, onBlocked: () => void) =>
  element.play().catch((error: unknown) => {
    if (error instanceof DOMException && error.name === "NotAllowedError") {
      onBlocked();
    }
  });

const DemoVideo: FC<DemoVideoProps> = ({ src, label }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const isNear = useInView(videoRef, { once: true, margin: "300px 0px" });
  const isVisible = useInView(videoRef, { amount: 0.25 });
  const prefersReducedMotion = useReducedMotion();
  const [isUserPaused, setIsUserPaused] = useState(
    () => prefersReducedMotion === true
  );

  useEffect(() => {
    const element = videoRef.current;
    if (!element || !isNear) {
      return;
    }
    if (isVisible && !isUserPaused) {
      play(element, () => setIsUserPaused(true));
    } else {
      element.pause();
    }
  }, [isNear, isVisible, isUserPaused]);

  const togglePlayback = () => {
    const element = videoRef.current;
    if (!element) {
      return;
    }
    if (isUserPaused) {
      setIsUserPaused(false);
      play(element, () => setIsUserPaused(true));
    } else {
      setIsUserPaused(true);
      element.pause();
    }
  };

  return (
    <div className="relative shrink-0 isolate overflow-hidden rounded-3xl bg-black shadow-2xl ring-1 ring-white/10
      w-60 h-130 short:w-48 short:h-104 shorter:w-30 shorter:h-65">
      <video
        ref={videoRef}
        src={isNear ? src : undefined}
        preload={isNear ? "auto" : "none"}
        aria-label={`${label} demo video`}
        muted
        loop
        playsInline
        className="h-full w-full rounded-3xl object-cover"
      />
      <button
        type="button"
        onClick={togglePlayback}
        aria-label={`${isUserPaused ? "Play" : "Pause"} ${label} demo`}
        className="absolute bottom-4 right-4 rounded-full bg-black/60 p-2 text-foreground backdrop-blur-sm cursor-pointer
        hover:bg-black/80 focus-ring"
      >
        {isUserPaused ? (
          <PlayIcon className="size-4" weight="fill" aria-hidden="true" />
        ) : (
          <PauseIcon className="size-4" weight="fill" aria-hidden="true" />
        )}
      </button>
    </div>
  );
};

export default DemoVideo;
