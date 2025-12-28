import { RefObject, useCallback, useEffect, useRef } from "react";
import { subSeconds } from "date-fns";

import { useInView } from "@/lib/hooks/useInView";
import { useChatContext } from "@/lib/context/ChatContext";

import { Message } from "./Message";
import LoadingSpinner from "../LoadingSpinner";

export function MessagesContainer() {
  const containerRef = useRef<HTMLDivElement>(null);

  const {
    isOpen,
    messages,
    isFetchingMessages: isLoading,
    fetchNextPage,
  } = useChatContext();

  const scrollToBottom = useCallback(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [containerRef]);

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [isOpen]);

  useEffect(() => {
    const lastMessage = messages[messages.length - 1];
    const isNewMessage = lastMessage
      ? new Date(lastMessage.createdAt) > subSeconds(new Date(), 10)
      : false;
    if (isNewMessage) {
      scrollToBottom();
    }
  }, [messages]);

  return (
    <div
      className="flex h-[calc(100%-140px)] flex-col space-y-4 overflow-y-auto p-4"
      ref={containerRef}
    >
      {isLoading && messages.length === 0 && (
        <LoadingSpinner message="Ładowanie wiadomości..." />
      )}

      {messages.length > 0 && (
        <>
          <ContainerTop
            containerRef={containerRef}
            onIntersection={fetchNextPage}
          />
          {isLoading && <LoadingSpinner size="medium" />}
          {messages.map((message) => (
            <Message key={message.uuid} message={message} />
          ))}
        </>
      )}

      {!isLoading && messages.length === 0 && (
        <div className="flex h-[calc(100%-140px)] flex-col space-y-4 overflow-y-auto p-4">
          <p className="text-center text-gray-500">Brak wiadomości</p>
        </div>
      )}
      <div ref={containerRef} />
    </div>
  );
}

function ContainerTop({
  containerRef,
  onIntersection,
}: {
  containerRef: RefObject<HTMLDivElement | null>;
  onIntersection: () => void;
}) {
  const { ref, inView } = useInView<HTMLDivElement>({
    threshold: 1.0,
    root: containerRef.current,
  });

  useEffect(() => {
    if (inView) {
      onIntersection();
    }
  }, [inView, onIntersection]);

  return <div ref={ref} />;
}
