import { shopUrl } from "@/lib/config/features";

export default function Navigation() {
  return (
    <nav className="items-center space-x-8 md:flex">
      <a
        href="#about-me"
        className="hover:pointer hoverScaleSmall text-lg font-normal hover:font-bold"
      >
        O mnie
      </a>
      <a
        href="#services"
        className="hover:pointer hoverScaleSmall text-lg font-normal hover:font-bold"
      >
        Oferta
      </a>
      <a
        href="#testimony"
        className="hover:pointer hoverScaleSmall text-lg font-normal hover:font-bold"
      >
        Opinie
      </a>
      <a
        href="#contact"
        className="hover:pointer hoverScaleSmall text-lg font-normal hover:font-bold"
      >
        Kontakt
      </a>
      {shopUrl && (
        <a
          href={shopUrl}
          className="hover:pointer hoverScaleSmall text-lg font-normal hover:font-bold"
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
