"use client";
import { useCallback } from "react";
import { useRouter } from "next/navigation";
import { useMediaQuery } from "react-responsive";

import { Routes } from "@/lib/routes/routes";
import LoginIcon from "@/lib/icons/LoginIcon";
import { useAuthProviderContext } from "@/lib/providers/AuthProvider";

export default function LoginButton() {
  const router = useRouter();
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const { isSignedIn } = useAuthProviderContext();

  const handleLogin = useCallback(async () => {
    if (isSignedIn) {
      router.push(Routes.dashboard());
    } else {
      router.push(Routes.signIn());
    }
  }, [router, isSignedIn]);

  return (
    <button className="icon justify-self-end md:m-0 m-2" onClick={handleLogin}>
      <LoginIcon size={isMobile ? 30 : 40} />
    </button>
  );
}
