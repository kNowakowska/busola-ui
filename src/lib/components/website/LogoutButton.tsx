"use client";
import { useCallback } from "react";
import { useRouter } from "next/navigation";
import { useMediaQuery } from "react-responsive";

import LogoutIcon from "@/lib/icons/LogoutIcon";
import { useMutation } from "@tanstack/react-query";
import apiClient from "@/lib/api/apiClient";
import { useReactQueryContext } from "@/lib/providers/ReactQueryProvider";
import { Routes } from "@/lib/routes/routes";
import { authKeys } from "@/lib/api/queryKeysFactory";

export default function LogoutButton() {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const router = useRouter();
  const { queryClient } = useReactQueryContext();

  const { mutateAsync: logout } = useMutation({
    mutationFn: () =>
      apiClient("/auth/sign-out", undefined, { method: "POST" }),
    onSuccess: async () => {
      router.push(Routes.home());
      router.refresh();

      queryClient.clear();
      await queryClient.invalidateQueries({ queryKey: authKeys.session });
    },
  });

  const handleLogout = useCallback(async () => {
    await logout();
  }, [logout]);

  return (
    <button className="icon justify-self-end md:m-0 m-2" onClick={handleLogout}>
      <LogoutIcon size={isMobile ? 30 : 40} />
    </button>
  );
}
