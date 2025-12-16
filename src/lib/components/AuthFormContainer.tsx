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
    <div className="-transalate-1/10 mx-auto mt-15 mb-15 flex h-auto w-4/5 flex-col items-center gap-y-3 rounded-3xl bg-white px-5 py-7 shadow-md md:w-2/5 md:gap-y-4 md:px-5 md:py-10">
      <Title>{title}</Title>
      {description && (
        <p className="pt-0 text-center text-sm md:pt-5 md:text-base">
          {description}
        </p>
      )}
      {children}
    </div>
  );
}
