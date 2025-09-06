import Image from "next/image";

import Container from "@/lib/components/website/Container";

export default function AboutMe() {
  return (
    <div className="h-auto w-full">
      <Container className="space-y-20 py-20">
        <h2 className="text-4xl font-black tracking-wide">Kim jestem?</h2>
        <div className="flex flex-row items-center gap-5">
          <div className="w-2/5">
            <Image
              src="/pwil0171gs.jpg"
              alt="Grzegorz Natanek"
              width={400}
              height={400}
              className="shadow"
            />
          </div>
          <div className="w-3/5 ">
            <p className="bg-[var(--dark-beige)] p-15 rounded-xl whiteText text-xl font-medium tracking-wider leading-8 customShadow">
              Cześć! Nazywam się Grzegorz Natanek i od ponad 10 lat pomagam
              uczniom osiągać sukcesy w nauce geografii. Ukończyłem Uniwersytet
              Komisji Edukacji Narodowej, a jako egzaminator maturalny z
              geografii doskonale wiem, na co zwracają uwagę sprawdzający matury
              i jak najlepiej przygotować się do egzaminu.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
