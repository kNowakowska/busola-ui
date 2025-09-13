"use client";
import { useCallback } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { Button } from "@/lib/components/Button";
import Container from "@/lib/components/website/Container";

export default function Services() {
  const router = useRouter();

  const handleClick = useCallback(() => {
    router.push("#");
  }, [router]);

  return (
    <div
      id="services"
      className="h-auto w-full bg-linear-to-t from-[var(--light-blue)] to-white"
    >
      <Container className="md:space-y-20 space-y-10 md:py-20 py-10">
        <h2 className="md:text-4xl text-3xl font-black tracking-wide">
          Co mogę Ci zaproponować?
        </h2>
        <div className="flex md:flex-row flex-col items-center md:gap-10 gap-5">
          <div className="md:w-3/5 w-full md:px-10 px-5">
            <div className="md:p-15 p-5 rounded-xl md:text-xl text-base font-medium tracking-wider leading-6 customShadow flex flex-col md:space-y-10 space-y-5 items-center bg-white">
              <h4 className="md:text-2xl text-xl font-bold tracking-wide">
                Indywidualne korepetycje online
              </h4>
              <ul className="space-y-5">
                <ServiceItem
                  title="Skuteczne przygotowanie do matury"
                  description="omówienie zagadnień, analiza arkuszy, strategie egzaminacyjne"
                />
                <ServiceItem
                  title="Oszczędność czasu na dojazdy"
                  description="zajęcia prowadzone online na platformach Google Meet i MS OneNote"
                />
                <ServiceItem
                  title="Indywidualne podejście"
                  description="dostosowanie tempa i metod nauczania do ucznia"
                />
                <ServiceItem
                  title="Sprawdzone metody"
                  description="moi uczniowie regularnie osiągają wysokie wyniki na maturze"
                />
                <ServiceItem
                  title="Przystępna cena"
                  description="Od 100 zł za 60 min lekcji"
                />
              </ul>
              <Button onClick={handleClick} className="w-[200px]">
                UMÓW SIĘ!
              </Button>
            </div>
          </div>
          <div className="md:w-2/5 w-full">
            <Image
              src="/pwil0313g.jpg"
              alt="Grzegorz Natanek"
              width={400}
              height={400}
              className="shadow"
            />
          </div>
        </div>
      </Container>
    </div>
  );
}

function ServiceItem({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <li className="flex items-start md:gap-5 gap-3">
      <span
        aria-hidden
        className="grow-0 shrink-0 inline-block w-[15px] h-[15px] mt-2 bg-[url('/globe-icon.svg')] bg-cover bg-no-repeat "
      />
      <p className="grow text-left">
        <b>{title}</b> – {description}
      </p>
    </li>
  );
}
