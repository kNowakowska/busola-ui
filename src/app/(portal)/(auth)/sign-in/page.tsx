import Link from "next/link";

import { Title } from "@/lib/components/Title";
import { SignInForm } from "./SignInForm";

export default function SignIn() {
  return (
    <div className="flex h-4/5 w-3/5 mx-auto flex-col items-center gap-y-4 rounded-3xl bg-white px-5 py-10 shadow-md ">
      <Title size="text-5xl">Zaloguj się</Title>
      <SignInForm />
      <p className="text-center">
        Nie pamiętasz hasła?{" "}
        <Link className="text-light-blue font-bold" href={"/reset-password"}>
          Zresetuj je tutaj
        </Link>
      </p>
    </div>
  );
}
