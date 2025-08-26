import { PropsWithChildren } from "react";

import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import clsx from "clsx";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
});

export const metadata: Metadata = {
  title: "Busola - Korepetycje z geografii",
  description:
    "Doświadczony nauczyciel geografii, który przygotuje Cię na matury i olimpiady.",
};

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <html lang="pl">
      <body className={clsx(montserrat.className, "h-screen w-full ")}>
        {children}
      </body>
    </html>
  );
}
