"use client";
import { useCallback } from "react";
import { useRouter } from "next/navigation";

import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { z } from "zod";

import FormInput from "@/lib/components/form/FormInput";
import { Button } from "@/lib/components/Button";
import { useResetPassword } from "@/lib/hooks/useResetPassword";
import { Routes } from "@/lib/routes/routes";
import Form from "@/lib/components/form/Form";

import { resetPasswordValidationSchema } from "../resetPasswordValidation";

type ResetPasswordFormValues = z.infer<typeof resetPasswordValidationSchema>;

export const ResetPasswordForm = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPasswordFormValues>({
    resolver: zodResolver(resetPasswordValidationSchema),
    mode: "onSubmit",
    reValidateMode: "onChange",
  });

  const {
    resetPasswordMutation: { mutateAsync: resetPasswordRequest, isPending },
  } = useResetPassword();

  const resetPassword = useCallback(
    async (email: string) => {
      await resetPasswordRequest({ email });
      router.push(Routes.resetPasswordVerifyCode());
    },
    [resetPasswordRequest, router]
  );

  const onSubmit: SubmitHandler<ResetPasswordFormValues> = useCallback(
    async ({ email }: ResetPasswordFormValues) => {
      try {
        await toast.promise(
          () => resetPassword(email),
          {
            loading: "Generowanie kodu...",
            success: "Kod weryfikacyjny został wysłany na adres e-mail",
            error: (error) => error.message,
          },
          {
            style: {
              minWidth: "250px",
            },
          }
        );
      } catch {}
    },
    []
  );

  return (
    <Form name="resetPasswordForm" onSubmit={handleSubmit(onSubmit)}>
      <FormInput
        type="email"
        placeholder="korkizgegry@gmail.com"
        label="Adres e-mail"
        id="email"
        error={errors.email}
        {...register("email")}
      />

      <Button text="Wyślij kod" type="submit" disabled={isPending} />
    </Form>
  );
};
