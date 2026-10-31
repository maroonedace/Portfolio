import { Turnstile } from "@marsidev/react-turnstile";
import { CalendarDotsIcon } from "@phosphor-icons/react/CalendarDots";
import { XIcon } from "@phosphor-icons/react/X";
import { motion } from "motion/react";
import { useRef, useState, type MouseEvent } from "react";
import { turnstileSiteKey } from "./constants";
import ErrorMessage from "./errorMessage";
import { requestMeetingLink } from "./requestMeetingLink";
import { useTurnstileSize } from "./useTurnstileSize";

// Calendly's inline-embed parameters. The colors only apply on paid Calendly plans.
const toEmbedUrl = (link: string) => {
  const url = new URL(link);
  url.searchParams.set("embed_domain", window.location.hostname);
  url.searchParams.set("embed_type", "Inline");
  url.searchParams.set("hide_gdpr_banner", "1");
  url.searchParams.set("background_color", "151515");
  url.searchParams.set("text_color", "f5f5f5");
  return url.href;
};

const ScheduleCall = () => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [embedUrl, setEmbedUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [turnstileKey, setTurnstileKey] = useState(0);
  const [turnstileFailed, setTurnstileFailed] = useState(false);
  const turnstileSize = useTurnstileSize();

  const openDialog = () => {
    dialogRef.current?.showModal();
    setIsOpen(true);
  };
  const closeDialog = () => dialogRef.current?.close();

  const handleClose = () => {
    setIsOpen(false);
    setError(null);
    setTurnstileFailed(false);
  };

  const closeOnBackdropClick = (event: MouseEvent<HTMLDialogElement>) => {
    if (event.target === event.currentTarget) closeDialog();
  };

  const handleTurnstileSuccess = async (token: string) => {
    setTurnstileFailed(false);
    setError(null);
    setIsLoading(true);
    const result = await requestMeetingLink(token);
    setIsLoading(false);
    if (result.ok) {
      setEmbedUrl(toEmbedUrl(result.url));
      return;
    }

    setError(result.error);
    setTurnstileKey((key) => key + 1);
  };

  const handleTurnstileError = () => setTurnstileFailed(true);

  return (
    <div className="flex flex-col items-center gap-3 w-full mt-8 pt-8 border-t border-foreground/10">
      <span className="text-foreground/70">Prefer to talk?</span>
      <motion.button
        type="button"
        onClick={openDialog}
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        aria-controls="schedule-call-dialog"
        className="border border-foreground/20 focus-ring px-4 py-2 rounded-xl flex items-center justify-center gap-4"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <CalendarDotsIcon size={32} weight="fill" aria-hidden="true" />
        <span className="text-lg font-medium">Book a 15-min call</span>
      </motion.button>

      <dialog
        ref={dialogRef}
        id="schedule-call-dialog"
        aria-labelledby="schedule-call-title"
        className="m-auto w-[min(100%-2rem,64rem)] h-[min(100dvh-2rem,48rem)] bg-background text-foreground rounded-2xl backdrop:bg-background/60 backdrop:backdrop-blur-sm"
        onClick={closeOnBackdropClick}
        onClose={handleClose}
      >
        <div className="flex flex-col h-full gap-4 p-4 md:p-6">
          <div className="flex items-center justify-between gap-4">
            <h3 id="schedule-call-title">Book a 15-minute call</h3>
            <button
              type="button"
              onClick={closeDialog}
              className="p-2 rounded-lg focus-ring"
              aria-label="Close scheduler"
            >
              <XIcon size={32} aria-hidden="true" />
            </button>
          </div>

          {isOpen &&
            (embedUrl ? (
              <iframe
                src={embedUrl}
                title="Schedule a 15-minute call with Anthony on Calendly"
                className="flex-1 w-full rounded-xl"
              />
            ) : (
              <div className="flex flex-col flex-1 items-center justify-center gap-4 text-center">
                <p className="text-foreground/70">
                  Quick check that you're human, then you can pick a time.
                </p>
                <div className="flex justify-center w-full max-w-md min-h-16.25">
                  <Turnstile
                    key={turnstileKey}
                    siteKey={turnstileSiteKey}
                    options={{ theme: "dark", size: turnstileSize }}
                    scriptOptions={{ onError: handleTurnstileError }}
                    onSuccess={handleTurnstileSuccess}
                    onError={handleTurnstileError}
                    onUnsupported={handleTurnstileError}
                  />
                </div>
                <p role="status" className="min-h-6">
                  {isLoading ? "Loading scheduler..." : ""}
                </p>
                {turnstileFailed && (
                  <ErrorMessage>
                    The spam check couldn't load. Try refreshing the page.
                  </ErrorMessage>
                )}
                {error && <ErrorMessage>{error}</ErrorMessage>}
              </div>
            ))}
        </div>
      </dialog>
    </div>
  );
};

export default ScheduleCall;
