import { object, string } from "zod";

export const contactFormValidationSchema = object({
  name: string().min(1, "Imię jest wymagane"),
  email: string()
    .min(1, "Adres e-mail jest wymagany")
    .email("Nieprawidłowy adres e-mail"),
  phone: string().optional(),
  message: string().min(1, "Wiadomość jest wymagana"),
});
