export default function Form({
  children,
  name,
  onSubmit,
}: {
  children: React.ReactNode;
  name: string;
  onSubmit: (data: any) => void;
}) {
  return (
    <form
      name={name}
      onSubmit={onSubmit}
      className="flex h-full w-full flex-col space-y-4 md:space-y-7 py-5 "
    >
      {children}
    </form>
  );
}
