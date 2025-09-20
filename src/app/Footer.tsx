"use client";

import { useMediaQuery } from "react-responsive";

import Logo from "@/lib/components/Logo";
import EmailIcon from "@/lib/icons/EmailIcon";
import FacebookIcon from "@/lib/icons/FacebookIcon";
import InstagramIcon from "@/lib/icons/InstagramIcon";

export default function Footer() {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  return (
    <div className="flex h-auto w-full flex-col space-y-10 border-t border-gray-200 py-10 text-center">
      <div className="mx-auto flex h-full w-8/10 flex-row">
        <div className="flex h-full w-1/3 flex-col items-center justify-center space-y-5">
          <Logo isMobile={false} />
        </div>
        <div className="flex h-full w-1/3 flex-col items-center justify-center">
          <ul className="space-y-2">
            <li>
              <h5 className="text-lg font-bold">Grzegorz Natanek</h5>
            </li>
            <li>
              <p>Korepetycje z geografii</p>
            </li>
            <li>
              <p>NIP: 1234567890</p>
            </li>
            <li>
              <p>508 808 422</p>
            </li>
            <li>
              <p>korkizgegry.krakow@gmail.com</p>
            </li>
          </ul>
        </div>
        <div className="flex h-full w-1/3 flex-col items-center justify-center space-y-5">
          <ul className="space-y-2">
            <li className="hoverScaleSmall hover:font-bold">
              <a href="#">Polityka prywatności</a>
            </li>
            <li className="hoverScaleSmall hover:font-bold">
              <a href="#">Regulamin</a>
            </li>
          </ul>
          <div className="flex flex-row items-center justify-center space-x-5">
            <div>
              <a href="https://www.facebook.com/busolakorepetycja">
                <FacebookIcon
                  size={isMobile ? 20 : 30}
                  fill="var(--dark-beige)"
                />
              </a>
            </div>
            <div>
              <a href="https://www.instagram.com/busolakorepetycja">
                <InstagramIcon
                  size={isMobile ? 20 : 30}
                  fill="var(--dark-beige)"
                />
              </a>
            </div>
            <div>
              <a href="mailto:korkizgegry.krakow@gmail.com">
                <EmailIcon size={isMobile ? 20 : 30} fill="var(--dark-beige)" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center text-sm">
        © Copyright 2025 Busola. All rights reserved.
      </div>
    </div>
  );
}
