import { Ref } from "react";

interface Props {
  ref?: Ref<HTMLInputElement>;
  placeholder?: string;
  type?: string;
  label?: string;
}

export default function InputField({ placeholder, ref, type, label }: Props) {
  return (
    <fieldset className="fieldset">
      <legend className="fieldset-legend">{label}</legend>
      <input
        ref={ref}
        type={type}
        placeholder={placeholder}
        className="input w-full focus:outline-0"
      />
    </fieldset>
  );
}
