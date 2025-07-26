type ProgressBarProps = {
  progress: number; // 0 to 100
  label?: string;
};

export function ProgressBar({ progress, label }: ProgressBarProps) {
  return (
    <div className="w-[200px]">
      {label && (
        <div className="mb-1 text-sm font-medium text-gray-700">
          {label} ({progress}%)
        </div>
      )}
      <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
        <div
          className="bg-blue-500 h-full transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
