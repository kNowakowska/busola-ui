"use client";
import { createContext, useContext, useEffect } from "react";
import { useRouter } from "next/navigation";

import { useAuthSession } from "@/lib/hooks/useAuthSession";
import { Routes } from "../routes/routes";

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
  const router = useRouter();
  const { data } = useAuthSession();
  const isSignedIn = Boolean(data?.isSignedIn);

  useEffect(() => {
    if (!isSignedIn) {
      router.push(Routes.signIn());
    }
  }, [isSignedIn, router]);

  return (
    <AuthProviderContext.Provider value={{ isSignedIn }}>
      {children}
    </AuthProviderContext.Provider>
  );
}
