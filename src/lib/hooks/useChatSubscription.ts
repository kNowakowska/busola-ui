import { useEffect } from "react";
import {
  InfiniteData,
  QueryClient,
  useQueryClient,
} from "@tanstack/react-query";

import {
  Message as MessageInterface,
  MessagesResponse,
} from "@/lib/types/chat";

import { useAuthContext } from "../providers/AuthProvider";
import { chatKeys } from "../api/queryKeysFactory";

function handleNewMessage(queryClient: QueryClient, message: MessageInterface) {
  queryClient.setQueryData(
    chatKeys.messages(),
    (prevData: InfiniteData<MessagesResponse>) => ({
      pages: prevData.pages.map((page, index) =>
        index === 0
          ? {
              ...page,
              nextCursor: page.nextCursor + 1,
              data: [...page.data, message],
            }
          : { ...page, nextCursor: page.nextCursor + 1 }
      ),
      pageParams: prevData.pageParams,
    })
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
