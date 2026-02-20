import { InputHTMLAttributes, TextareaHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";
import clsx from "clsx";

type Props = InputHTMLAttributes<HTMLInputElement> &
  TextareaHTMLAttributes<HTMLTextAreaElement> & {
    error?: FieldError;
    label: string;
    labelClassName?: string;
    inputClassName?: string;
    containerClassName?: string;
  };

export default function FormInput({
  error,
  type,
  placeholder,
  label,
  labelClassName,
  inputClassName,
  id,
  containerClassName,
  ...props
}: Props) {
  return (
    <div className={clsx("w-full", containerClassName)}>
      <label
        className={clsx("md:text-md inline-block text-sm", labelClassName)}
        htmlFor={id}
      >
        {label}
      </label>

      {type === "textarea" ? (
        <textarea
          rows={4}
          className={clsx(
            "w-full rounded-md border px-3.5 py-2 text-sm leading-6 placeholder:text-gray-400",
            inputClassName
          )}
          placeholder={placeholder}
          id={id}
          {...props}
        />
      ) : (
        <input
          className={clsx(
            "w-full rounded-md border px-3.5 py-2 text-sm leading-6 placeholder:text-gray-400",
            inputClassName
          )}
          placeholder={placeholder}
          type={type}
          id={id}
          {...props}
        />
      )}
      {error && (
        <span className="text-alert mb-2 text-xs text-red-600">
          {error.message}
        </span>
      )}
    </div>
  );
}
