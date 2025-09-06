import Image from "next/image";

import Container from "@/lib/components/website/Container";

export default function AboutMe() {
  return (
    <div id="about-me" className="h-auto w-full">
      <Container className="md:space-y-20 space-y-10 md:py-20 py-10">
        <h2 className="md:text-4xl text-3xl font-black tracking-wide">
          Kim jestem?
        </h2>
        <div className="flex md:flex-row flex-col items-center gap-5">
          <div className="md:w-2/5 w-full">
            <Image
              src="/pwil0171gs.jpg"
              alt="Grzegorz Natanek"
              width={400}
              height={400}
              className="shadow"
            />
          </div>
          <div className="md:w-3/5 w-full">
            <p className="bg-[var(--dark-beige)] md:p-15 p-10 rounded-xl whiteText md:text-xl text-base font-medium tracking-wider leading-6 customShadow">
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
