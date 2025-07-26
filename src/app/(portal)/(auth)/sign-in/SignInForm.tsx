"use client";

import { SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";
import z from "zod";

import { Button } from "@/lib/components/Button";
import FormInput from "@/lib/components/form/FormInput";

import { SignInValidationSchema } from "./signInValidationSchema";

type SignInFormValues = z.infer<typeof SignInValidationSchema>;

export const SignInForm = () => {
  //   const {
  //     register,
  //     handleSubmit,
  //     formState: { errors },
  //   } = useForm<SignInFormValues>({
  //     resolver: zodResolver(SignInValidationSchema),
  //     mode: 'onBlur',
  //   })

  //   const loginMutation = useLogin()

  const router = useRouter();

  const onSubmit: SubmitHandler<SignInFormValues> = async (data) => {
    router.push("/user");
    // await toast.promise(
    //   async () => {
    //     await loginMutation.mutateAsync({
    //       password: data.password,
    //       value: data.email,
    //     })
    //     router.push(routes.userProfile)
    //   },
    //   {
    //     loading: 'Logowanie...',
    //     error: (error) => error.message,
    //   },
    //   {
    //     style: {
    //       minWidth: '250px',
    //     },
    //   }
    // )
  };

  return (
    <form
      name="singInForm"
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
      <FormInput
        type="password"
        placeholder="********"
        label="Hasło"
        id="password"
      />
      <Button text="Zaloguj się" type="submit" onClick={onSubmit as any} />
    </form>
  );
};
