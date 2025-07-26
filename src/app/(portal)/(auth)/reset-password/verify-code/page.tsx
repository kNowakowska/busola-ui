import Link from "next/link";

import { Title } from "@/lib/components/Title";
import { VerifyCodeForm } from "./VerifyCodeForm";

export default function VerifyCode() {
  return (
    <div className="flex h-auto  w-3/5 mx-auto flex-col items-center gap-y-4 rounded-3xl bg-white px-5 py-10 shadow-md tablet:h-auto tablet:w-3/4 tablet:px-16 laptop:w-1/2">
      <Title size="text-5xl" textAlign="text-center">
        Podaj kod
      </Title>
      <div className="pt-5 text-center ">
        Kod weryfikacyjny został wysłany na adres e-mail. Sprawdź swoją pocztę i
        wprowadź kod
      </div>
      <VerifyCodeForm />
      <p className="text-center ">
        Pamiętasz hasło?{" "}
        <Link className="text-light-blue font-bold" href={"/sign-in"}>
          Wróć do logowania
        </Link>
      </p>
    </div>
  );
}
