"use client";
import { useCallback } from "react";
import { useRouter } from "next/navigation";

import { SubmitHandler, useForm } from "react-hook-form";
// import toast from 'react-hot-toast'
import { z } from "zod";

// import { zodResolver } from '@hookform/resolvers/zod'

import { Button } from "@/lib/components/Button";
import FormInput from "@/lib/components/form/FormInput";
import { verifyCodeValidationSchema } from "../resetPasswordValidation";

type VerifyCodeFormValues = z.infer<typeof verifyCodeValidationSchema>;

export const VerifyCodeForm = () => {
  const router = useRouter();
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm<VerifyCodeFormValues>({
  //   resolver: zodResolver(verifyCodeValidationSchema),
  //   mode: 'onSubmit',
  //   reValidateMode: 'onChange',
  // })

  // const {
  //   verifyCodeMutation: { mutateAsync: verifyCodeRequest, isPending },
  // } = useResetPassword()

  // const verifyCode = useCallback(
  //   async (code: string) => {
  //     await verifyCodeRequest({ code })
  //     router.push(routes.resetPasswordConfirm)
  //   },
  //   [verifyCodeRequest, router]
  // )

  const onSubmit: SubmitHandler<VerifyCodeFormValues> = useCallback(
    async ({ code }: VerifyCodeFormValues) => {
      router.push("/reset-password/confirm");
      // await toast.promise(
      //   () => verifyCode(code),
      //   {
      //     loading: 'Weryfikacja kodu...',
      //     success: 'Kod został zweryfikowany',
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
      name="verifyCodeForm"
      noValidate
      // onSubmit={handleSubmit(onSubmit)}
      className="flex h-full w-full flex-col space-y-7 p-10 justify-center items-center"
    >
      <FormInput
        type="password"
        placeholder="******"
        label="Kod weryfikacyjny"
        id="code"
      />
      <Button
        text="Zweryfikuj"
        type="submit"
        onClick={onSubmit as any}
        // disabled={isPending}
      />
    </form>
  );
};
