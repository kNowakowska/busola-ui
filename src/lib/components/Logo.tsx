import { Routes } from "../routes/routes";

export default function Logo({ isMobile = false }: { isMobile?: boolean }) {
  return (
    <a
      href={Routes.home()}
      aria-label="Kierunek Matura — strona główna"
      className={`inline-flex flex-col leading-none font-bold text-[var(--dark-blue)] transition-colors hover:text-[var(--dark-beige)] ${
        isMobile ? "text-base" : "text-lg lg:text-2xl"
      }`}
    >
      <span className="font-serif tracking-[0.04em]">KIERUNEK MATURA</span>
      <span className="mt-1 font-sans text-[0.52em] font-bold tracking-[0.2em]">
        · GEOGRAFIA ·
      </span>
    </a>
  );
}
