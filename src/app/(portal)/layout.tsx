import { PropsWithChildren } from "react";
import { Toaster } from "react-hot-toast";
import Image from "next/image";

import ReactQueryProvider from "@/lib/providers/ReactQueryProvider";

import LogoutButton from "./LogoutButton";

export default function AppLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <ReactQueryProvider>
      <div className="h-full">
        {/* Header */}
        <header
          className={`w-full px-12 py-6 flex flex-row justify-between items-center sticky top-0 bg-white`}
        >
          <div>
            <a href="/">
              <Image
                src="/busola-korepetycje-logo-puste-2.png"
                alt="Busola"
                width={150}
                height={150}
              />
            </a>
          </div>
          <h1 className="text-3xl font-extrabold">
            Busola - Korepetycje z geografii
          </h1>
          <LogoutButton />
        </header>
        {/* Main */}
        <main className="h-full w-4/5 mx-auto py-10">{children}</main>
      </div>
      <Toaster />
    </ReactQueryProvider>
  );
}
