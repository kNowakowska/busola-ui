export default function LoadingSpinner({
  message,
  small,
}: {
  message?: string;
  small?: boolean;
}) {
  return (
    <div
      className={`flex h-full flex-col items-center justify-center ${small ? "md:h-[100px]" : "md:h-[200px]"}`}
    >
      <div
        className={`inline-block ${small ? "h-10 w-10" : "h-16 w-16"} animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]`}
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
