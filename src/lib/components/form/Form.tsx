export default function Form({
  children,
  name,
  onSubmit,
  className,
}: {
  children: React.ReactNode;
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onSubmit: (data: any) => void;
  className?: string;
}) {
  return (
    <form
      name={name}
      onSubmit={onSubmit}
      className={`flex h-full w-full flex-col space-y-4 py-5 md:space-y-7 ${className}`}
    >
      {children}
    </form>
  );
}
