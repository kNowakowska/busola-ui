"use client";
import Link from "next/link";

import AuthFormContainer from "@/lib/components/AuthFormContainer";
import { Routes } from "@/lib/routes/routes";
import { useScrollToTop } from "@/lib/hooks/useScrollToTop";

import { SignInForm } from "./SignInForm";

export default function SignIn() {
  useScrollToTop();

  return (
    <AuthFormContainer title="Zaloguj się">
      <SignInForm />
      <p className="text-center text-sm md:text-base">
        Nie pamiętasz hasła?{"  "}
        <Link
          className="hoverScaleSmall ml-1 inline-block font-bold"
          href={Routes.resetPassword()}
        >
          Zresetuj je tutaj
        </Link>
      </p>
    </AuthFormContainer>
  );
}
