"use client";
import { useMediaQuery } from "react-responsive";

import Container from "@/lib/components/website/Container";
import EmailIcon from "@/lib/icons/EmailIcon";
import FacebookIcon from "@/lib/icons/FacebookIcon";
import InstagramIcon from "@/lib/icons/InstagramIcon";
import PhoneIcon from "@/lib/icons/PhoneIcon";

import ContactForm from "./ContactForm";

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
    <div id="contact" className="mb-10 h-auto w-full">
      <Container className="space-y-5 py-5 md:space-y-10 md:py-20">
        <h2 className="text-3xl font-black tracking-wide md:text-4xl">
          Kontakt
        </h2>
        <div className="mb-0 w-full">
          <p className="p-5 text-base leading-6 font-medium tracking-wider md:text-xl">
            <b>Masz pytania lub chcesz umówić się na korepetycje?</b>
            <br />
            Napisz do mnie – chętnie pomogę i wspólnie zaplanujemy Twoją drogę
            do sukcesu na maturze! <br /> <br />
            Możesz również skorzystać z formularza poniżej.
          </p>
        </div>
        <div className="flex flex-col items-center gap-3 md:flex-row md:gap-5">
          <div className="order-1 w-full md:w-1/2 md:-translate-y-15">
            <div className="customShadow flex flex-col items-center space-y-5 rounded-xl bg-linear-to-br from-[var(--light-blue)] to-white p-10 text-base leading-6 font-medium tracking-wider md:space-y-10 md:p-15 md:text-xl">
              <ul className="space-y-5">
                {CONTACT_ITEMS(isMobile).map((item) => (
                  <ContactItem key={item.text} {...item} />
                ))}
              </ul>
            </div>
          </div>
          <div className="order-2 w-full p-5 md:w-1/2 md:p-10">
            <ContactForm />
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
    <li className="group text-sm transition-transform duration-150 hover:scale-105 hover:cursor-pointer md:text-base">
      <a href={href} className="flex flex-row items-center gap-5">
        <span className="inline-block">{icon}</span>
        <span className="inline-grid">
          <span
            aria-hidden
            className="col-start-1 row-start-1 font-bold opacity-0"
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
