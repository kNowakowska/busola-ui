"use client";
import { useCallback } from "react";
import { useMediaQuery } from "react-responsive";

import { ChatIcon } from "@/lib/icons/ChatIcon";
import { useChatContext } from "@/lib/context/ChatContext";

import Tooltip from "../Tooltip";

export default function ChatButton() {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const { setIsOpen, notViewedMessagesCount } = useChatContext();

  const handleOpenChat = useCallback(() => {
    setIsOpen(true);
  }, []);

  return (
    <Tooltip text={"Otwórz chat"}>
      <button
        className="icon m-2 justify-self-end md:m-0"
        onClick={handleOpenChat}
      >
        {notViewedMessagesCount > 0 && (
          <div className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 align-middle text-xs">
            {notViewedMessagesCount}
          </div>
        )}
        <ChatIcon size={isMobile ? 30 : 40} />
      </button>
    </Tooltip>
  );
}
