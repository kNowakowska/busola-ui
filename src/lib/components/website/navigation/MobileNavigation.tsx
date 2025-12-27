"use client";
import { useCallback, useState } from "react";
import { useMediaQuery } from "react-responsive";

import { useAuthContext } from "@/lib/providers/AuthProvider";
import CloseIcon from "@/lib/icons/CloseIcon";
import { Routes } from "@/lib/routes/routes";

import MobileMenuButton from "../MobileMenuButton";

export default function MobileNavigation() {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const { isSignedIn } = useAuthContext();
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
        className={`absolute top-0 left-0 flex h-screen w-screen flex-col items-center space-y-5 bg-white pt-30 ${
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

        <a
          href={isSignedIn ? Routes.dashboard() : Routes.signIn()}
          className="text-base"
        >
          {isSignedIn ? "Twoje kursy" : "Zaloguj się"}
        </a>
      </nav>
    </>
  );
}
