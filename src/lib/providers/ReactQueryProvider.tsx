"use client";
import { useState, createContext, useContext } from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

interface ReactQueryContextState {
  queryClient: QueryClient;
}

const defaultState: ReactQueryContextState = {
  queryClient: new QueryClient(),
};

const ReactQueryContext = createContext(defaultState);
export const useReactQueryContext = () => useContext(ReactQueryContext);

export default function ReactQueryProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60_000,
            gcTime: 300_000,
            refetchOnWindowFocus: false,
            refetchOnMount: false,
            refetchOnReconnect: true,
            retry: 1,
            retryDelay: (attempt) => Math.min(1000 * 2 ** attempt, 30_000),
          },
        },
      })
  );

  return (
    <ReactQueryContext.Provider value={{ queryClient }}>
      <QueryClientProvider client={queryClient}>
        {children}
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ReactQueryContext.Provider>
  );
}
