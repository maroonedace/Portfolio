import { CheckCircleIcon } from "@phosphor-icons/react/CheckCircle";

// Moves focus to the element when it mounts so screen readers announce it.
const focusOnMount = (element: HTMLElement | null) => element?.focus();

const SuccessMessage = () => (
  <div
    ref={focusOnMount}
    tabIndex={-1}
    role="status"
    className="flex flex-col items-center gap-2 text-center focus:outline-none"
  >
    <CheckCircleIcon size={48} weight="fill" aria-hidden="true" />
    <span className="text-lg font-medium">Thanks for reaching out!</span>
    <span className="text-foreground/70">
      I'll get back to you as soon as I can.
    </span>
  </div>
);

export default SuccessMessage;
