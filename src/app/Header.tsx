"use client";
import { useMemo } from "react";
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

  const { isSignedIn } = useAuthProviderContext();
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const isMainPage = useMemo(() => pathname === "/", [pathname]);
  const isAuthPage = useMemo(() => pathname.includes("/auth"), [pathname]);

  const RightSideIcon = useMemo(() => {
    if (isSignedIn) {
      return <LogoutButton />;
    }
    if (!isAuthPage && !isMobile) {
      return <LoginButton />;
    }
    if (isAuthPage) {
      return <div></div>;
    }
    if (isMobile) {
      return <MobileNavigation />;
    }
    return <div></div>;
  }, [isSignedIn, isAuthPage]);

  return (
    <header className="w-full px-5 md:px-12 py-6 flex flex-row justify-between items-center sticky top-0 bg-white z-20 shadow-md">
      <Logo isSignedIn={isSignedIn} isMobile={isMobile} />
      {!isMobile && (!isMainPage ? <WebsiteTitle /> : <Navigation />)}
      {RightSideIcon}
    </header>
  );
}
