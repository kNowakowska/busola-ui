"use client";

import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import { useQuery } from "@tanstack/react-query";

import { Message as MessageInterface } from "@/lib/types/chat";

import { useChatSubscription } from "../hooks/useChatSubscription";
import apiClient from "../api/apiClient";
import { chatKeys } from "../api/queryKeysFactory";

interface ChatContextState {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  messages: MessageInterface[];
  isFetchingMessages: boolean;
  notViewedMessagesCount: number;
}

const defaultState: ChatContextState = {
  isOpen: false,
  setIsOpen: () => {},
  messages: [],
  isFetchingMessages: false,
  notViewedMessagesCount: 0,
};

const ChatContext = createContext(defaultState);

export function ChatContextProvider({ children }: PropsWithChildren) {
  const [isOpen, setIsOpen] = useState(false);
  const [notViewedMessagesCount, setNotViewedMessagesCount] = useState(0);

  useChatSubscription();

  const { data: messages, isFetching: isFetchingMessages } = useQuery({
    queryKey: chatKeys.messages(),
    queryFn: async () => apiClient<MessageInterface[]>(`/chat/message`),
  });

  useEffect(() => {
    const notViewedMessages = (messages || [])?.filter(
      (message) => !message.isViewed
    ).length;
    setNotViewedMessagesCount(notViewedMessages);
  }, [messages]);

  return (
    <ChatContext.Provider
      value={{
        isOpen,
        setIsOpen,
        messages: messages || [],
        isFetchingMessages,
        notViewedMessagesCount,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
}

export const useChatContext = () => useContext(ChatContext);
