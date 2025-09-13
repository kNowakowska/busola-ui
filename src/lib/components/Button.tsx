import { ButtonHTMLAttributes } from "react";

type Props = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onClick"> & {
  children: React.ReactNode;
  type?: string;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
};

export const Button = ({
  children,
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
      className={`rounded-xl p-3 md:p-5 md:text-base mt-2 font-medium tracking-wide ${
        !disabled && "hoverScaleSmall"
      } ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};
