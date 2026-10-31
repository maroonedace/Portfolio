import { useEffect, useRef, useState } from "react";

const calendlyOrigin = "https://calendly.com";
// Calendly draws its own loader at the top of the frame, so the frame stays hidden behind
// a centered spinner until Calendly reports that the booking page has rendered.
const readyEvent = "calendly.event_type_viewed";
// Reveals the frame anyway if the ready message hasn't arrived this long after it loads.
const revealFallbackMs = 3000;

// Calendly's inline-embed parameters. Calendly only posts events to the parent page when
// embed_domain and embed_type are both set. The colors only apply on paid Calendly plans.
const toEmbedUrl = (link: string) => {
  const url = new URL(link);
  url.searchParams.set("embed_domain", window.location.hostname);
  url.searchParams.set("embed_type", "Inline");
  url.searchParams.set("hide_gdpr_banner", "1");
  url.searchParams.set("background_color", "151515");
  url.searchParams.set("text_color", "f5f5f5");
  return url.href;
};

const CalendlyEmbed = ({ url }: { url: string }) => {
  const frameRef = useRef<HTMLIFrameElement>(null);
  const [isFrameLoaded, setIsFrameLoaded] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (
        event.origin === calendlyOrigin &&
        event.source === frameRef.current?.contentWindow &&
        event.data?.event === readyEvent
      ) {
        setIsReady(true);
      }
    };
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  useEffect(() => {
    if (!isFrameLoaded || isReady) return;
    const timer = setTimeout(() => setIsReady(true), revealFallbackMs);
    return () => clearTimeout(timer);
  }, [isFrameLoaded, isReady]);

  return (
    <div className="relative flex-1">
      {!isReady && (
        <div
          role="status"
          className="absolute inset-0 flex flex-col items-center justify-center gap-4"
        >
          <span
            aria-hidden="true"
            className="size-10 rounded-full border-4 border-foreground/20 border-t-foreground motion-safe:animate-spin"
          />
          <span className="text-foreground/70">Loading scheduler...</span>
        </div>
      )}
      <iframe
        ref={frameRef}
        src={toEmbedUrl(url)}
        title="Schedule a 15-minute call with Anthony on Calendly"
        onLoad={() => setIsFrameLoaded(true)}
        className={`absolute inset-0 size-full rounded-xl motion-safe:transition-opacity motion-safe:duration-300 ${
          isReady ? "" : "invisible opacity-0"
        }`}
      />
    </div>
  );
};

export default CalendlyEmbed;
