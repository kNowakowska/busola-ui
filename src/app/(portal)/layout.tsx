import { PropsWithChildren } from "react";
import { Toaster } from "react-hot-toast";

export default function AppLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <>
      <div className="flex h-full flex-col">
        <main className="mx-auto flex h-full w-full flex-col items-center justify-center pb-10 md:w-7/10">
          {children}
        </main>
      </div>
      <Toaster />
    </>
  );
}
