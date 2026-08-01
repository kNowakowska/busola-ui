import { object, string } from "zod";

export const contactFormValidationSchema = object({
  name: string()
    .trim()
    .min(1, "Imię jest wymagane")
    .max(100, "Imię jest zbyt długie"),
  email: string()
    .trim()
    .min(1, "Adres e-mail jest wymagany")
    .email("Nieprawidłowy adres e-mail")
    .max(254, "Adres e-mail jest zbyt długi"),
  phone: string().trim().max(50, "Numer telefonu jest zbyt długi").optional(),
  message: string()
    .trim()
    .min(1, "Wiadomość jest wymagana")
    .max(5000, "Wiadomość jest zbyt długa"),
});
