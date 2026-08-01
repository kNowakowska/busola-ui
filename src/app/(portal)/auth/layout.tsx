import { notFound } from "next/navigation";

import { ResetPasswordProvider } from "@/lib/context/ResetPasswordContext";
import { isLoginEnabled } from "@/lib/config/features";

export default function AuthLayout({ children }: React.PropsWithChildren) {
  if (!isLoginEnabled) {
    notFound();
  }

  return <ResetPasswordProvider>{children}</ResetPasswordProvider>;
}
