import clsx from "clsx";
import { ButtonHTMLAttributes } from "react";

type Props = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onClick"> & {
  text: string;
  type?: string;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
};

export const Button = ({
  text,
  type,
  className,
  disabled,
  onClick,
  ...props
}: Props) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`rounded-xl p-3 md:p-5 w-1/2 md:text-base mt-2 uppercase md:font-bold font-medium tracking-widest ${className}`}
      disabled={disabled}
      {...props}
    >
      {text}
    </button>
  );
};
