import Link from "next/link";

import { Title } from "@/lib/components/Title";
import { Routes } from "@/lib/routes/routes";

import { SignInForm } from "./SignInForm";

export default function SignIn() {
  return (
    <div className="flex h-auto w-full md:w-3/5 mx-auto flex-col items-center gap-y-4 rounded-3xl bg-white md:px-5 py-7 md:py-10 shadow-md">
      <Title>Zaloguj się</Title>
      <SignInForm />
      <p className="text-center text-sm md:text-base">
        Nie pamiętasz hasła?{" "}
        <Link className="font-bold" href={Routes.resetPassword()}>
          Zresetuj je tutaj
        </Link>
      </p>
    </div>
  );
}
