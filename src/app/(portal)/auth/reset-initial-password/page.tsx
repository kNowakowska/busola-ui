"use client";

import { useMutation } from "@tanstack/react-query";

import apiClient from "@/lib/api/apiClient";
import AuthFormContainer from "@/lib/components/AuthFormContainer";
import { useResetPasswordContext } from "@/lib/context/ResetPasswordContext";
import { ResetInitialPasswordForm } from "./ResetInitialPasswordForm";

export type ResetInitialPasswordData = {
  password: string;
  name: string;
  lastName: string;
};

export default function ResetInitialPassword() {
  const { email, initialPassword } = useResetPasswordContext();

  const resetInitialPasswordMutation = useMutation({
    mutationFn: async (data: ResetInitialPasswordData) =>
      apiClient<void>(
        "/auth/reset-initial-password",
        {
          ...data,
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
      <ResetInitialPasswordForm
        resetInitialPassword={resetInitialPasswordMutation.mutateAsync}
        disabled={resetInitialPasswordMutation.isPending}
      />
    </AuthFormContainer>
  );
}
