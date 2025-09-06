"use client";
import { useCallback } from "react";
import { useRouter } from "next/navigation";
import { useMediaQuery } from "react-responsive";

import { Routes } from "@/lib/routes/routes";
import LoginIcon from "@/lib/icons/LoginIcon";

export default function LoginButton() {
  const router = useRouter();

  const isMobile = useMediaQuery({ maxWidth: 768 });

  const handleLogin = useCallback(async () => {
    router.push(Routes.signIn());
  }, [router]);

  return (
    <button className="icon justify-self-end md:m-0 m-2" onClick={handleLogin}>
      <LoginIcon size={isMobile ? 30 : 40} />
    </button>
  );
}
