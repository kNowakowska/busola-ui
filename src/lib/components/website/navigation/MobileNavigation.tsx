import { useCallback, useState } from "react";
import { useMediaQuery } from "react-responsive";

import CloseIcon from "@/lib/icons/CloseIcon";
import { Routes } from "@/lib/routes/routes";

import MobileMenuButton from "../MobileMenuButton";

export default function MobileNavigation() {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenMenu = useCallback(() => {
    setIsOpen(true);
  }, []);

  const handleCloseMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  if (!isMobile) {
    return null;
  }

  return (
    <>
      <MobileMenuButton onClick={handleOpenMenu} />
      <nav
        className={`w-[100vw] h-[100vh] bg-white flex flex-col items-center pt-30 space-y-5 absolute top-0 left-0 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <button onClick={handleCloseMenu} className="absolute top-10 right-10">
          <CloseIcon size={30} />
        </button>
        <a href="#" className="text-xl">
          O mnie
        </a>

        <a href="#" className="text-xl">
          Oferta
        </a>

        <a href="#" className="text-xl">
          Opinie
        </a>

        <a href="#" className="text-xl">
          Kontakt
        </a>

        <a href="#" className="text-xl">
          Blog
        </a>
        <a href={Routes.signIn()} className="text-xl">
          Zaloguj się
        </a>
      </nav>
    </>
  );
}
