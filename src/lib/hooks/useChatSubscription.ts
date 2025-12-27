import { useEffect } from "react";
import { QueryClient, useQueryClient } from "@tanstack/react-query";

import { Message as MessageInterface } from "@/lib/types/chat";

import { useAuthContext } from "../providers/AuthProvider";
import { chatKeys } from "../api/queryKeysFactory";

function handleNewMessage(queryClient: QueryClient, message: MessageInterface) {
  queryClient.setQueryData(
    chatKeys.messages(),
    (prevMessages: MessageInterface[]) => [...prevMessages, message]
  );
}

export function useChatSubscription() {
  const queryClient = useQueryClient();
  const { token } = useAuthContext();

  useEffect(() => {
    if (!token) return;

    const websocket = new WebSocket(
      `${process.env.NEXT_PUBLIC_WEBSOCKET_URL}?token=${token}`
    );

    websocket.onmessage = (event) => {
      console.log("websocket received message");
      const data = JSON.parse(event.data as string);

      if (data.type === "message.created") {
        handleNewMessage(queryClient, data.message);
      }
    };

    return () => {
      websocket.close();
    };
  }, [queryClient, token]);
}
