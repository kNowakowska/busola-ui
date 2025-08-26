type Props = {
  children: string;
};

export const Title = ({ children }: Props) => {
  return (
    <h2 className="text-2xl md:text-5xl text-center font-semibold">
      {children}
    </h2>
  );
};
