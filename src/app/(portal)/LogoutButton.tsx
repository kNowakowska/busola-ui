"use client";
import { useCallback } from "react";
import { usePathname, useRouter } from "next/navigation";

import LogoutIcon from "@/lib/icons/LogoutIcon";
import { useMutation } from "@tanstack/react-query";
import apiClient from "@/lib/api/apiClient";
import { userKeys } from "@/lib/api/queryKeysFactory";
import { useReactQueryContext } from "@/lib/providers/ReactQueryProvider";
import { Routes } from "@/lib/routes/routes";

export default function LogoutButton() {
  const pathname = usePathname();
  const isSignedIn = pathname.includes("dashboard");

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
    <button className="justify-self-end" onClick={handleLogout}>
      <LogoutIcon size={40} />
    </button>
  );
}
