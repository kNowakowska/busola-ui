"use client";

import { useMutation } from "@tanstack/react-query";

import { Title } from "@/lib/components/Title";
import apiClient from "@/lib/api/apiClient";
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
    <div className="flex h-auto  w-3/5 mx-auto flex-col items-center gap-y-4 rounded-3xl px-5 py-10 shadow-md tablet:h-auto tablet:w-3/4 tablet:px-16 laptop:w-1/2">
      <Title size="text-5xl" textAlign="text-center">
        Utwórz hasło
      </Title>
      <ConfirmPasswordForm
        confirmPassword={confirmResetPasswordMutation.mutateAsync}
        disabled={confirmResetPasswordMutation.isPending}
      />
    </div>
  );
}
