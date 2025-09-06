"use client";
import { useCallback } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

import { Button } from "@/lib/components/Button";
import Container from "@/lib/components/website/Container";

export default function Hero() {
  const router = useRouter();

  const handleBook = useCallback(async () => {
    router.push("#contact");
  }, [router]);

  return (
    <div className="h-[70vh] py-20">
      <Container className="h-full flex flex-row gap-10 ">
        <div className="w-1/2 h-full flex flex-col justify-center items-end space-y-10 ">
          <h1 className="text-5xl font-black text-right">Grzegorz Natanek</h1>
          <p className="text-2xl text-right pl-15">
            Doświadczony nauczyciel <b>geografii</b>, który przygotuje Cię na
            matury i olimpiady.
          </p>
          <Button text="umów się!" onClick={handleBook} className="w-[200px]" />
        </div>
        <div className="w-1/2 h-full flex flex-col justify-center items-center">
          <Image src="/hero-final.jpg" alt="Busola" width={500} height={500} />
        </div>
      </Container>
    </div>
  );
}
