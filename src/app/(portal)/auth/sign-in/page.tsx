import Link from "next/link";

import AuthFormContainer from "@/lib/components/AuthFormContainer";
import { Routes } from "@/lib/routes/routes";

import { SignInForm } from "./SignInForm";

export default function SignIn() {
  return (
    <AuthFormContainer title="Zaloguj się">
      <SignInForm />
      <p className="text-center text-sm md:text-base ">
        Nie pamiętasz hasła?{"  "}
        <Link
          className="font-bold inline-block ml-1 hoverScaleSmall"
          href={Routes.resetPassword()}
        >
          Zresetuj je tutaj
        </Link>
      </p>
    </AuthFormContainer>
  );
}
