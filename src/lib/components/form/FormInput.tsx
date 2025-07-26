import { InputHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";
import clsx from "clsx";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  error?: FieldError;
  label: string;
  labelClassName?: string;
  inputClassName?: string;
};

export default function FormInput({
  error,
  type,
  placeholder,
  label,
  labelClassName,
  inputClassName,
  id,
  ...props
}: Props) {
  return (
    <div className="w-full">
      <label
        className={clsx("text-md inline-block", labelClassName)}
        htmlFor={id}
      >
        {label}
      </label>

      <input
        className={clsx(
          "placeholder:text-gray-400 sm:text-sm sm:leading-6 w-full rounded-md border border-light-gray px-3.5 py-2 text-black shadow-sm ",
          inputClassName
        )}
        placeholder={placeholder}
        type={type}
        id={id}
        {...props}
      />
      {error && (
        <span className="mb-2 text-xs text-alert">{error.message}</span>
      )}
    </div>
  );
}
