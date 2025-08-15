import { password } from "@/lib/validators/password";
import { z } from "zod";

export const resetPasswordValidationSchema = z.object({
  email: z.email("Nieprawidłowy adres e-mail"),
});

export const verifyCodeValidationSchema = z.object({
  code: z
    .string()
    .refine((val) => val.length === 6, "Kod musi mieć 6 znaków")
    .refine((val) => /^\d+$/.test(val), "Kod musi składać się tylko z cyfr"),
});

export const confirmPasswordValidationSchema = z
  .object({
    password: password(),
    confirmPassword: z.string().min(8, "Hasło musi mieć co najmniej 8 znaków"),
  })
  .superRefine((data, ctx) => {
    if (data.password !== data.confirmPassword) {
      ctx.addIssue({
        path: ["confirmPassword"],
        code: z.ZodIssueCode.custom,
        message: "Hasła nie są identyczne",
      });
    }
  });
