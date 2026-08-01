"use client";
import { createContext, useContext } from "react";
import { useQuery } from "@tanstack/react-query";

import { useAuthSession } from "@/lib/hooks/useAuthSession";
import { authKeys } from "../api/queryKeysFactory";
import apiClient from "../api/apiClient";
import { User } from "../types/courses";

interface AuthProviderState {
  isSignedIn: boolean;
  token: string;
  currentUser?: User;
  isLoadingCurrentUser: boolean;
  fetchCurrentUserError?: Error | null;
}

const defaultState: AuthProviderState = {
  isSignedIn: false,
  token: "",
  currentUser: undefined,
  isLoadingCurrentUser: false,
  fetchCurrentUserError: undefined,
};

const AuthProviderContext = createContext(defaultState);
export const useAuthContext = () => useContext(AuthProviderContext);

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data } = useAuthSession();

  const isSignedIn = Boolean(data?.isSignedIn);
  const token = data?.token || "";

  const {
    data: currentUser,
    isPending: isLoadingCurrentUser,
    error: fetchCurrentUserError,
  } = useQuery({
    queryKey: authKeys.currentUser,
    queryFn: () => apiClient<User>("/dashboard/current-user"),
    enabled: isSignedIn,
  });

  return (
    <AuthProviderContext.Provider
      value={{
        isSignedIn,
        token,
        currentUser,
        isLoadingCurrentUser,
        fetchCurrentUserError,
      }}
    >
      {children}
    </AuthProviderContext.Provider>
  );
}
