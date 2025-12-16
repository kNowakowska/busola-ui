"use client";
import { useQuery } from "@tanstack/react-query";
import { useState, useCallback, useMemo } from "react";

import apiClient from "@/lib/api/apiClient";
import { authKeys } from "@/lib/api/queryKeysFactory";
import { User } from "@/lib/types/courses";
import { useChatContext } from "@/lib/context/ChatContext";
import { Message as MessageInterface } from "@/lib/types/chat";

import { ChatHeader } from "./ChatHeader";
import { ChatInput } from "./ChatInput";
import { MessagesContainer } from "./MessagesContainer";

const initialMessages: MessageInterface[] = [
  {
    id: "1",
    content: "Cześć! Jak się masz?",
    fromTeacher: true,
    createdAt: "2024-01-15T10:30:00Z",
  },
  {
    id: "2",
    content: "Dzień dobry! Wszystko w porządku, dziękuję za pytanie.",
    fromTeacher: false,
    createdAt: "2024-01-15T10:32:00Z",
  },
  {
    id: "3",
    content: "Świetnie! Czy masz jakieś pytania dotyczące kursu?",
    fromTeacher: true,
    createdAt: "2024-01-15T10:33:00Z",
  },
  {
    id: "4",
    content: "Rozwieje wszystkie Twoje wątpliwości.",
    fromTeacher: true,
    createdAt: "2024-01-15T10:33:00Z",
  },
  {
    id: "5",
    content: "Tak, chciałbym lepiej zrozumieć materiał z ostatniej lekcji.",
    fromTeacher: false,
    createdAt: "2024-01-15T10:35:00Z",
  },
  {
    id: "6",
    content: "Oczywiście! Która część sprawia Ci największą trudność?",
    fromTeacher: true,
    createdAt: "2024-01-15T10:36:00Z",
  },
  {
    id: "7",
    content: "Cześć! Jak się masz?",
    fromTeacher: true,
    createdAt: "2024-01-15T10:30:00Z",
  },
  {
    id: "8",
    content: "Dzień dobry! Wszystko w porządku, dziękuję za pytanie.",
    fromTeacher: false,
    createdAt: "2024-01-15T10:32:00Z",
  },
  {
    id: "9",
    content: "Świetnie! Czy masz jakieś pytania dotyczące kursu?",
    fromTeacher: true,
    createdAt: "2024-01-15T10:33:00Z",
  },
  {
    id: "10",
    content: "Rozwieje wszystkie Twoje wątpliwości.",
    fromTeacher: true,
    createdAt: "2024-01-15T10:33:00Z",
  },
  {
    id: "11",
    content: "Tak, chciałbym lepiej zrozumieć materiał z ostatniej lekcji.",
    fromTeacher: false,
    createdAt: "2024-01-15T10:35:00Z",
  },
  {
    id: "12",
    content: "Oczywiście! Która część sprawia Ci największą trudność?",
    fromTeacher: true,
    createdAt: "2024-01-15T10:36:00Z",
  },
];

export function Chat() {
  const { isOpen, setIsOpen } = useChatContext();
  const [messages, setMessages] = useState<MessageInterface[]>(initialMessages);

  const { data: currentUser } = useQuery({
    queryKey: authKeys.currentUser,
    queryFn: () => apiClient<User>("/dashboard/current-user"),
  });

  const currentUserName = useMemo(
    () =>
      currentUser
        ? `${currentUser.name} ${currentUser.lastName}`
        : "Użytkownik",
    [currentUser]
  );

  const onClose = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  const handleSubmit = useCallback((value: string) => {
    setMessages((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        content: value,
        fromTeacher: false,
        createdAt: new Date().toISOString(),
      },
    ]);
  }, []);

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black opacity-80"
          onClick={onClose}
        />
      )}

      <div
        className={`fixed top-0 right-0 z-50 h-full w-full transform bg-white shadow-lg transition-transform duration-300 ease-in-out md:w-120 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ChatHeader onClose={onClose} />

        <MessagesContainer
          messages={messages}
          currentUserName={currentUserName}
          isOpen={isOpen}
        />

        <ChatInput handleSubmit={handleSubmit} />
      </div>
    </>
  );
}
