"use client";
import { useCallback } from "react";
import { useRouter } from "next/navigation";

import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

import FormInput from "@/lib/components/form/FormInput";
import { Button } from "@/lib/components/Button";
import { resetPasswordValidationSchema } from "./resetPasswordValidation";

type ResetPasswordFormValues = z.infer<typeof resetPasswordValidationSchema>;

export const ResetPasswordForm = () => {
  const router = useRouter();
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm<ResetPasswordFormValues>({
  //   resolver: zodResolver(resetPasswordValidationSchema),
  //   mode: 'onSubmit',
  //   reValidateMode: 'onChange',
  // })

  // const {
  //   resetPasswordMutation: { mutateAsync: resetPasswordRequest, isPending },
  // } = useResetPassword()

  // const resetPassword = useCallback(
  //   async (email: string) => {
  //     await resetPasswordRequest({ email })
  //     router.push(routes.resetPasswordVerifyCode)
  //   },
  //   [resetPasswordRequest, router]
  // )

  const onSubmit: SubmitHandler<ResetPasswordFormValues> = useCallback(
    async ({ email }: ResetPasswordFormValues) => {
      router.push("/reset-password/verify-code");
      // await toast.promise(
      //   () => resetPassword(email),
      //   {
      //     loading: 'Generowanie kodu...',
      //     success: 'Kod weryfikacyjny został wysłany na adres e-mail',
      //     error: (error) => error.message,
      //   },
      //   {
      //     style: {
      //       minWidth: '250px',
      //     },
      //   }
      // )
    },
    []
  );

  return (
    <form
      name="resetPasswordForm"
      noValidate
      // onSubmit={handleSubmit(onSubmit)}
      className="flex h-full w-full flex-col space-y-7 p-10 justify-center items-center"
    >
      <FormInput
        type="email"
        placeholder="korkizgegry@gmail.com"
        label="Adres e-mail"
        id="email"
      />

      <Button
        text="Wyślij kod"
        type="submit"
        onClick={onSubmit as any}
        // disabled={isPending}
      />
    </form>
  );
};
