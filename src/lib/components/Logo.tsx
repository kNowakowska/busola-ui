"use client";
import Image from "next/image";

import { Routes } from "../routes/routes";
import { useMemo } from "react";

export default function Logo({
  isSignedIn,
  isMobile,
}: {
  isSignedIn: boolean;
  isMobile: boolean;
}) {
  const logoSize = useMemo(() => (isMobile ? 100 : 150), [isMobile]);
  return (
    <div>
      <a href={isSignedIn ? Routes.dashboard() : Routes.home()}>
        <Image
          src="/busola-korepetycje-logo-puste-2.png"
          alt="Busola"
          width={logoSize}
          height={logoSize}
        />
      </a>
    </div>
  );
}
