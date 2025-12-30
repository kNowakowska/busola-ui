import CloseIcon from "@/lib/icons/CloseIcon";

interface ChatHeaderProps {
  onClose: () => void;
}

export function ChatHeader({ onClose }: ChatHeaderProps) {
  return (
    <div className="sticky top-0 z-10 flex items-center justify-between border-b border-gray-200 bg-white p-4">
      <div className="flex flex-col">
        <h2 className="text-lg font-bold text-[var(--dark-blue)]">
          Grzegorz Natanek
        </h2>
      </div>
      <button onClick={onClose} className="icon">
        <CloseIcon size={24} />
      </button>
    </div>
  );
}
