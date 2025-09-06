export default function Form({
  children,
  name,
  onSubmit,
  className,
}: {
  children: React.ReactNode;
  name: string;
  onSubmit: (data: any) => void;
  className?: string;
}) {
  return (
    <form
      name={name}
      onSubmit={onSubmit}
      className={`flex h-full w-full flex-col space-y-4 md:space-y-7 py-5 ${className}`}
    >
      {children}
    </form>
  );
}
