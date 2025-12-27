import { useCallback, useState } from "react";

interface ChatInputProps {
  handleSubmit: (value: string) => Promise<void>;
}
export function ChatInput({ handleSubmit }: ChatInputProps) {
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
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Napisz wiadomość..."
          className="flex-1 rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-[var(--dark-beige)] focus:outline-none md:text-base"
        />
        <button
          type="submit"
          disabled={!inputValue.trim()}
          className="rounded-xl px-4 py-2 text-sm font-medium tracking-wide disabled:cursor-not-allowed disabled:bg-[var(--light-blue)] md:text-base"
        >
          Wyślij
        </button>
      </form>
    </div>
  );
}
