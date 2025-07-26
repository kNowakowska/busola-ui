"use client";
import { useCallback } from "react";
import { useRouter } from "next/navigation";

import { SubmitHandler, useForm } from "react-hook-form";

import { z } from "zod";

import FormInput from "@/lib/components/form/FormInput";
import { Button } from "@/lib/components/Button";
import { confirmPasswordValidationSchema } from "../resetPasswordValidation";

type ConfirmPasswordFormValues = z.infer<
  typeof confirmPasswordValidationSchema
>;

export const ConfirmPasswordForm = () => {
  const router = useRouter();
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm<ConfirmPasswordFormValues>({
  //   resolver: zodResolver(confirmPasswordValidationSchema),
  //   mode: "onSubmit",
  //   reValidateMode: "onChange",
  // });

  // const {
  //   confirmResetMutation: { mutateAsync: confirmPasswordRequest, isPending },
  // } = useResetPassword();

  // const confirmPassword = useCallback(
  //   async (password: string) => {
  //     await confirmPasswordRequest({ password });
  //     router.push(routes.signIn);
  //   },
  //   [confirmPasswordRequest, router]
  // );

  const onSubmit: SubmitHandler<ConfirmPasswordFormValues> = useCallback(
    async ({ password }: ConfirmPasswordFormValues) => {
      router.push("/sign-in");
      // await toast.promise(
      //   () => confirmPassword(password),
      //   {
      //     loading: "Resetowanie hasła...",
      //     success: "Hasło zostało zresetowane. Możesz się zalogować",
      //     error: (error) => error.message,
      //   },
      //   {
      //     style: {
      //       minWidth: "250px",
      //     },
      //   }
      // );
    },
    []
  );

  return (
    <form
      name="confirmPasswordForm"
      noValidate
      // onSubmit={handleSubmit(onSubmit)}
      className="flex h-full w-full flex-col space-y-7 p-10 justify-center items-center"
    >
      <FormInput
        type="password"
        placeholder="********"
        label="Nowe hasło"
        id="password"
      />

      <FormInput
        type="password"
        placeholder="********"
        label="Powtórz nowe hasło"
        id="confirmPassword"
      />

      <Button
        text="Zmień hasło"
        type="submit"
        onClick={onSubmit as any}
        // disabled={isPending}
      />
    </form>
  );
};
