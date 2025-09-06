import Link from "next/link";

import AuthFormContainer from "@/lib/components/AuthFormContainer";
import { Routes } from "@/lib/routes/routes";

import { VerifyCodeForm } from "./VerifyCodeForm";

export default function VerifyCode() {
  return (
    <AuthFormContainer
      title="Podaj kod"
      description="Kod weryfikacyjny został wysłany na adres e-mail. Sprawdź swoją pocztę i wprowadź kod"
    >
      <VerifyCodeForm />
      <p className="text-center text-sm md:text-base ">
        Pamiętasz hasło?{" "}
        <Link className=" font-bold" href={Routes.signIn()}>
          Wróć do logowania
        </Link>
      </p>
    </AuthFormContainer>
  );
}
