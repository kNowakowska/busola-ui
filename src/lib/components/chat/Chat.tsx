"use client";
import { useCallback } from "react";
import { InfiniteData, useMutation } from "@tanstack/react-query";

import { useReactQueryContext } from "@/lib/providers/ReactQueryProvider";

import apiClient from "@/lib/api/apiClient";
import { chatKeys } from "@/lib/api/queryKeysFactory";
import { useChatContext } from "@/lib/context/ChatContext";
import {
  Message as MessageInterface,
  MessagesResponse,
} from "@/lib/types/chat";

import { ChatHeader } from "./ChatHeader";
import { ChatInput } from "./ChatInput";
import { MessagesContainer } from "./MessagesContainer";

export function Chat() {
  const { isOpen, setIsOpen } = useChatContext();

  const { queryClient } = useReactQueryContext();

  const { mutateAsync: sendMessageMutation, isPending: isSendingMessage } =
    useMutation({
      mutationFn: async (message: string) =>
        apiClient<MessageInterface>(
          "/chat/message",
          {
            message,
          },
          {
            method: "POST",
          }
        ),
      onSuccess: (data: MessageInterface) => {
        queryClient.setQueryData(
          chatKeys.messages(),
          (prevData: InfiniteData<MessagesResponse>) => ({
            pages: prevData.pages.map((page, index) =>
              index === 0
                ? {
                    ...page,
                    nextCursor: page.nextCursor + 1,
                    data: [...page.data, data],
                  }
                : { ...page, nextCursor: page.nextCursor + 1 }
            ),
            pageParams: prevData.pageParams,
          })
        );
      },
    });

  const onClose = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  const handleSubmit = useCallback(
    async (message: string) => {
      await sendMessageMutation(message);
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

        <MessagesContainer />

        <ChatInput handleSubmit={handleSubmit} isLoading={isSendingMessage} />
      </div>
    </>
  );
}
