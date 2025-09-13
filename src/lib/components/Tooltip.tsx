export default function Tooltip({
  children,
  text,
}: {
  children: React.ReactNode;
  text: string;
}) {
  return (
    <div className="relative group">
      {children}
      <div className="absolute left-1/2 transform -translate-x-1/2 bg-[var(--dark-beige)] text-white text-xs rounded py-2 px-3 z-10 mt-2 transition-opacity duration-300 opacity-0 invisible group-hover:visible group-hover:opacity-100 whitespace-nowrap">
        {text}
      </div>
    </div>
  );
}
