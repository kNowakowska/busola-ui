import { useEffect, useMemo } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { Message as MessageInterface } from "@/lib/types/chat";
import { useInView } from "@/lib/hooks/useInView";
import apiClient from "@/lib/api/apiClient";
import { chatKeys } from "@/lib/api/queryKeysFactory";

interface MessageProps {
  message: MessageInterface;
  currentUserName: string;
}

const formatDateTime = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleString("pl-PL", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

export function Message({ message, currentUserName }: MessageProps) {
  const queryClient = useQueryClient();
  const { ref, inView } = useInView<HTMLDivElement>();

  const isFromCurrentUser = useMemo(
    () => !message.fromTeacher,
    [message.fromTeacher]
  );

  const markMessageAsViewedMutation = useMutation({
    mutationFn: async (messageId: string) =>
      apiClient<void>(
        `/chat/message/${messageId}/viewed`,
        {},
        {
          method: "POST",
        }
      ),
    onSuccess: () => {
      queryClient.setQueryData(chatKeys.messages(), (old: MessageInterface[]) =>
        old.map((message) =>
          message.uuid === message.uuid
            ? { ...message, isViewed: true }
            : message
        )
      );
    },
  });

  useEffect(() => {
    const markMessageAsViewed = async () => {
      if (inView && !message.isViewed) {
        await markMessageAsViewedMutation.mutateAsync(message.uuid);
      }
    };

    markMessageAsViewed();
  }, [inView, message.isViewed]);

  return (
    <div
      key={message.uuid}
      className={`flex ${isFromCurrentUser ? "justify-end" : "justify-start"}`}
      ref={ref}
    >
      <div
        className={`max-w-[75%] rounded-lg p-3 ${
          isFromCurrentUser
            ? "bg-[var(--dark-beige)] text-white"
            : "bg-gray-100 text-[var(--dark-blue)]"
        }`}
      >
        <div className="mb-1 text-xs opacity-75">
          {isFromCurrentUser ? currentUserName : "Grzegorz Natanek"}
        </div>
        <div className="text-sm md:text-base">{message.message}</div>
        <div className="mt-1 text-xs opacity-60">
          {formatDateTime(message.createdAt)}
        </div>
      </div>
    </div>
  );
}
