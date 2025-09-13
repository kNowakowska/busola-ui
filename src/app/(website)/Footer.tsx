"use client";

import { useMediaQuery } from "react-responsive";

import Logo from "@/lib/components/Logo";
import EmailIcon from "@/lib/icons/EmailIcon";
import FacebookIcon from "@/lib/icons/FacebookIcon";
import InstagramIcon from "@/lib/icons/InstagramIcon";

export default function Footer() {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  return (
    <div className="h-[10vh] w-full flex flex-col items-center justify-center py-30 space-y-10 mb-20">
      <Logo isMobile={false} />
      <div className="flex flex-row space-x-5 items-center justify-center">
        <div>
          <a href="https://www.facebook.com/busolakorepetycja">
            <FacebookIcon size={isMobile ? 20 : 30} />
          </a>
        </div>
        <div>
          <a href="https://www.instagram.com/busolakorepetycja">
            <InstagramIcon size={isMobile ? 20 : 30} />
          </a>
        </div>
        <div>
          <a href="mailto:korkizgegry.krakow@gmail.com">
            <EmailIcon size={isMobile ? 20 : 30} />
          </a>
        </div>
      </div>
    </div>
  );
}
