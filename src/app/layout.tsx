import { PropsWithChildren } from "react";

import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Toaster } from "react-hot-toast";

import clsx from "clsx";
import "./globals.css";

import ReactQueryProvider from "@/lib/providers/ReactQueryProvider";
import AuthProvider from "@/lib/providers/AuthProvider";
import { ChatContextProvider } from "@/lib/context/ChatContext";

import Header from "./Header";
import Footer from "./Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Busola - Korepetycje z geografii",
  description:
    "Doświadczony nauczyciel geografii, który przygotuje Cię na matury i olimpiady.",
};

export default async function RootLayout({
  children,
}: Readonly<PropsWithChildren>) {
  return (
    <html lang="pl">
      <body
        className={clsx(
          montserrat.className,
          "flex h-screen w-full flex-col justify-between"
        )}
      >
        <ReactQueryProvider>
          <AuthProvider>
            <ChatContextProvider>
              <Header />
              <Toaster />
              {children}
              <Footer />
            </ChatContextProvider>
          </AuthProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
