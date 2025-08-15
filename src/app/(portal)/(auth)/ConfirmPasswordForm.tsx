"use client";
import { useCallback } from "react";
import { useRouter } from "next/navigation";

import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";

import { z } from "zod";

import FormInput from "@/lib/components/form/FormInput";
import { Button } from "@/lib/components/Button";
import { zodResolver } from "@hookform/resolvers/zod";

import { confirmPasswordValidationSchema } from "./resetPasswordValidation";

type ConfirmPasswordFormValues = z.infer<
  typeof confirmPasswordValidationSchema
>;

type ConfirmPasswordFormProps = {
  confirmPassword: (password: string) => Promise<void>;
  disabled: boolean;
};

export const ConfirmPasswordForm = ({
  confirmPassword,
  disabled,
}: ConfirmPasswordFormProps) => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ConfirmPasswordFormValues>({
    resolver: zodResolver(confirmPasswordValidationSchema),
    mode: "onSubmit",
    reValidateMode: "onChange",
  });

  const onSubmit: SubmitHandler<ConfirmPasswordFormValues> = useCallback(
    async ({ password }: ConfirmPasswordFormValues) => {
      try {
        await toast.promise(
          async () => {
            await confirmPassword(password);
            router.push("/sign-in");
          },
          {
            loading: "Resetowanie hasła...",
            success: "Hasło zostało zresetowane. Możesz się zalogować",
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
      name="confirmPasswordForm"
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      className="flex h-full w-full flex-col space-y-7 p-10 justify-center items-center"
    >
      <FormInput
        type="password"
        placeholder="********"
        label="Nowe hasło"
        id="password"
        error={errors.password}
        disabled={disabled}
        {...register("password")}
      />

      <FormInput
        type="password"
        placeholder="********"
        label="Powtórz nowe hasło"
        id="confirmPassword"
        error={errors.confirmPassword}
        disabled={disabled}
        {...register("confirmPassword")}
      />

      <Button text="Zmień hasło" type="submit" disabled={disabled} />
    </form>
  );
};
