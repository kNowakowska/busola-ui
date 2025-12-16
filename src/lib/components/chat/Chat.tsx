"use client";
import { useQuery } from "@tanstack/react-query";
import { useCallback, useMemo } from "react";

import apiClient from "@/lib/api/apiClient";
import { authKeys, chatKeys } from "@/lib/api/queryKeysFactory";
import { User } from "@/lib/types/courses";
import { useChatContext } from "@/lib/context/ChatContext";
import { Message as MessageInterface } from "@/lib/types/chat";

import { ChatHeader } from "./ChatHeader";
import { ChatInput } from "./ChatInput";
import { MessagesContainer } from "./MessagesContainer";

export function Chat() {
  const { isOpen, setIsOpen } = useChatContext();

  const { data: currentUser } = useQuery({
    queryKey: authKeys.currentUser,
    queryFn: () => apiClient<User>("/dashboard/current-user"),
  });

  const { data: messages, isFetching: isFetchingMessages } = useQuery({
    queryKey: chatKeys.messages(),
    queryFn: async () => apiClient<MessageInterface[]>(`/chat/message`),
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
    console.log("handleSubmit", value);
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
          messages={messages || []}
          currentUserName={currentUserName}
          isOpen={isOpen}
          isLoading={isFetchingMessages}
        />

        <ChatInput handleSubmit={handleSubmit} />
      </div>
    </>
  );
}
