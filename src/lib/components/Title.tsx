type Props = {
  children: string;
  size: "text-sm" | "text-md" | "text-2xl" | "text-6xl" | "text-5xl";
  textAlign?: "text-center" | "text-left";
};

export const Title = ({ children, size, textAlign = "text-left" }: Props) => {
  return (
    <h2 className={`${size} laptop:${textAlign} text-center font-semibold`}>
      {children}
    </h2>
  );
};
