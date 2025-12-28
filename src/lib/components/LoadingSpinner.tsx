export default function LoadingSpinner({
  message,
  size = "large",
  inline,
}: {
  message?: string;
  size?: "small" | "medium" | "large";
  inline?: boolean;
}) {
  return (
    <div
      className={`${inline ? "inline-block h-auto" : "flex h-full"} flex-col items-center justify-center ${inline ? "md:h-auto" : size === "medium" ? "md:h-[100px]" : "md:h-[200px]"}`}
    >
      <div
        className={`inline-block ${size === "small" ? "h-5 w-5" : size === "medium" ? "h-10 w-10" : "h-16 w-16"} animate-spin rounded-full ${size === "small" ? "border-2" : "border-4"} border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]`}
        role="status"
      >
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !border-0 !p-0 !whitespace-nowrap ![clip:rect(0,0,0,0)]">
          Loading...
        </span>
      </div>
      {message && <p className="mt-10 text-base md:text-xl">{message}</p>}
    </div>
  );
}
