import { useCallback, useState } from "react";
import LoadingSpinner from "../LoadingSpinner";

interface ChatInputProps {
  handleSubmit: (value: string) => Promise<void>;
  isLoading: boolean;
}
export function ChatInput({ handleSubmit, isLoading }: ChatInputProps) {
  const [inputValue, setInputValue] = useState("");

  const handleFormSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      if (!inputValue.trim()) return;
      await handleSubmit(inputValue);
      setInputValue("");
    },
    [inputValue, handleSubmit]
  );

  return (
    <div className="sticky bottom-0 border-t border-gray-200 bg-white p-4">
      <form onSubmit={handleFormSubmit} className="flex gap-2">
        <input
          type="text"
          value={inputValue}
          disabled={isLoading}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Napisz wiadomość..."
          className="flex-1 rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-[var(--dark-beige)] focus:outline-none md:text-base"
        />
        <button
          type="submit"
          disabled={!inputValue.trim() || isLoading}
          className="rounded-xl px-4 py-2 text-sm font-medium tracking-wide disabled:cursor-not-allowed disabled:bg-[var(--light-blue)] md:text-base"
        >
          {isLoading ? (
            <span>
              Wysyłanie <LoadingSpinner size="small" inline />
            </span>
          ) : (
            "Wyślij"
          )}
        </button>
      </form>
    </div>
  );
}
