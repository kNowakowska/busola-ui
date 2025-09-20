"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

import { Button } from "@/lib/components/Button";
import Container from "@/lib/components/website/Container";

export default function Hero() {
  const router = useRouter();

  const handleBook = useCallback(async () => {
    router.push("#contact");
  }, [router]);

  return (
    <div id="hero" className="h-auto py-10 md:h-[70vh] md:py-20">
      <Container className="flex h-full flex-col space-y-15 md:flex-row md:space-y-0 md:space-x-10">
        <div className="flex h-full w-full flex-col items-end justify-center space-y-8 md:w-1/2 md:space-y-10">
          <h1 className="text-right text-4xl font-black md:text-5xl">
            Grzegorz Natanek
          </h1>
          <p className="text-right text-base md:pl-15 md:text-2xl">
            Doświadczony nauczyciel <b>geografii</b>, który przygotuje Cię na
            matury i olimpiady.
          </p>
          <Button onClick={handleBook} className="w-[200px]">
            UMÓW SIĘ!
          </Button>
        </div>
        <div className="flex h-full w-full flex-col items-center justify-center md:w-1/2">
          <Image src="/hero-final.jpg" alt="Busola" width={500} height={500} />
        </div>
      </Container>
    </div>
  );
}
