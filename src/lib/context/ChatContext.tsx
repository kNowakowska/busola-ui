"use client";

import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useInfiniteQuery } from "@tanstack/react-query";

import {
  Message as MessageInterface,
  MessagesResponse,
} from "@/lib/types/chat";

import { useChatSubscription } from "../hooks/useChatSubscription";
import apiClient from "../api/apiClient";
import { chatKeys } from "../api/queryKeysFactory";
import { useAuthContext } from "../providers/AuthProvider";

interface ChatContextState {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  messages: MessageInterface[];
  isFetchingMessages: boolean;
  notViewedMessagesCount: number;
  fetchNextPage: () => void;
}

const defaultState: ChatContextState = {
  isOpen: false,
  setIsOpen: () => {},
  messages: [],
  isFetchingMessages: false,
  notViewedMessagesCount: 0,
  fetchNextPage: () => {},
};

const ChatContext = createContext(defaultState);

export function ChatContextProvider({ children }: PropsWithChildren) {
  const [isOpen, setIsOpen] = useState(false);
  const [notViewedMessagesCount, setNotViewedMessagesCount] = useState(0);

  const { isSignedIn } = useAuthContext();

  useChatSubscription();

  const {
    data,
    isFetching: isFetchingMessages,
    fetchNextPage,
  } = useInfiniteQuery({
    queryKey: chatKeys.messages(),
    queryFn: async ({ pageParam }: { pageParam: number }) =>
      apiClient<MessagesResponse>(`/chat/message?skip=${pageParam}`),
    getNextPageParam: (lastPage) =>
      lastPage.data.length > 0 ? lastPage.nextCursor : undefined,
    initialPageParam: 0,
    enabled: isSignedIn,
  });

  const messages = useMemo(
    () => data?.pages.reverse().flatMap(({ data }) => data) || [],
    [data]
  );

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
        messages,
        isFetchingMessages,
        notViewedMessagesCount,
        fetchNextPage,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
}

export const useChatContext = () => useContext(ChatContext);
