import { PropsWithChildren } from "react";
import { Toaster } from "react-hot-toast";

import Logo from "@/lib/components/Logo";

export default function AppLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <>
      <div className="h-auto flex flex-col ">
        <main className="h-full w-full md:w-7/10 mx-auto pb-10 flex flex-col justify-center items-center">
          {children}
        </main>
      </div>
      <Toaster />
    </>
  );
}
