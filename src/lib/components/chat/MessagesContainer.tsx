import { RefObject, useEffect, useRef } from "react";

import { Message as MessageInterface } from "@/lib/types/chat";
import { useInView } from "@/lib/hooks/useInView";

import { Message } from "./Message";
import LoadingSpinner from "../LoadingSpinner";

interface MessagesContainerProps {
  messages: MessageInterface[];
  currentUserName: string;
  isOpen: boolean;
  isLoading: boolean;
  fetchNextPage: () => void;
}

export function MessagesContainer({
  messages,
  currentUserName,
  isOpen,
  isLoading,
  fetchNextPage,
}: MessagesContainerProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current && isOpen) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [containerRef, isOpen]);

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
          {isLoading && <LoadingSpinner small />}
          {messages.map((message) => (
            <Message
              key={message.uuid}
              message={message}
              currentUserName={currentUserName}
            />
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
