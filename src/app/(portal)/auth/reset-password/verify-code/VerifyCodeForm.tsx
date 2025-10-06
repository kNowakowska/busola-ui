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
import { Routes } from "@/lib/routes/routes";
import Form from "@/lib/components/form/Form";

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
      router.push(Routes.resetPasswordConfirm(), { scroll: true });
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
      } catch {
        console.error("Error verifying code");
      }
    },
    []
  );

  return (
    <Form
      name="verifyCodeForm"
      onSubmit={handleSubmit(onSubmit)}
      className="items-center"
    >
      <FormInput
        type="password"
        placeholder="******"
        label="Kod weryfikacyjny"
        id="code"
        error={errors.code}
        {...register("code")}
      />
      <Button type="submit" disabled={isPending}>
        Zweryfikuj
      </Button>
    </Form>
  );
};
