import Logo from "@/lib/components/Logo";
import EmailIcon from "@/lib/icons/EmailIcon";
import FacebookIcon from "@/lib/icons/FacebookIcon";
import InstagramIcon from "@/lib/icons/InstagramIcon";
import PhoneIcon from "@/lib/icons/PhoneIcon";
import { shopUrl } from "@/lib/config/features";

const links = [
  { label: "O mnie", href: "/#about-me" },
  { label: "Oferta", href: "/#services" },
  { label: "Kurs maturalny", href: "/#matura-course" },
  { label: "Opinie", href: "/#testimony" },
  { label: "Kontakt", href: "/#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#ece4dc] bg-white py-12">
      <div className="container-shell grid gap-10 text-left md:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-5 max-w-[280px] text-xs leading-6 text-[#77818a]">
            Indywidualne korepetycje z geografii i przygotowanie do matury —
            online.
          </p>
        </div>
        <div>
          <h2 className="text-[0.7rem] font-bold tracking-[0.18em] text-[#24364a] uppercase">
            Kontakt
          </h2>
          <ul className="mt-4 space-y-3 text-xs text-[#687381]">
            <li>
              <a
                href="tel:508808422"
                className="flex items-center gap-2 hover:text-[var(--dark-beige)]"
              >
                <PhoneIcon size={14} /> 508 808 422
              </a>
            </li>
            <li>
              <a
                href="mailto:geografia@kierunekmatura.com"
                className="flex items-center gap-2 hover:text-[var(--dark-beige)]"
              >
                <EmailIcon size={14} /> geografia@kierunekmatura.com
              </a>
            </li>
            <li>Online (Google Meet)</li>
            <li>NIP: 1234567890</li>
          </ul>
        </div>
        <div>
          <h2 className="text-[0.7rem] font-bold tracking-[0.18em] text-[#24364a] uppercase">
            Szybkie linki
          </h2>
          <ul className="mt-4 space-y-2 text-xs text-[#687381]">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="transition hover:text-[var(--dark-beige)]"
                >
                  {link.label}
                </a>
              </li>
            ))}
            {shopUrl && (
              <li>
                <a
                  href={shopUrl}
                  className="transition hover:text-[var(--dark-beige)]"
                >
                  Sklep
                </a>
              </li>
            )}
          </ul>
        </div>
        <div>
          <h2 className="text-[0.7rem] font-bold tracking-[0.18em] text-[#24364a] uppercase">
            O firmie
          </h2>
          <p className="mt-4 text-xs leading-6 text-[#687381]">
            Busola Korepetycje z geografii to indywidualne podejście, skuteczne
            metody i pasja do nauczania.
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href="https://www.facebook.com/kierunekmatura.geografia"
              aria-label="Facebook"
            >
              <FacebookIcon size={18} fill="var(--dark-beige)" />
            </a>
            <a
              href="https://www.instagram.com/kierunekmatura_geografia/"
              aria-label="Instagram"
            >
              <InstagramIcon size={18} fill="var(--dark-beige)" />
            </a>
          </div>
        </div>
      </div>
      <div className="container-shell mt-10 flex flex-col justify-between gap-3 border-t border-[#ece4dc] pt-6 text-xs text-[#899198] sm:flex-row">
        <p>
          © 2026 Busola Korepetycje z geografii. Wszelkie prawa zastrzeżone.
        </p>
        <a href="#" className="hover:text-[var(--dark-beige)]">
          Polityka prywatności
        </a>
      </div>
    </footer>
  );
}
