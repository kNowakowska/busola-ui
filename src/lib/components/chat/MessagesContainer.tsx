import { useEffect, useRef } from "react";

import { Message as MessageInterface } from "@/lib/types/chat";

import { Message } from "./Message";
import LoadingSpinner from "../LoadingSpinner";

interface MessagesContainerProps {
  messages: MessageInterface[];
  currentUserName: string;
  isOpen: boolean;
  isLoading: boolean;
}

export function MessagesContainer({
  messages,
  currentUserName,
  isOpen,
  isLoading,
}: MessagesContainerProps) {
  const containerEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerEndRef.current && isOpen) {
      containerEndRef.current.scrollTop = containerEndRef.current.scrollHeight;
    }
  }, [containerEndRef, messages, isOpen]);

  return (
    <div
      className="flex h-[calc(100%-140px)] flex-col space-y-4 overflow-y-auto p-4"
      ref={containerEndRef}
    >
      {isLoading && <LoadingSpinner message="Ładowanie wiadomości..." />}
      {!isLoading &&
        messages.length > 0 &&
        messages.map((message) => (
          <Message
            key={message.uuid}
            message={message}
            currentUserName={currentUserName}
          />
        ))}

      {!isLoading && messages.length === 0 && (
        <div className="flex h-[calc(100%-140px)] flex-col space-y-4 overflow-y-auto p-4">
          <p className="text-center text-gray-500">Brak wiadomości</p>
        </div>
      )}
      <div ref={containerEndRef} />
    </div>
  );
}
