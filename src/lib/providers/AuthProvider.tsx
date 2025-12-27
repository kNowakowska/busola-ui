"use client";
import { createContext, useContext, useEffect, useMemo } from "react";
import { usePathname, useRouter } from "next/navigation";

import { useAuthSession } from "@/lib/hooks/useAuthSession";
import { Routes } from "../routes/routes";

interface AuthProviderState {
  isSignedIn: boolean;
  token: string;
}

const defaultState: AuthProviderState = {
  isSignedIn: false,
  token: "",
};

const AuthProviderContext = createContext(defaultState);
export const useAuthProviderContext = () => useContext(AuthProviderContext);

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();

  const { data } = useAuthSession();

  const isSignedIn = Boolean(data?.isSignedIn);
  const token = data?.token || "";

  const isAuthPage = useMemo(
    () => pathname.includes("/auth") || pathname === "/",
    [pathname]
  );

  useEffect(() => {
    if (!!data && !isSignedIn && !isAuthPage) {
      router.push(Routes.signIn());
    }
  }, [isSignedIn, router]);

  return (
    <AuthProviderContext.Provider value={{ isSignedIn, token }}>
      {children}
    </AuthProviderContext.Provider>
  );
}
