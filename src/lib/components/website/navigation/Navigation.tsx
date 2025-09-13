export default function Navigation() {
  return (
    <nav className="md:flex items-center space-x-8">
      <a
        href="#about-me"
        className="text-lg font-normal hover:font-bold hover:pointer hoverScaleSmall"
      >
        O mnie
      </a>
      <a
        href="#services"
        className="text-lg font-normal hover:font-bold hover:pointer hoverScaleSmall"
      >
        Oferta
      </a>
      <a
        href="#testimony"
        className="text-lg font-normal hover:font-bold hover:pointer hoverScaleSmall"
      >
        Opinie
      </a>
      <a
        href="#contact"
        className="text-lg font-normal hover:font-bold hover:pointer hoverScaleSmall"
      >
        Kontakt
      </a>
      {/* <a
        href="#blog"
        className="text-lg font-normal hover:font-bold hover:pointer duration-300 ease-out transition-transform  hover:scale-105"
      >
        Blog
      </a> */}
    </nav>
  );
}
