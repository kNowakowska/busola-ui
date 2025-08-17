import { useMutation } from "@tanstack/react-query";

import { useResetPasswordContext } from "../context/ResetPasswordContext";
import apiClient from "../api/apiClient";

export const useResetPassword = () => {
  const { email, code, setEmail, setCode } = useResetPasswordContext();

  const resetPasswordMutation = useMutation({
    mutationFn: ({ email }: { email: string }) => {
      setEmail(email);
      return apiClient(
        "/auth/reset-password-request",
        {
          email,
        },
        {
          method: "POST",
        }
      );
    },
  });

  const verifyCodeMutation = useMutation({
    mutationFn: ({ code }: { code: string }) => {
      if (!email) {
        throw new Error("Weryfikacja kodu nie powiodła się");
      }
      setCode(code);
      return apiClient(
        "/auth/verify-code",
        {
          email,
          code,
        },
        {
          method: "POST",
        }
      );
    },
  });

  const confirmResetMutation = useMutation({
    mutationFn: ({ password }: { password: string }) => {
      if (!email || !code) {
        throw new Error("Reset hasła nie powiódł się");
      }
      return apiClient(
        "/auth/reset-password",
        {
          email,
          code,
          password,
        },
        {
          method: "POST",
        }
      );
    },
  });

  return {
    resetPasswordMutation,
    verifyCodeMutation,
    confirmResetMutation,
  };
};
