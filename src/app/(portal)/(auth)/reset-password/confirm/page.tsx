import { Title } from "@/lib/components/Title";
import { ConfirmPasswordForm } from "./ConfirmPasswordForm";

export default function ConfirmPassword() {
  return (
    <div className="flex h-auto  w-3/5 mx-auto flex-col items-center gap-y-4 rounded-3xl px-5 py-10 shadow-md tablet:h-auto tablet:w-3/4 tablet:px-16 laptop:w-1/2">
      <Title size="text-5xl" textAlign="text-center">
        Utwórz nowe hasło
      </Title>
      <p className="pt-5 text-center ">
        Poprzednie hasło zostało zresetowane. Utwórz nowe hasło
      </p>
      <ConfirmPasswordForm />
    </div>
  );
}
