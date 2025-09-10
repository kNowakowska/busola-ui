"use client";
import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { useMediaQuery } from "react-responsive";

import { useAuthProviderContext } from "@/lib/providers/AuthProvider";

import Logo from "@/lib/components/Logo";
import WebsiteTitle from "@/lib/components/website/WebsiteTitle";
import LoginButton from "@/lib/components/website/LoginButton";
import LogoutButton from "@/lib/components/website/LogoutButton";
import Navigation from "@/lib/components/website/navigation/Navigation";
import MobileNavigation from "@/lib/components/website/navigation/MobileNavigation";

export default function Header() {
  const pathname = usePathname();

  const [isScrolled, setIsScrolled] = useState(false);

  const { isSignedIn } = useAuthProviderContext();
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const isMainPage = useMemo(() => pathname === "/", [pathname]);
  const isAuthPage = useMemo(() => pathname.includes("/auth"), [pathname]);

  const RightSideIcon = useMemo(() => {
    if (isAuthPage) {
      return <div></div>;
    }
    if (isMobile && isMainPage) {
      return <MobileNavigation />;
    }
    if (isMainPage) {
      return <LoginButton />;
    }
    if (isSignedIn) {
      return <LogoutButton />;
    }

    return <LoginButton />;
  }, [isSignedIn, isAuthPage, isMobile, isMainPage]);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 0);
    }
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`w-full px-5 md:px-12 py-6 flex flex-row justify-between items-center sticky top-0 bg-white z-20  ${
        isScrolled ? "shadow-md" : ""
      }`}
    >
      <Logo isMobile={isMobile} />
      {!isMainPage ? <WebsiteTitle /> : !isMobile ? <Navigation /> : undefined}
      {RightSideIcon}
    </header>
  );
}
