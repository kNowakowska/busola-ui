"use client";
import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { useMediaQuery } from "react-responsive";

import { useAuthContext } from "@/lib/providers/AuthProvider";
import { isLoginEnabled } from "@/lib/config/features";

import Logo from "@/lib/components/Logo";
import WebsiteTitle from "@/lib/components/website/WebsiteTitle";
import LoginButton from "@/lib/components/website/LoginButton";
import LogoutButton from "@/lib/components/website/LogoutButton";
import Navigation from "@/lib/components/website/navigation/Navigation";
import MobileNavigation from "@/lib/components/website/navigation/MobileNavigation";
import ChatButton from "@/lib/components/buttons/ChatButton";

export default function Header() {
  const pathname = usePathname();

  const [isScrolled, setIsScrolled] = useState(false);

  const { isSignedIn } = useAuthContext();
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const isMainPage = useMemo(() => pathname === "/", [pathname]);
  const isAuthPage = useMemo(() => pathname.includes("/auth"), [pathname]);

  const RightSideIcon = useMemo(() => {
    if (isAuthPage) {
      return <div></div>;
    }
    if (isMobile && isMainPage) {
      return <MobileNavigation isLoginEnabled={isLoginEnabled} />;
    }
    if (isMainPage) {
      return isLoginEnabled ? <LoginButton /> : <div></div>;
    }
    if (isSignedIn) {
      return (
        <div className="flex flex-row items-center gap-0 md:gap-6">
          <ChatButton />
          <LogoutButton />
        </div>
      );
    }

    return isLoginEnabled ? <LoginButton /> : <div></div>;
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
      className={`sticky top-0 z-20 flex w-full flex-row items-center justify-between bg-white px-5 py-6 md:px-12 ${
        isScrolled ? "shadow-md" : ""
      }`}
    >
      <Logo isMobile={isMobile} />
      {!isMainPage ? <WebsiteTitle /> : !isMobile ? <Navigation /> : undefined}
      {RightSideIcon}
    </header>
  );
}
