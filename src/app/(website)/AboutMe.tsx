import Image from "next/image";

const highlights = [
  { value: "10+", label: "lat doświadczenia" },
  { value: "100+", label: "kursantów" },
  { value: "72%", label: "średni wynik uczniów na maturze" },
];

export default function AboutMe() {
  return (
    <section id="about-me" className="py-24 sm:py-32">
      <div className="container-shell grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
        <div className="relative mx-auto w-full max-w-[480px]">
          <div className="absolute -bottom-5 -left-5 h-[32%] w-[58%] bg-[var(--dark-beige)]" />
          <div className="absolute top-12 -left-10 grid grid-cols-4 gap-2 opacity-50">
            {Array.from({ length: 24 }).map((_, index) => (
              <span
                key={index}
                className="size-1 rounded-full bg-[var(--dark-beige)]"
              />
            ))}
          </div>
          <div className="relative aspect-[4/5] overflow-hidden bg-[var(--dark-blue)]">
            <Image
              src="/images/about-chair.jpg"
              alt="Grzegorz Natanek — nauczyciel geografii"
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 90vw, 40vw"
            />
          </div>
        </div>
        <div className="max-w-[610px] text-left">
          <p className="section-kicker">O mnie</p>
          <h2 className="mt-3 font-serif text-4xl leading-[1.05] font-semibold text-[var(--dark-blue)] sm:text-5xl">
            Nauczanie to moja pasja.
          </h2>
          <div className="mt-5 h-px w-10 bg-[var(--dark-beige)]" />
          <div className="mt-8 space-y-5 text-[0.98rem] leading-7 text-[#5c6875]">
            <p>
              Cześć! Nazywam się Grzegorz Natanek i od ponad 10 lat pomagam
              uczniom osiągać sukcesy w nauce geografii.
            </p>
            <p>
              Ukończyłem Uniwersytet Komisji Edukacji Narodowej, a jako
              egzaminator maturalny z geografii wiem, na co zwracają uwagę
              sprawdzający i jak najlepiej przygotować się do egzaminu.
            </p>
            <p>
              Stawiam na zrozumienie, logiczne myślenie i praktyczne przykłady,
              które zostają w głowie na dłużej.
            </p>
          </div>
          <div className="mt-8 grid grid-cols-3 gap-4">
            {highlights.map((highlight) => (
              <div
                key={highlight.value}
                className="border-l border-[#e2d7cb] pl-4"
              >
                <div className="font-serif text-3xl font-semibold text-[var(--dark-blue)]">
                  {highlight.value}
                </div>
                <div className="mt-1 text-xs text-[#697582]">
                  {highlight.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
