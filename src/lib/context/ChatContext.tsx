"use client";

import { createContext, PropsWithChildren, useContext, useState } from "react";

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

  return (
    <ChatContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </ChatContext.Provider>
  );
}

export const useChatContext = () => useContext(ChatContext);
