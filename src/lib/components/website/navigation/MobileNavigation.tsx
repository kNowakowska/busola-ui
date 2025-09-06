"use client";
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
        className={`w-screen h-screen bg-white flex flex-col items-center pt-30 space-y-5 absolute top-0 left-0 ${
          isOpen ? "block" : "hidden"
        } `}
      >
        <button
          onClick={handleCloseMenu}
          className="icon absolute top-10 right-10"
        >
          <CloseIcon size={30} />
        </button>
        <a href="#about-me" className="text-base" onClick={handleCloseMenu}>
          O mnie
        </a>

        <a href="#services" className="text-base" onClick={handleCloseMenu}>
          Oferta
        </a>

        <a href="#testimony" className="text-base" onClick={handleCloseMenu}>
          Opinie
        </a>

        <a href="#contact" className="text-base" onClick={handleCloseMenu}>
          Kontakt
        </a>

        {/* <a href="#blog" className="text-base">
          Blog
        </a> */}
        <a
          href={Routes.signIn()}
          className="text-base"
          // onClick={handleCloseMenu}
        >
          Zaloguj się
        </a>
      </nav>
    </>
  );
}
