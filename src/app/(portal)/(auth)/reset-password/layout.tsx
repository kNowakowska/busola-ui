import { ResetPasswordProvider } from "@/lib/context/ResetPasswordContext";

export default async function ResetPasswordLayout({
  children,
}: React.PropsWithChildren) {
  return <ResetPasswordProvider>{children}</ResetPasswordProvider>;
}
