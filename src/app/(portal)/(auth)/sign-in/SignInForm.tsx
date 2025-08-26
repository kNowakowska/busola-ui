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

  const onSubmit: SubmitHandler<SignInFormValues> = async (data) => {
    try {
      await toast.promise(
        async () => {
          setEmail(data.email);
          setInitialPassword(data.password);
          const response = await login(data);
          if (response.shouldResetPassword) {
            router.push(Routes.resetInitialPassword());
          } else {
            router.push(Routes.dashboard());
          }
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
    <form
      name="singInForm"
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      className="flex h-full w-full flex-col space-y-4 md:space-y-7 p-7 md:p-10 justify-center items-center"
    >
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
    </form>
  );
};
