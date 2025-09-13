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
      className={`mt-2 w-1/2 rounded-xl p-3 font-medium tracking-widest uppercase md:p-5 md:text-base md:font-bold ${className}`}
      disabled={disabled}
      {...props}
    >
      {text}
    </button>
  );
};
