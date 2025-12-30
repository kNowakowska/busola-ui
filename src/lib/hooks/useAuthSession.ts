"use client";
import { useQuery } from "@tanstack/react-query";
import { authKeys } from "../api/queryKeysFactory";

type AuthSession = { isSignedIn: boolean; token: string };

export function useAuthSession() {
  return useQuery<AuthSession>({
    queryKey: authKeys.session,
    queryFn: async () => {
      const res = await fetch("/api/auth/session", {
        cache: "no-store",
        credentials: "include",
      });
      if (!res.ok) throw new Error("Failed to fetch session");
      return res.json();
    },
    refetchInterval: 15_000,
    refetchOnMount: true,
    refetchOnReconnect: true,
  });
}
