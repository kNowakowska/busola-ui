import { PropsWithChildren } from "react";
import { Toaster } from "react-hot-toast";

import { Chat } from "../../lib/components/chat/Chat";

export default function AppLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <>
      <main className="mx-auto flex h-full w-full grow flex-col items-center justify-center pb-10 md:w-7/10">
        {children}
      </main>
      <Toaster />
      <Chat />
    </>
  );
}
