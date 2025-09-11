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
    <div id="hero" className="md:h-[70vh] h-auto md:py-20 py-10">
      <Container className="h-full flex md:flex-row flex-col space-y-15 md:space-y-0 md:space-x-10">
        <div className=" w-full md:w-1/2 h-full flex flex-col justify-center items-end md:space-y-10 space-y-8 ">
          <h1 className="md:text-5xl text-4xl font-black text-right">
            Grzegorz Natanek
          </h1>
          <p className="md:text-2xl text-base text-right md:pl-15">
            Doświadczony nauczyciel <b>geografii</b>, który przygotuje Cię na
            matury i olimpiady.
          </p>
          <Button onClick={handleBook} className="w-[200px]">
            UMÓW SIĘ!
          </Button>
        </div>
        <div className="w-full md:w-1/2 h-full flex flex-col justify-center items-center">
          <Image src="/hero-final.jpg" alt="Busola" width={500} height={500} />
        </div>
      </Container>
    </div>
  );
}
