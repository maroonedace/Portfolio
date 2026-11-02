import { useState } from "react";
import ErrorMessage from "../common/errorMessage";
import SpamCheck from "../common/spamCheck";
import { requestMeetingLink } from "../../../api/meeting";

interface VerifyStepProps {
  onVerified: (url: string) => void;
}

const VerifyStep = ({ onVerified }: VerifyStepProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [turnstileKey, setTurnstileKey] = useState(0);
  const [turnstileFailed, setTurnstileFailed] = useState(false);

  const handleTurnstileSuccess = async (token: string) => {
    setTurnstileFailed(false);
    setError(null);
    setIsLoading(true);
    const result = await requestMeetingLink(token);
    setIsLoading(false);
    if (result.ok) {
      onVerified(result.url);
      return;
    }

    setError(result.error);
    setTurnstileKey((key) => key + 1);
  };

  const handleTurnstileError = () => setTurnstileFailed(true);

  return (
    <div className="flex flex-col flex-1 items-center justify-center gap-4 text-center">
      <p className="text-foreground/70">
        Quick check that you're human, then you can pick a time.
      </p>
      <div className="flex justify-center w-full max-w-md min-h-16.25">
        <SpamCheck
          key={turnstileKey}
          onSuccess={handleTurnstileSuccess}
          onError={handleTurnstileError}
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
  );
};

export default VerifyStep;
