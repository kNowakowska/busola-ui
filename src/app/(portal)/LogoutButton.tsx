"use client";
import { useCallback } from "react";
import { useRouter } from "next/navigation";

import LogoutIcon from "@/lib/icons/LogoutIcon";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = useCallback(() => {
    router.push("/sign-in");
  }, [router]);

  return (
    <button className="justify-self-end" onClick={handleLogout}>
      <LogoutIcon size={40} />
    </button>
  );
}
