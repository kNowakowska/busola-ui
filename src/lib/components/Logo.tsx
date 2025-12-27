"use client";
import Image from "next/image";

import { Routes } from "../routes/routes";
import { useMemo } from "react";

export default function Logo({ isMobile }: { isMobile: boolean }) {
  const logoSize = useMemo(() => (isMobile ? 100 : 150), [isMobile]);
  return (
    <div>
      <a href={Routes.home()}>
        <Image
          src="/busola-korepetycje-logo-puste-2.png"
          alt="Busola Logo"
          width={logoSize}
          height={logoSize}
        />
      </a>
    </div>
  );
}
