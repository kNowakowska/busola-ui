"use client";
import { useCallback } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useMediaQuery } from "react-responsive";

import LogoutIcon from "@/lib/icons/LogoutIcon";
import { useMutation } from "@tanstack/react-query";
import apiClient from "@/lib/api/apiClient";
import { useReactQueryContext } from "@/lib/providers/ReactQueryProvider";
import { Routes } from "@/lib/routes/routes";

export default function LogoutButton() {
  const pathname = usePathname();
  const isSignedIn = pathname.includes("dashboard");

  const isMobile = useMediaQuery({ maxWidth: 768 });

  const router = useRouter();
  const { queryClient } = useReactQueryContext();

  const { mutateAsync: logout } = useMutation({
    mutationFn: () =>
      apiClient("/auth/sign-out", undefined, { method: "POST" }),
    onSuccess: () => {
      queryClient.clear();
    },
  });

  const handleLogout = useCallback(async () => {
    await logout();
    router.push(Routes.signIn());
  }, [router, logout]);

  if (!isSignedIn) {
    return <div></div>;
  }
  return (
    <button className="icon justify-self-end md:m-0 m-2" onClick={handleLogout}>
      <LogoutIcon size={isMobile ? 30 : 40} />
    </button>
  );
}
