import { zodResolver } from "@hookform/resolvers/zod";
import { Turnstile } from "@marsidev/react-turnstile";
import { EnvelopeIcon } from "@phosphor-icons/react/Envelope";
import { motion } from "motion/react";
import { useState, useSyncExternalStore } from "react";
import { useForm } from "react-hook-form";
import { contactSchema, type ContactFields } from "../../../shared/contact";
import { turnstileSiteKey } from "./constants";
import ErrorMessage from "./errorMessage";
import FieldError from "./fieldError";
import { sendContactMessage } from "./sendContactMessage";

const turnstilePending = "Please wait for the spam check to finish.";

const wideQuery = window.matchMedia("(min-width: 360px)");
const subscribeToWidth = (onChange: () => void) => {
  wideQuery.addEventListener("change", onChange);
  return () => wideQuery.removeEventListener("change", onChange);
};
const getIsWide = () => wideQuery.matches;

const inputClass = `bg-foreground/5 border border-foreground/20 aria-invalid:border-red-400 rounded-xl px-4 py-2
 focus:outline-none focus:ring-2 focus:ring-foreground focus:ring-offset-2 focus:ring-offset-background`;

interface ContactFormProps {
  loadTurnstile: boolean;
  onSent: () => void;
}

const ContactForm = ({ loadTurnstile, onSent }: ContactFormProps) => {
  const [token, setToken] = useState<string | null>(null);
  const [turnstileKey, setTurnstileKey] = useState(0);
  const [turnstileFailed, setTurnstileFailed] = useState(false);
  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(contactSchema) });

  const isWide = useSyncExternalStore(subscribeToWidth, getIsWide);
  const turnstileSize = isWide ? "flexible" : "compact";

  const handleTurnstileSuccess = (newToken: string) => {
    setToken(newToken);
    setTurnstileFailed(false);
    if (errors.root?.message === turnstilePending) clearErrors("root");
  };

  const handleTurnstileError = () => {
    setToken(null);
    setTurnstileFailed(true);
  };

  const onSubmit = async (fields: ContactFields) => {
    if (!token) {
      if (!turnstileFailed) setError("root", { message: turnstilePending });
      return;
    }

    const result = await sendContactMessage(fields, token);
    if (result.ok) {
      onSent();
      return;
    }

    setError("root", { message: result.error });
    setToken(null);
    setTurnstileKey((key) => key + 1);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="flex flex-col gap-4 w-full"
    >
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex flex-col gap-1 flex-1">
          <label htmlFor="contact-name" className="text-sm font-medium">
            Name
          </label>
          <input
            id="contact-name"
            type="text"
            autoComplete="name"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "contact-name-error" : undefined}
            className={inputClass}
            {...register("name")}
          />
          <FieldError id="contact-name-error" message={errors.name?.message} />
        </div>
        <div className="flex flex-col gap-1 flex-1">
          <label htmlFor="contact-email" className="text-sm font-medium">
            Email
          </label>
          <input
            id="contact-email"
            type="email"
            autoComplete="email"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "contact-email-error" : undefined}
            className={inputClass}
            {...register("email")}
          />
          <FieldError
            id="contact-email-error"
            message={errors.email?.message}
          />
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="contact-message" className="text-sm font-medium">
          Message
        </label>
        <textarea
          id="contact-message"
          rows={5}
          aria-invalid={!!errors.message}
          aria-describedby={
            errors.message ? "contact-message-error" : undefined
          }
          className={`${inputClass} resize-y`}
          {...register("message")}
        />
        <FieldError
          id="contact-message-error"
          message={errors.message?.message}
        />
      </div>
      <div className="flex justify-center w-full min-h-16.25">
        {loadTurnstile && (
          <Turnstile
            key={turnstileKey}
            siteKey={turnstileSiteKey}
            options={{ theme: "dark", size: turnstileSize }}
            scriptOptions={{ onError: handleTurnstileError }}
            onSuccess={handleTurnstileSuccess}
            onExpire={() => setToken(null)}
            onError={handleTurnstileError}
            onUnsupported={handleTurnstileError}
          />
        )}
      </div>
      {turnstileFailed && (
        <ErrorMessage>
          The spam check couldn't load. Try refreshing the page.
        </ErrorMessage>
      )}
      {errors.root && <ErrorMessage>{errors.root.message}</ErrorMessage>}
      <motion.button
        type="submit"
        disabled={isSubmitting}
        className="bg-foreground text-background focus:outline-none focus:ring-2 focus:ring-foreground focus:ring-offset-2 focus:ring-offset-background
         px-4 py-2 rounded-xl flex items-center justify-center gap-4 self-center disabled:opacity-50 disabled:cursor-not-allowed"
        whileHover={isSubmitting ? undefined : { scale: 1.05 }}
        whileTap={isSubmitting ? undefined : { scale: 0.95 }}
      >
        <EnvelopeIcon size={32} weight="fill" aria-hidden="true" />
        <span className="text-lg font-medium">
          {isSubmitting ? "Sending..." : "Send"}
        </span>
      </motion.button>
    </form>
  );
};

export default ContactForm;
