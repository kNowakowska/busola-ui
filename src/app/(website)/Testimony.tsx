const testimonials = [
  {
    quote:
      "Pan Grzegorz przygotował mnie do matury z geografii bardzo dobrze. Osobę, która nic nie umiała, wyprowadził na top 30% zdających w Polsce (48%). Mocno polecam naukę z Panem Grzegorzem, czyni cuda :)",
    name: "XYZ Vides",
    meta: "5/5 · miesiąc temu",
  },
  {
    quote:
      "Pan Grzegorz dał poznać się jako świetny nauczyciel i człowiek znający maturę od podszewki! Bardzo dobrze współpracuje z uczniami i jest w pełni profesjonalny :) Polecam każdemu maturzyście!",
    name: "Kuba Sus",
    meta: "5/5 · miesiąc temu",
  },
  {
    quote:
      "Kompleksowe, profesjonalne przygotowanie do matury z geografii w przyjemnej atmosferze.",
    name: "Anna Szymańczak",
    meta: "5/5 · 3 miesiące temu",
  },
  {
    quote:
      "Pan Grzegorz udzielił kilku lekcji mojemu synowi przed konkursem geograficznym. Dało się zauważyć indywidualne podejście, ciekawe materiały i bardzo dobry kontakt z uczniem. Mój syn, uczeń 7 klasy szkoły podstawowej, czekał na te zajęcia, bardzo mu się spodobały. Dlatego już teraz rezerwuję termin na przyszły rok szkolny.",
    name: "Joanna Szewczyk",
    meta: "5/5 · 2 miesiące temu",
  },
];

export default function Testimony() {
  return (
    <section
      id="testimony"
      className="border-y border-[var(--line)] bg-[#fcfaf7] py-24 sm:py-32"
    >
      <div className="container-shell">
        <div className="text-center">
          <p className="section-kicker">Opinie</p>
          <h2 className="mt-3 font-serif text-4xl font-semibold text-[var(--dark-blue)] sm:text-5xl">
            Co mówią uczniowie i rodzice?
          </h2>
          <div className="mx-auto mt-5 h-px w-10 bg-[var(--dark-beige)]" />
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="flex min-h-[250px] flex-col rounded-lg border border-[#e5dbd0] bg-white p-6 text-left"
            >
              <span
                aria-hidden="true"
                className="font-serif text-4xl leading-none text-[var(--dark-beige)]"
              >
                “
              </span>
              <p className="mt-5 flex-1 text-sm leading-6 text-[#3f4d5b]">
                {testimonial.quote}
              </p>
              <div className="mt-7 border-t border-[var(--line)] pt-4">
                <p className="text-sm font-bold text-[#24364a]">
                  {testimonial.name}
                </p>
                <p className="mt-1 text-xs text-[#899198]">
                  {testimonial.meta}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
