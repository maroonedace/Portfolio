const FieldError = ({ id, message }: { id: string; message?: string }) =>
  message ? (
    <span id={id} className="text-sm text-red-400">
      {message}
    </span>
  ) : null;


export default FieldError;