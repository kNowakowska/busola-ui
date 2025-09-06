"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import z from "zod";

import apiClient from "@/lib/api/apiClient";
import { useResetPasswordContext } from "@/lib/context/ResetPasswordContext";
import { Button } from "@/lib/components/Button";
import FormInput from "@/lib/components/form/FormInput";
import { Routes } from "@/lib/routes/routes";
import Form from "@/lib/components/form/Form";
import { useReactQueryContext } from "@/lib/providers/ReactQueryProvider";
import { authKeys } from "@/lib/api/queryKeysFactory";

import { SignInValidationSchema } from "./signInValidationSchema";

type SignInFormValues = z.infer<typeof SignInValidationSchema>;

export const SignInForm = () => {
  const { setEmail, setInitialPassword } = useResetPasswordContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormValues>({
    resolver: zodResolver(SignInValidationSchema),
    mode: "onBlur",
  });

  const { mutateAsync: login, isPending } = useMutation({
    mutationFn: async (data: SignInFormValues) =>
      apiClient<{ shouldResetPassword: boolean }>("/auth/sign-in", data, {
        method: "POST",
      }),
  });

  const router = useRouter();
  const { queryClient } = useReactQueryContext();

  const onSubmit: SubmitHandler<SignInFormValues> = async (data) => {
    try {
      await toast.promise(
        async () => {
          setEmail(data.email);
          setInitialPassword(data.password);
          const response = await login(data);
          if (response.shouldResetPassword) {
            router.push(Routes.resetInitialPassword());
            router.refresh();
          } else {
            router.push(Routes.dashboard());
            router.refresh();
          }
          await queryClient.invalidateQueries({ queryKey: authKeys.session });
        },
        {
          loading: "Logowanie...",
          error: (error: any) => error.message,
        },
        {
          style: {
            minWidth: "250px",
          },
        }
      );
    } catch {}
  };

  return (
    <Form name="singInForm" onSubmit={handleSubmit(onSubmit)}>
      <FormInput
        type="email"
        placeholder="korkizgegry@gmail.com"
        label="Adres e-mail"
        id="email"
        disabled={isPending}
        error={errors.email}
        {...register("email")}
      />
      <FormInput
        type="password"
        placeholder="********"
        label="Hasło"
        id="password"
        disabled={isPending}
        error={errors.password}
        {...register("password")}
      />
      <Button text="Zaloguj się" type="submit" disabled={isPending} />
    </Form>
  );
};
