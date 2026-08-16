import Image from "next/image";

const features = [
  {
    symbol: "♙",
    title: "Indywidualne podejście",
    text: "Tempo i sposób pracy dopasowane do Ciebie.",
  },
  {
    symbol: "◎",
    title: "Skuteczna metoda",
    text: "Zrozumienie zamiast nauki odpowiedzi na pamięć.",
  },
  {
    symbol: "↗",
    title: "Lepsze wyniki",
    text: "Przygotowanie do matury bez stresu.",
  },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden border-b border-[var(--line)] bg-[linear-gradient(110deg,#fff_0%,#fff_56%,#fbf8f3_56%,#fbf8f3_100%)]"
    >
      <div className="pointer-events-none absolute top-[-210px] right-[-120px] size-[620px] rounded-full border border-[var(--dark-beige)]/10" />
      <div className="pointer-events-none absolute top-[90px] right-[40px] size-[360px] rounded-full border border-[var(--dark-beige)]/10" />
      <div className="container-shell grid min-h-[710px] items-center gap-10 py-16 lg:grid-cols-[0.93fr_1.07fr] lg:py-0">
        <div className="relative z-10 max-w-[600px] text-left">
          <p className="section-kicker mb-5">Korepetycje z geografii online</p>
          <h1 className="font-serif text-6xl leading-[0.98] font-semibold tracking-[-0.03em] text-[var(--dark-blue)] sm:text-7xl lg:text-[6rem]">
            Grzegorz <br />
            Natanek
          </h1>
          <p className="mt-7 max-w-[520px] text-base leading-8 text-[#4f5e6d] sm:text-lg">
            Indywidualne korepetycje online oraz kurs przygotowujący do matury —
            bez chaosu i bez uczenia się na pamięć.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#services" className="button-primary">
              Zobacz ofertę <span aria-hidden="true">→</span>
            </a>
            <a href="#contact" className="button-secondary">
              Napisz do mnie
            </a>
          </div>
          <div className="mt-14 grid max-w-[650px] gap-7 sm:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.title}>
                <span
                  aria-hidden="true"
                  className="mb-4 block text-2xl leading-none text-[#a66f3d]"
                >
                  {feature.symbol}
                </span>
                <h2 className="text-sm font-bold text-[#24364a]">
                  {feature.title}
                </h2>
                <p className="mt-2 text-xs leading-5 text-[#697582]">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative h-[520px] lg:h-[670px]">
          <div className="absolute bottom-0 left-1/2 h-[86%] w-[92%] -translate-x-1/2 rounded-t-[260px] bg-[#f4ede5]" />
          <div className="absolute bottom-[6%] left-[4%] h-[20%] w-[86%] bg-[var(--dark-beige)]/10" />
          <Image
            src="/images/hero-book.png"
            alt="Grzegorz Natanek z książką o geografii"
            fill
            priority
            className="relative z-10 object-contain object-bottom"
            sizes="(max-width: 1024px) 100vw, 52vw"
          />
        </div>
      </div>
    </section>
  );
}
