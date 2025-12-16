import { useEffect, useRef } from "react";

import { Message as MessageInterface } from "@/lib/types/chat";

import { Message } from "./Message";

interface MessagesContainerProps {
  messages: MessageInterface[];
  currentUserName: string;
  isOpen: boolean;
}

export function MessagesContainer({
  messages,
  currentUserName,
  isOpen,
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
      {messages.map((message) => (
        <Message
          key={message.id}
          message={message}
          currentUserName={currentUserName}
        />
      ))}
      <div ref={containerEndRef} />
    </div>
  );
}
