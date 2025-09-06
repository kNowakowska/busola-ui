"use client";

import Image from "next/image";
import { useMediaQuery } from "react-responsive";

import Container from "@/lib/components/website/Container";
import { useMemo } from "react";

export default function StatsBanner() {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const iconSize = useMemo(() => (isMobile ? 60 : 80), [isMobile]);
  return (
    <div
      id="stats-banner"
      className="h-auto w-full bg-[var(--dark-beige)] md:py-20 py-5"
    >
      <Container className="h-full w-full flex md:flex-row flex-col items-center">
        <div className="md:w-1/3 w-full h-full flex flex-col items-center space-y-10 md:px-10 py-5 ">
          <Image
            src="/stats2.png"
            alt="Stat 1"
            width={iconSize}
            height={iconSize}
          />
          <p className="md:text-xl text-base whiteText">10 lat doświadczenia</p>
        </div>
        <div className="md:w-1/3 w-full h-full flex flex-col items-center space-y-10 md:px-10 py-5 border-white md:border-x-2 md:border-y-0 border-y-2">
          <Image
            src="/stats3.png"
            alt="Stat 2"
            width={iconSize}
            height={iconSize}
          />
          <p className="md:text-xl text-base whiteText">100+ kursantów</p>
        </div>
        <div className="md:w-1/3 w-full h-full flex flex-col items-center space-y-10 md:px-10 py-5">
          <Image
            src="/stats1.png"
            alt="Stat 3"
            width={iconSize}
            height={iconSize}
          />
          <p className="md:text-xl text-base whiteText">
            72% średni wynik moich uczniów na maturze
          </p>
        </div>
      </Container>
    </div>
  );
}
