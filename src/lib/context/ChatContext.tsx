"use client";

import { createContext, PropsWithChildren, useContext, useState } from "react";
import { useChatSubscription } from "../hooks/useChatSubscription";

interface ChatContextState {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const defaultState: ChatContextState = {
  isOpen: false,
  setIsOpen: () => {},
};

const ChatContext = createContext(defaultState);

export function ChatContextProvider({ children }: PropsWithChildren) {
  const [isOpen, setIsOpen] = useState(false);

  useChatSubscription();

  return (
    <ChatContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </ChatContext.Provider>
  );
}

export const useChatContext = () => useContext(ChatContext);
