import type { UseFormRegisterReturn } from "react-hook-form";
import FieldError from "./fieldError";

const inputClass = `bg-foreground/5 border border-foreground/20 aria-invalid:border-red-400 rounded-xl px-4 py-2 focus-ring`;

interface TextFieldProps {
  id: string;
  label: string;
  registration: UseFormRegisterReturn;
  error?: string;
  type?: string;
  autoComplete?: string;
  multiline?: boolean;
  className?: string;
}

const TextField = ({
  id,
  label,
  registration,
  error,
  type,
  autoComplete,
  multiline,
  className = "",
}: TextFieldProps) => {
  const errorId = `${id}-error`;
  const controlProps = {
    id,
    required: true,
    "aria-invalid": !!error,
    "aria-describedby": error ? errorId : undefined,
    ...registration,
  };

  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      <label htmlFor={id} className="text-base font-medium">
        {label}
      </label>
      {multiline ? (
        <textarea rows={5} className={`${inputClass} resize-y`} {...controlProps} />
      ) : (
        <input
          type={type}
          autoComplete={autoComplete}
          className={inputClass}
          {...controlProps}
        />
      )}
      <FieldError id={errorId} message={error} />
    </div>
  );
};

export default TextField;
