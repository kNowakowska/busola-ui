import Container from "@/lib/components/website/Container";
import EmailIcon from "@/lib/icons/EmailIcon";
import FacebookIcon from "@/lib/icons/FacebookIcon";
import InstagramIcon from "@/lib/icons/InstagramIcon";
import PhoneIcon from "@/lib/icons/PhoneIcon";

const CONTACT_ITEMS = [
  {
    icon: <PhoneIcon size={30} />,
    href: "tel:508808422",
    text: "508 808 422",
  },
  {
    icon: <EmailIcon size={30} />,
    href: "mailto:korkizgegry.krakow@gmail.com",
    text: "korkizgegry.krakow@gmail.com",
  },
  {
    icon: <FacebookIcon size={30} />,
    href: "https://www.facebook.com/busolakorepetycja",
    text: "Busola Facebook",
  },
  {
    icon: <InstagramIcon size={30} />,
    href: "https://www.instagram.com/busolakorepetycja",
    text: "Busola Instagram",
  },
];

export default function Contact() {
  return (
    <div className="h-auto w-full">
      <Container className="space-y-20 py-20">
        <h2 className="text-4xl font-black tracking-wide">Kontakt</h2>
        <div className="flex flex-row items-center gap-5">
          <div className="w-1/2">
            <div className="p-15 rounded-xl text-xl font-medium tracking-wider leading-8 customShadow flex flex-col space-y-10 items-center bg-linear-to-br from-[var(--light-blue)] to-white">
              <ul className="space-y-5">
                {CONTACT_ITEMS.map((item) => (
                  <ContactItem key={item.text} {...item} />
                ))}
              </ul>
            </div>
          </div>
          <div className="w-1/2">
            <p className="p-15 text-xl font-medium tracking-wider leading-8">
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
    <li className="group hover:cursor-pointer transition-transform duration-150 hover:scale-105">
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
