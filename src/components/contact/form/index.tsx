import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { contactSchema, type ContactFields } from "../../../../shared/contact";
import ErrorMessage from "../common/errorMessage";
import SpamCheck from "../common/spamCheck";
import TextField from "./textField";
import SubmitButton from "./submitButton";
import { sendContactMessage } from "../../../api/contact";

const turnstilePending = "Please wait for the spam check to finish.";

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
        <TextField
          id="contact-name"
          label="Name"
          type="text"
          autoComplete="name"
          registration={register("name")}
          error={errors.name?.message}
          className="flex-1"
        />
        <TextField
          id="contact-email"
          label="Email"
          type="email"
          autoComplete="email"
          registration={register("email")}
          error={errors.email?.message}
          className="flex-1"
        />
      </div>
      <TextField
        id="contact-message"
        label="Message"
        multiline
        registration={register("message")}
        error={errors.message?.message}
      />
      <div className="flex justify-center w-full min-h-16.25">
        {loadTurnstile && (
          <SpamCheck
            key={turnstileKey}
            onSuccess={handleTurnstileSuccess}
            onExpire={() => setToken(null)}
            onError={handleTurnstileError}
          />
        )}
      </div>
      {turnstileFailed && (
        <ErrorMessage>
          The spam check couldn't load. Try refreshing the page.
        </ErrorMessage>
      )}
      {errors.root && <ErrorMessage>{errors.root.message}</ErrorMessage>}
      <SubmitButton isSubmitting={isSubmitting} />
    </form>
  );
};

export default ContactForm;
