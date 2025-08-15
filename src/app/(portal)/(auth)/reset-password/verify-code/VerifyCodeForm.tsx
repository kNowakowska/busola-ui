"use client";
import { useCallback } from "react";
import { useRouter } from "next/navigation";

import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { z } from "zod";

import { Button } from "@/lib/components/Button";
import FormInput from "@/lib/components/form/FormInput";
import { useResetPassword } from "@/lib/hooks/useResetPassword";

import { verifyCodeValidationSchema } from "../../resetPasswordValidation";

type VerifyCodeFormValues = z.infer<typeof verifyCodeValidationSchema>;

export const VerifyCodeForm = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<VerifyCodeFormValues>({
    resolver: zodResolver(verifyCodeValidationSchema),
    mode: "onSubmit",
    reValidateMode: "onChange",
  });

  const {
    verifyCodeMutation: { mutateAsync: verifyCodeRequest, isPending },
  } = useResetPassword();

  const verifyCode = useCallback(
    async (code: string) => {
      await verifyCodeRequest({ code });
      router.push("/reset-password/confirm");
    },
    [verifyCodeRequest, router]
  );

  const onSubmit: SubmitHandler<VerifyCodeFormValues> = useCallback(
    async ({ code }: VerifyCodeFormValues) => {
      try {
        await toast.promise(
          () => verifyCode(code),
          {
            loading: "Weryfikacja kodu...",
            success: "Kod został zweryfikowany",
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
    <form
      name="verifyCodeForm"
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      className="flex h-full w-full flex-col space-y-7 p-10 justify-center items-center"
    >
      <FormInput
        type="password"
        placeholder="******"
        label="Kod weryfikacyjny"
        id="code"
        error={errors.code}
        {...register("code")}
      />
      <Button text="Zweryfikuj" type="submit" disabled={isPending} />
    </form>
  );
};
