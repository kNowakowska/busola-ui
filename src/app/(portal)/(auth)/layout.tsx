import { ResetPasswordProvider } from "@/lib/context/ResetPasswordContext";

export default async function AuthLayout({
  children,
}: React.PropsWithChildren) {
  return <ResetPasswordProvider>{children}</ResetPasswordProvider>;
}
