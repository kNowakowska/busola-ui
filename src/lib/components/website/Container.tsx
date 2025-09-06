export default function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`container w-full md:w-[70vw] mx-auto p-6 text-center ${className}`}
    >
      {children}
    </div>
  );
}
