"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import z from "zod";

import { Button } from "@/lib/components/Button";
import FormInput from "@/lib/components/form/FormInput";

import { SignInValidationSchema } from "./signInValidationSchema";

type SignInFormValues = z.infer<typeof SignInValidationSchema>;

export const SignInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormValues>({
    resolver: zodResolver(SignInValidationSchema),
    mode: "onBlur",
  });

  const loginMutation = useMutation({
    mutationFn: async (data: SignInFormValues) => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/sign-in`,
        {
          method: "POST",
          body: JSON.stringify(data),
          credentials: "include",
        }
      );
      return await response.json();
    },
  });

  const router = useRouter();

  const onSubmit: SubmitHandler<SignInFormValues> = async (data) => {
    await toast.promise(
      async () => {
        await loginMutation.mutateAsync(data);
        router.push("/dashboard");
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
  };

  return (
    <form
      name="singInForm"
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      className="flex h-full w-full flex-col space-y-7 p-10 justify-center items-center"
    >
      <FormInput
        type="email"
        placeholder="korkizgegry@gmail.com"
        label="Adres e-mail"
        id="email"
        {...register("email")}
      />
      <FormInput
        type="password"
        placeholder="********"
        label="Hasło"
        id="password"
        {...register("password")}
      />
      <Button text="Zaloguj się" type="submit" />
    </form>
  );
};
