"use client";
import { useCallback } from "react";
import { useRouter } from "next/navigation";

import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";

import { z } from "zod";

import FormInput from "@/lib/components/form/FormInput";
import { Button } from "@/lib/components/Button";
import { zodResolver } from "@hookform/resolvers/zod";
import { Routes } from "@/lib/routes/routes";
import Form from "@/lib/components/form/Form";

import { resetInitialPasswordValidationSchema } from "../resetPasswordValidation";
import { ResetInitialPasswordData } from "./page";

type ResetInitialPasswordFormValues = z.infer<
  typeof resetInitialPasswordValidationSchema
>;

type ResetInitialPasswordFormProps = {
  resetInitialPassword: (data: ResetInitialPasswordData) => Promise<void>;
  disabled: boolean;
};

export const ResetInitialPasswordForm = ({
  resetInitialPassword,
  disabled,
}: ResetInitialPasswordFormProps) => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetInitialPasswordFormValues>({
    resolver: zodResolver(resetInitialPasswordValidationSchema),
    mode: "onSubmit",
    reValidateMode: "onChange",
  });

  const onSubmit: SubmitHandler<ResetInitialPasswordFormValues> = useCallback(
    async ({ password, lastName, name }: ResetInitialPasswordFormValues) => {
      try {
        await toast.promise(
          async () => {
            await resetInitialPassword({ password, name, lastName });
            router.push(Routes.signIn(), { scroll: true });
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
      } catch {
        console.error("Error resetting password");
      }
    },
    []
  );

  return (
    <Form
      name="resetInitialPasswordForm"
      onSubmit={handleSubmit(onSubmit)}
      className="items-center"
    >
      <FormInput
        type="text"
        placeholder="Jan"
        label="Imię"
        id="name"
        error={errors.name}
        disabled={disabled}
        {...register("name")}
      />
      <FormInput
        type="text"
        placeholder="Kowalski"
        label="Nazwisko"
        id="lastName"
        error={errors.lastName}
        disabled={disabled}
        {...register("lastName")}
      />
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

      <Button type="submit" disabled={disabled}>
        Zmień hasło
      </Button>
    </Form>
  );
};
