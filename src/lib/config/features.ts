export const isLoginEnabled = process.env.NEXT_PUBLIC_ENABLE_LOGIN === "true";

export type ContactMessageDelivery = "external-backend" | "route-handler";

export const contactMessageDelivery: ContactMessageDelivery =
  process.env.NEXT_PUBLIC_CONTACT_MESSAGE_DELIVERY === "route-handler"
    ? "route-handler"
    : "external-backend";
