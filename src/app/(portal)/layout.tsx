import { PropsWithChildren } from "react";
import { Toaster } from "react-hot-toast";

import ReactQueryProvider from "@/lib/providers/ReactQueryProvider";
import Logo from "@/lib/components/Logo";

import LogoutButton from "./LogoutButton";

export default function AppLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <ReactQueryProvider>
      <div className="h-auto flex flex-col ">
        <header className="w-full px-5 md:px-12 py-6 flex flex-row justify-between items-center sticky top-0 bg-white z-20 shadow-md">
          <Logo />
          <h1 className="text-xl md:text-3xl font-extrabold text-center md:text-left">
            Busola - Korepetycje z geografii
          </h1>
          <LogoutButton />
        </header>
        <main className="h-full w-full md:w-7/10 mx-auto pb-10 flex flex-col justify-center items-center">
          {children}
        </main>
      </div>
      <Toaster />
    </ReactQueryProvider>
  );
}
