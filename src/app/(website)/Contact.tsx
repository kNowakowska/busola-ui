import EmailIcon from "@/lib/icons/EmailIcon";
import FacebookIcon from "@/lib/icons/FacebookIcon";
import InstagramIcon from "@/lib/icons/InstagramIcon";
import PhoneIcon from "@/lib/icons/PhoneIcon";

import ContactForm from "./ContactForm";

const contactItems = [
  {
    icon: <PhoneIcon size={18} fill="#dfbc94" />,
    href: "tel:508808422",
    text: "508 808 422",
  },
  {
    icon: <EmailIcon size={18} fill="#dfbc94" />,
    href: "mailto:korkizgegry.krakow@gmail.com",
    text: "korkizgegry.krakow@gmail.com",
  },
  {
    icon: <FacebookIcon size={18} fill="#dfbc94" />,
    href: "https://www.facebook.com/busolakorepetycja",
    text: "Busola Facebook",
  },
  {
    icon: <InstagramIcon size={18} fill="#dfbc94" />,
    href: "https://www.instagram.com/busolakorepetycja",
    text: "Busola Instagram",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="container-shell">
        <div className="topography overflow-hidden rounded-2xl border border-[#e4d9cd] bg-[var(--cream)]">
          <div className="grid lg:grid-cols-[0.78fr_1.22fr]">
            <div className="relative overflow-hidden bg-[var(--dark-blue)] p-8 text-left text-white sm:p-10 lg:p-12">
              <div className="absolute -top-20 -right-20 size-64 rounded-full border border-white/10" />
              <p className="section-kicker !text-[#dfbc94]">Kontakt</p>
              <h2 className="relative mt-4 font-serif text-4xl leading-[1.05] font-semibold !text-white sm:text-5xl">
                Gotowy na lepsze wyniki z geografii?
              </h2>
              <p className="relative mt-6 text-sm leading-7 !text-white/70">
                Napisz do mnie — wspólnie ustalimy, jaka forma pracy będzie
                najlepsza i od czego warto zacząć.
              </p>
              <ul className="relative mt-9 space-y-4 text-sm">
                {contactItems.map((item) => (
                  <li key={item.text}>
                    <a
                      href={item.href}
                      className="flex items-center gap-3 text-white/90 transition hover:text-white"
                    >
                      <span>{item.icon}</span>
                      {item.text}
                    </a>
                  </li>
                ))}
                <li className="flex items-center gap-3 text-white/90">
                  <span className="text-lg text-[#dfbc94]">⌖</span>
                  Online — Google Meet
                </li>
              </ul>
            </div>
            <div className="p-8 sm:p-10 lg:p-12">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
