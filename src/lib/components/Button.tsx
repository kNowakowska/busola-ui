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
      className={clsx(
        "rounded-xl p-3 md:p-5 font-medium shadow-md w-1/2 text-sm md:text-base mt-2",
        className
      )}
      disabled={disabled}
      {...props}
    >
      {text}
    </button>
  );
};
