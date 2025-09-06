"use client";

import { useMutation } from "@tanstack/react-query";

import apiClient from "@/lib/api/apiClient";
import AuthFormContainer from "@/lib/components/AuthFormContainer";
import { useResetPasswordContext } from "@/lib/context/ResetPasswordContext";

import { ConfirmPasswordForm } from "../ConfirmPasswordForm";

export default function ResetInitialPassword() {
  const { email, initialPassword } = useResetPasswordContext();

  const confirmResetPasswordMutation = useMutation({
    mutationFn: async (password: string) =>
      apiClient<void>(
        "/auth/reset-initial-password",
        {
          password,
          initialPassword,
          email,
        },
        {
          method: "POST",
        }
      ),
  });

  return (
    <AuthFormContainer
      title="Utwórz hasło"
      description="Utwórz nowe hasło dla swojego konta"
    >
      <ConfirmPasswordForm
        confirmPassword={confirmResetPasswordMutation.mutateAsync}
        disabled={confirmResetPasswordMutation.isPending}
      />
    </AuthFormContainer>
  );
}
