import { shopUrl } from "@/lib/config/features";

export default function Navigation() {
  return (
    <nav
      className="hidden items-center gap-7 lg:flex"
      aria-label="Główna nawigacja"
    >
      <a
        href="#about-me"
        className="text-sm font-semibold text-[#24364a] transition hover:text-[var(--dark-beige)]"
      >
        O mnie
      </a>
      <a
        href="#services"
        className="text-sm font-semibold text-[#24364a] transition hover:text-[var(--dark-beige)]"
      >
        Oferta
      </a>
      <a
        href="#matura-course"
        className="text-sm font-semibold text-[#24364a] transition hover:text-[var(--dark-beige)]"
      >
        Kurs maturalny
      </a>
      <a
        href="#testimony"
        className="text-sm font-semibold text-[#24364a] transition hover:text-[var(--dark-beige)]"
      >
        Opinie
      </a>
      <a
        href="#contact"
        className="text-sm font-semibold text-[#24364a] transition hover:text-[var(--dark-beige)]"
      >
        Kontakt
      </a>
      {shopUrl && (
        <a
          href={shopUrl}
          className="text-sm font-semibold text-[#24364a] transition hover:text-[var(--dark-beige)]"
        >
          Sklep
        </a>
      )}
      {/* <a
        href="#blog"
        className="text-lg font-normal hover:font-bold hover:pointer duration-300 ease-out transition-transform  hover:scale-105"
      >
        Blog
      </a> */}
    </nav>
  );
}
