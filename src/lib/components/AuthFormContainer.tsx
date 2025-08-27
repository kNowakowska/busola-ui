import { Title } from "./Title";

export default function AuthFormContainer({
  children,
  description,
  title,
}: {
  children: React.ReactNode;
  description?: string;
  title: string;
}) {
  return (
    <div className="flex h-auto w-full md:w-3/5 mx-auto flex-col items-center gap-y-3 md:gap-y-4 rounded-3xl bg-white px-5 md:px-5 py-7 md:py-10 shadow-md">
      <Title>{title}</Title>
      {description && (
        <p className="pt-0 md:pt-5 text-center text-sm md:text-base">
          {description}
        </p>
      )}
      {children}
    </div>
  );
}
