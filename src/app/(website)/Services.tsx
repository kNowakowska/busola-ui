import { shopUrl } from "@/lib/config/features";

const tutoring = [
  "Zajęcia online 1:1",
  "Przygotowanie do matury i sprawdzianów",
  "Analiza arkuszy i strategii egzaminacyjnych",
  "Google Meet + MS OneNote",
  "Od 100 zł / 60 minut",
];

const course = [
  "Uporządkowany plan przygotowań",
  "Najważniejsze działy wymagane na maturze",
  "Mapy, schematy i zadania maturalne",
  "Strategie rozwiązywania zadań",
  "Materiały do samodzielnej powtórki",
];

function OfferCard({
  id,
  dark = false,
  icon,
  label,
  title,
  description,
  items,
  action,
  href,
}: {
  id?: string;
  dark?: boolean;
  icon: string;
  label: string;
  title: string;
  description: string;
  items: string[];
  action: string;
  href: string;
}) {
  return (
    <article
      id={id}
      className={`group relative overflow-hidden rounded-xl border p-7 shadow-[0_20px_70px_rgba(31,41,55,.04)] sm:p-9 ${
        dark
          ? "border-[var(--dark-blue)] bg-[var(--dark-blue)] text-white shadow-[0_20px_70px_rgba(16,42,69,.13)]"
          : "border-[var(--line)] bg-white"
      }`}
    >
      {dark && (
        <>
          <div className="absolute -top-16 -right-16 size-52 rounded-full border border-white/10" />
          <div className="absolute top-6 -right-4 size-32 rounded-full border border-white/10" />
        </>
      )}
      <div className="relative flex items-start justify-between gap-4">
        <span
          aria-hidden="true"
          className={`grid size-16 place-items-center rounded-full text-3xl ${
            dark
              ? "bg-white/10 text-[#d9b992]"
              : "bg-[var(--cream-strong)] text-[#9b673b]"
          }`}
        >
          {icon}
        </span>
        <span
          className={`rounded-full px-3 py-1 text-[0.7rem] font-bold tracking-[0.16em] uppercase ${
            dark
              ? "border border-white/15 bg-white/5 text-[#e5c9aa]"
              : "bg-[var(--cream)] text-[var(--dark-beige)]"
          }`}
        >
          {label}
        </span>
      </div>
      <h3
        className={`relative mt-7 font-serif text-3xl font-semibold ${
          dark ? "!text-white" : "text-[var(--dark-blue)]"
        }`}
      >
        {title}
      </h3>
      <p
        className={`relative mt-3 text-sm leading-6 ${dark ? "!text-white/70" : "text-[#697582]"}`}
      >
        {description}
      </p>
      <ul className="relative mt-7 space-y-3">
        {items.map((item) => (
          <li
            key={item}
            className={`flex gap-3 text-sm ${dark ? "text-white/90" : "text-[#3d4c5b]"}`}
          >
            <span className={dark ? "text-[#d9b992]" : "text-[#a66f3d]"}>
              ✓
            </span>
            {item}
          </li>
        ))}
      </ul>
      <a
        href={href}
        className={`relative mt-8 inline-flex items-center gap-2 text-sm font-bold ${
          dark ? "text-[#e5c9aa]" : "text-[var(--dark-beige)]"
        }`}
      >
        {action}{" "}
        <span
          aria-hidden="true"
          className="transition group-hover:translate-x-1"
        >
          →
        </span>
      </a>
    </article>
  );
}

export default function Services() {
  return (
    <section id="services" className="bg-[var(--cream)] py-24 sm:py-32">
      <div className="container-shell">
        <div className="text-center">
          <p className="section-kicker">Oferta</p>
          <h2 className="mt-3 font-serif text-4xl font-semibold text-[var(--dark-blue)] sm:text-5xl">
            Jak mogę Ci pomóc?
          </h2>
          <div className="mx-auto mt-5 h-px w-10 bg-[var(--dark-beige)]" />
          <p className="mx-auto mt-6 max-w-[650px] text-sm leading-7 text-[#697582]">
            Dwie ścieżki, jeden cel: uporządkować materiał, zbudować pewność
            siebie i przygotować się do egzaminu bez niepotrzebnego stresu.
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-[1000px] gap-6 lg:grid-cols-2">
          <OfferCard
            icon="♙"
            label="1:1 online"
            title="Korepetycje indywidualne"
            description="Najlepszy wybór, jeśli potrzebujesz regularnej pracy dopasowanej dokładnie do Twojego poziomu i celu."
            items={tutoring}
            action="Umów pierwsze zajęcia"
            href="#contact"
          />
          <OfferCard
            id="matura-course"
            dark
            icon="⌑"
            label="Matura"
            title="Kurs maturalny"
            description="Kompleksowe przygotowanie dla uczniów, którzy chcą przejść przez materiał w uporządkowany sposób i dobrze wykorzystać czas do matury."
            items={course}
            action={shopUrl ? "Przejdź do kursu" : "Zapytaj o kurs"}
            href={shopUrl || "#contact"}
          />
        </div>
      </div>
    </section>
  );
}
