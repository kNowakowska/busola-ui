"use client";
import { useMutation } from "@tanstack/react-query";
import { useCallback, useMemo } from "react";

import { useReactQueryContext } from "@/lib/providers/ReactQueryProvider";

import apiClient from "@/lib/api/apiClient";
import { chatKeys } from "@/lib/api/queryKeysFactory";
import { useAuthContext } from "@/lib/providers/AuthProvider";
import { useChatContext } from "@/lib/context/ChatContext";
import { Message as MessageInterface } from "@/lib/types/chat";

import { ChatHeader } from "./ChatHeader";
import { ChatInput } from "./ChatInput";
import { MessagesContainer } from "./MessagesContainer";

export function Chat() {
  const { isOpen, setIsOpen, messages, isFetchingMessages, fetchNextPage } =
    useChatContext();
  const { currentUser } = useAuthContext();

  const { queryClient } = useReactQueryContext();

  const sendMessageMutation = useMutation({
    mutationFn: async (message: string) =>
      apiClient<void>(
        "/chat/message",
        {
          message,
        },
        {
          method: "POST",
        }
      ),
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

  const handleSubmit = useCallback(
    async (message: string) => {
      const createdMessage = await sendMessageMutation.mutateAsync(message);
      queryClient.setQueryData(
        chatKeys.messages(),
        (old: MessageInterface[]) => [...old, createdMessage]
      );
    },
    [sendMessageMutation]
  );

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
          isOpen ? "display-block translate-x-0" : "hidden translate-x-full"
        }`}
      >
        <ChatHeader onClose={onClose} />

        <MessagesContainer
          messages={messages}
          currentUserName={currentUserName}
          isOpen={isOpen}
          isLoading={isFetchingMessages}
          fetchNextPage={fetchNextPage}
        />

        <ChatInput handleSubmit={handleSubmit} />
      </div>
    </>
  );
}
