"use client";
import { useCallback } from "react";
import { useRouter } from "next/navigation";

import LogoutIcon from "@/lib/icons/LogoutIcon";
import { useMutation } from "@tanstack/react-query";
import { apiClient } from "@/lib/api/apiClient";

export default function LogoutButton() {
  const router = useRouter();

  const { mutateAsync: logout } = useMutation({
    mutationFn: () =>
      apiClient("/auth/sign-out", undefined, { method: "POST" }),
  });

  const handleLogout = useCallback(async () => {
    await logout();
    router.push("/sign-in");
  }, [router, logout]);

  return (
    <button className="justify-self-end" onClick={handleLogout}>
      <LogoutIcon size={40} />
    </button>
  );
}
