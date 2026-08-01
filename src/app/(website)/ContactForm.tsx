import z from "zod";
import { useCallback } from "react";
import { toast } from "react-hot-toast";
import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";

import apiClient from "@/lib/api/apiClient";
import { contactMessageDelivery } from "@/lib/config/features";
import FormInput from "@/lib/components/form/FormInput";
import { Button } from "@/lib/components/Button";
import { zodResolver } from "@hookform/resolvers/zod";
import Form from "@/lib/components/form/Form";

import { contactFormValidationSchema } from "./contactFormValidation";

type ContactFormValues = z.infer<typeof contactFormValidationSchema>;

async function sendMessageWithRouteHandler(data: ContactFormValues) {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const responseData = (await response.json().catch(() => null)) as {
    error?: string;
  } | null;

  if (!response.ok) {
    throw new Error(
      responseData?.error ||
        "Nie udało się wysłać wiadomości. Spróbuj ponownie później."
    );
  }
}

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormValidationSchema),
    mode: "onSubmit",
    reValidateMode: "onChange",
  });

  const { mutateAsync: sendMessage, isPending } = useMutation({
    mutationFn: (data: ContactFormValues) =>
      contactMessageDelivery === "route-handler"
        ? sendMessageWithRouteHandler(data)
        : apiClient<void>("/contact/message", data, {
            method: "POST",
          }),
  });

  const onSubmit: SubmitHandler<ContactFormValues> = useCallback(
    async ({ name, email, phone, message }: ContactFormValues) => {
      try {
        await toast.promise(
          async () => {
            await sendMessage({ name, email, phone, message });
          },
          {
            loading: "Wysyłanie wiadomości...",
            success: () => {
              reset();
              return "Wiadomość została wysłana.";
            },
            error: (error) => error.message,
          },
          {
            style: {
              minWidth: "250px",
            },
          }
        );
      } catch {
        console.error("Error sending message");
      }
    },
    [reset, sendMessage]
  );

  return (
    <Form
      name="resetInitialPasswordForm"
      onSubmit={handleSubmit(onSubmit)}
      className="items-start"
    >
      <FormInput
        type="text"
        placeholder="Twoje imię"
        label="Imię*"
        id="name"
        error={errors.name}
        containerClassName="text-start"
        disabled={isPending}
        {...register("name")}
      />
      <FormInput
        type="email"
        placeholder="Twój e-mail"
        label="Adres e-mail*"
        id="email"
        error={errors.email}
        containerClassName="text-start"
        disabled={isPending}
        {...register("email")}
      />
      <FormInput
        type="phone"
        placeholder="Twój numer telefonu"
        label="Numer telefonu"
        id="phone"
        error={errors.phone}
        containerClassName="text-start"
        disabled={isPending}
        {...register("phone")}
      />

      <FormInput
        type="textarea"
        placeholder="Twoja wiadomość"
        label="Wiadomość*"
        id="message"
        error={errors.message}
        containerClassName="text-start"
        disabled={isPending}
        min={4}
        max={4}
        {...register("message")}
      />

      <Button
        type="submit"
        className="w-[150px] self-center !p-4"
        disabled={isPending}
      >
        {isPending ? "Wysyłanie..." : "Wyślij"}
      </Button>
    </Form>
  );
}
