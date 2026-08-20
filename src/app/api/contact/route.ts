import { NextResponse } from "next/server";

import { contactFormValidationSchema } from "@/lib/validators/contact";

const RESEND_EMAILS_URL = "https://api.resend.com/emails";

function escapeHtml(value: string) {
  return value.replace(
    /[&<>"']/g,
    (character) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      })[character] ?? character
  );
}

function createEmailContent({
  name,
  email,
  phone,
  message,
}: {
  name: string;
  email: string;
  phone?: string;
  message: string;
}) {
  const fields = [
    ["Imię", name],
    ["E-mail", email],
    ["Telefon", phone || "Nie podano"],
  ];

  return {
    html: `
      <h2>Nowa wiadomość z formularza kontaktowego</h2>
      <ul>
        ${fields
          .map(
            ([label, value]) =>
              `<li><strong>${label}:</strong> ${escapeHtml(value)}</li>`
          )
          .join("")}
      </ul>
      <h3>Wiadomość</h3>
      <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
    `,
    text: `Nowa wiadomość z formularza Busola\n\nImię: ${name}\nE-mail: ${email}\nTelefon: ${phone || "Nie podano"}\n\nWiadomość:\n${message}`,
  };
}

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Nieprawidłowy format danych formularza." },
      { status: 400 }
    );
  }

  const parsedBody = contactFormValidationSchema.safeParse(body);

  if (!parsedBody.success) {
    return NextResponse.json(
      { error: "Nieprawidłowe dane formularza." },
      { status: 400 }
    );
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL;

  if (!resendApiKey || !from || !to) {
    console.error("Contact email delivery is not configured.");
    return NextResponse.json(
      { error: "Wysyłka wiadomości jest chwilowo niedostępna." },
      { status: 503 }
    );
  }

  const { name, email, phone, message } = parsedBody.data;
  const content = createEmailContent({ name, email, phone, message });

  try {
    const response = await fetch(RESEND_EMAILS_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: "Nowa wiadomość z formularza Busola",
        ...content,
      }),
    });

    if (!response.ok) {
      console.error("Resend rejected the contact email.", response.status);
      return NextResponse.json(
        { error: "Nie udało się wysłać wiadomości. Spróbuj ponownie później." },
        { status: 502 }
      );
    }
  } catch {
    console.error("Contact email delivery failed.");
    return NextResponse.json(
      { error: "Nie udało się wysłać wiadomości. Spróbuj ponownie później." },
      { status: 502 }
    );
  }

  return NextResponse.json({ success: true });
}
