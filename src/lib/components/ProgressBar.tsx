type ProgressBarProps = {
  progress: number; // 0 to 100
  label?: string;
};

export function ProgressBar({ progress, label }: ProgressBarProps) {
  return (
    <div className="w-full">
      {label && (
        <div className="mb-1 text-xs md:text-sm font-medium">
          {label} ({progress}%)
        </div>
      )}
      <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
        <div
          className="bg-(--dark-beige) h-full transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
