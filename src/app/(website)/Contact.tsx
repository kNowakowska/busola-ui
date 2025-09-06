"use client";
import { useMediaQuery } from "react-responsive";

import Container from "@/lib/components/website/Container";
import EmailIcon from "@/lib/icons/EmailIcon";
import FacebookIcon from "@/lib/icons/FacebookIcon";
import InstagramIcon from "@/lib/icons/InstagramIcon";
import PhoneIcon from "@/lib/icons/PhoneIcon";

const CONTACT_ITEMS = (isMobile: boolean) => [
  {
    icon: <PhoneIcon size={isMobile ? 20 : 30} />,
    href: "tel:508808422",
    text: "508 808 422",
  },
  {
    icon: <EmailIcon size={isMobile ? 20 : 30} />,
    href: "mailto:korkizgegry.krakow@gmail.com",
    text: "korkizgegry.krakow@gmail.com",
  },
  {
    icon: <FacebookIcon size={isMobile ? 20 : 30} />,
    href: "https://www.facebook.com/busolakorepetycja",
    text: "Busola Facebook",
  },
  {
    icon: <InstagramIcon size={isMobile ? 20 : 30} />,
    href: "https://www.instagram.com/busolakorepetycja",
    text: "Busola Instagram",
  },
];

export default function Contact() {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  return (
    <div id="contact" className="h-auto w-full">
      <Container className="md:space-y-20 space-y-5 md:py-20 py-5">
        <h2 className="md:text-4xl text-3xl font-black tracking-wide">
          Kontakt
        </h2>
        <div className="flex md:flex-row flex-col items-center gap-5">
          <div className="md:w-1/2 w-full md:order-1 order-2">
            <div className="md:p-15 p-10 rounded-xl md:text-xl text-base font-medium tracking-wider leading-6 customShadow flex flex-col md:space-y-10 space-y-5 items-center bg-linear-to-br from-[var(--light-blue)] to-white ">
              <ul className="space-y-5">
                {CONTACT_ITEMS(isMobile).map((item) => (
                  <ContactItem key={item.text} {...item} />
                ))}
              </ul>
            </div>
          </div>
          <div className="md:w-1/2 w-full md:order-2 order-1">
            <p className="md:p-15 p-10 md:text-xl text-base font-medium tracking-wider leading-6">
              <b>Masz pytania lub chcesz umówić się na korepetycje?</b>
              <br />
              Napisz do mnie – chętnie pomogę i wspólnie zaplanujemy Twoją drogę
              do sukcesu na maturze!
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}

function ContactItem({
  icon,
  href,
  text,
}: {
  icon: React.ReactNode;
  href: string;
  text: string;
}) {
  return (
    <li className="group hover:cursor-pointer transition-transform duration-150 hover:scale-105 md:text-base text-sm">
      <a href={href} className="flex flex-row items-center gap-5">
        <span className="inline-block">{icon}</span>
        <span className="inline-grid">
          <span
            aria-hidden
            className="font-bold opacity-0 col-start-1 row-start-1"
          >
            {text}
          </span>
          <span className="col-start-1 row-start-1 group-hover:font-bold">
            {text}
          </span>
        </span>
      </a>
    </li>
  );
}
