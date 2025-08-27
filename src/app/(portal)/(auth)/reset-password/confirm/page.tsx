"use client";

import AuthFormContainer from "@/lib/components/AuthFormContainer";
import { useResetPassword } from "@/lib/hooks/useResetPassword";

import { ConfirmPasswordForm } from "../../ConfirmPasswordForm";

export default function ConfirmPassword() {
  const {
    confirmResetMutation: { mutateAsync: confirmResetPassword, isPending },
  } = useResetPassword();

  return (
    <AuthFormContainer
      title="Utwórz nowe hasło"
      description="Poprzednie hasło zostało zresetowane. Utwórz nowe hasło"
    >
      <ConfirmPasswordForm
        confirmPassword={(password) => confirmResetPassword({ password })}
        disabled={isPending}
      />
    </AuthFormContainer>
  );
}
