import Link from "next/link";

import { Title } from "@/lib/components/Title";
import { ResetPasswordForm } from "./ResetPasswordForm";

export default function ResetPassword() {
  return (
    <div className="h-4/5 w-3/5 mx-auto flex flex-col items-center gap-y-4 rounded-3xl px-5 py-10 shadow-md ">
      <Title size="text-5xl">Zapomniałeś hasła?</Title>
      <p className="pt-5 text-center ">
        Podaj swój adres e-mail, aby odzyskać hasło
      </p>
      <ResetPasswordForm />
      <p className="text-center ">
        Pamiętasz hasło?{" "}
        <Link className="text-light-blue font-bold" href={"/sign-in"}>
          Wróć do logowania
        </Link>
      </p>
    </div>
  );
}
