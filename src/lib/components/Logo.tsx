"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { Routes } from "../routes/routes";

export default function Logo() {
  const pathname = usePathname();
  const isSignedIn = pathname.includes("dashboard");

  return (
    <div>
      <a href={isSignedIn ? Routes.dashboard() : Routes.home()}>
        <Image
          src="/busola-korepetycje-logo-puste-2.png"
          alt="Busola"
          width={150}
          height={150}
        />
      </a>
    </div>
  );
}
