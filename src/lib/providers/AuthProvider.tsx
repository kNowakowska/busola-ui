"use client";
import { createContext, useContext } from "react";
import { useAuthSession } from "@/lib/hooks/useAuthSession";

interface AuthProviderState {
  isSignedIn: boolean;
}

const defaultState: AuthProviderState = {
  isSignedIn: false,
};

const AuthProviderContext = createContext(defaultState);
export const useAuthProviderContext = () => useContext(AuthProviderContext);

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data } = useAuthSession();
  const isSignedIn = Boolean(data?.isSignedIn);

  return (
    <AuthProviderContext.Provider value={{ isSignedIn }}>
      {children}
    </AuthProviderContext.Provider>
  );
}
