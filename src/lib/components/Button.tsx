import clsx from "clsx";
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
      className={clsx(
        `mt-2 rounded-xl p-3 font-medium tracking-wide md:p-5 md:text-base ${
          !disabled && "hoverScaleSmall"
        }`,
        className
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};
