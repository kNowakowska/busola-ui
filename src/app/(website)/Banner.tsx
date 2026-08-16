import Image from "next/image";

const steps = [
  ["▹", "Online", "Google Meet i cyfrowe notatki."],
  ["◷", "Elastycznie", "Tempo dopasowane do ucznia."],
  ["✦", "Praktycznie", "Dużo map, wykresów i zadań."],
  ["◎", "Do celu", "Praca pod konkretny wynik."],
];

export default function Banner() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container-shell grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div className="text-left">
          <p className="section-kicker">Jak pracujemy</p>
          <h2 className="mt-3 max-w-[560px] font-serif text-4xl leading-[1.08] font-semibold text-[var(--dark-blue)] sm:text-5xl">
            Jasny plan zamiast przypadkowych powtórek.
          </h2>
          <p className="mt-6 max-w-[560px] text-sm leading-7 text-[#697582]">
            Najpierw ustalamy cel i poziom. Potem pracujemy na konkretnych
            zadaniach, wracając tylko do tych elementów teorii, które naprawdę
            są potrzebne.
          </p>
          <div className="mt-9 grid gap-5 sm:grid-cols-2">
            {steps.map(([symbol, title, text]) => (
              <div
                key={title}
                className="flex gap-4 rounded-lg border border-[var(--line)] p-5"
              >
                <span
                  aria-hidden="true"
                  className="mt-0.5 text-xl text-[var(--dark-beige)]"
                >
                  {symbol}
                </span>
                <div>
                  <h3 className="font-semibold text-[#24364a]">{title}</h3>
                  <p className="mt-1 text-xs leading-5 text-[#77818a]">
                    {text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative min-h-[430px] overflow-hidden rounded-[1.25rem] bg-[var(--dark-blue)] sm:min-h-[530px]">
          <Image
            src="/images/book-wide.jpg"
            alt="Lekcje geografii z książkami i mapami"
            fill
            className="object-cover object-center opacity-70"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-linear-to-t from-[var(--dark-blue)] via-[var(--dark-blue)]/10 to-transparent" />
          <div className="absolute right-8 bottom-8 left-8 rounded-xl border border-white/15 bg-black/20 p-6 text-white backdrop-blur-md">
            <p className="text-xs font-bold tracking-[0.18em] !text-[#e1c09c] uppercase">
              Najważniejsze
            </p>
            <p className="mt-2 font-serif text-3xl font-semibold !text-white">
              Uczeń ma rozumieć, dlaczego odpowiedź jest poprawna.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
