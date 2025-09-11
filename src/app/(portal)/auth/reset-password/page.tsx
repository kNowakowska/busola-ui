import Link from "next/link";

import AuthFormContainer from "@/lib/components/AuthFormContainer";
import { Routes } from "@/lib/routes/routes";

import { ResetPasswordForm } from "./ResetPasswordForm";

export default function ResetPassword() {
  return (
    <AuthFormContainer
      title="Zapomniałeś hasło?"
      description="Podaj swój adres e-mail, aby odzyskać hasło"
    >
      <ResetPasswordForm />
      <p className="text-center text-sm md:text-base">
        Pamiętasz hasło?{" "}
        <Link
          className="font-bold inline-block ml-1 hoverScaleSmall"
          href={Routes.signIn()}
        >
          Wróć do logowania
        </Link>
      </p>
    </AuthFormContainer>
  );
}
