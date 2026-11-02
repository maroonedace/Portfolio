import { Turnstile } from "@marsidev/react-turnstile";
import { turnstileSiteKey } from "./constants";
import { useTurnstileSize } from "./useTurnstileSize";

interface SpamCheckProps {
  onSuccess: (token: string) => void;
  onError: () => void;
  onExpire?: () => void;
}

const SpamCheck = ({ onSuccess, onError, onExpire }: SpamCheckProps) => {
  const size = useTurnstileSize();

  return (
    <Turnstile
      siteKey={turnstileSiteKey}
      options={{ theme: "dark", size }}
      scriptOptions={{ onError }}
      onSuccess={onSuccess}
      onExpire={onExpire}
      onError={onError}
      onUnsupported={onError}
    />
  );
};

export default SpamCheck;
