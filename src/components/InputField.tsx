import { Ref, InputHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  ref?: Ref<HTMLInputElement>;
  error?: FieldError | null;
}

export default function InputField({ label, ref, error, ...props }: Props) {
  return (
    <fieldset className="fieldset">
      {label && <legend className="fieldset-legend">{label}</legend>}
      <input ref={ref} {...props} className="input w-full focus:outline-0" />
      {error && <p className="text-red-500">{error.message}</p>}
    </fieldset>
  );
}
