import { useMemo } from "react";

import { Message as MessageInterface } from "@/lib/types/chat";

interface MessageProps {
  message: MessageInterface;
  currentUserName: string;
}

const formatDateTime = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleString("pl-PL", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

export function Message({ message, currentUserName }: MessageProps) {
  const isCurrentUser = useMemo(
    () => !message.fromTeacher,
    [message.fromTeacher]
  );
  return (
    <div
      key={message.id}
      className={`flex ${isCurrentUser ? "justify-end" : "justify-start"}`}
    >
      <div
        className={`max-w-[75%] rounded-lg p-3 ${
          isCurrentUser
            ? "bg-[var(--dark-beige)] text-white"
            : "bg-gray-100 text-[var(--dark-blue)]"
        }`}
      >
        <div className="mb-1 text-xs opacity-75">
          {isCurrentUser ? currentUserName : "Grzegorz Natanek"}
        </div>
        <div className="text-sm md:text-base">{message.content}</div>
        <div className="mt-1 text-xs opacity-60">
          {formatDateTime(message.createdAt)}
        </div>
      </div>
    </div>
  );
}
