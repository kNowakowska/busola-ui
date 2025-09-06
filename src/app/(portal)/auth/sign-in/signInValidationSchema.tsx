import { password } from "@/lib/validators/password";
import { z } from "zod";

export const SignInValidationSchema = z.object({
  email: z.email("Nieprawidłowy adres e-mail"),
  password: password(),
});
