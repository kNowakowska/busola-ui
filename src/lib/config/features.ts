export const isLoginEnabled = process.env.NEXT_PUBLIC_ENABLE_LOGIN === "true";

export const shopUrl = process.env.NEXT_PUBLIC_SHOP_URL;

export type ContactMessageDelivery = "external-backend" | "route-handler";

export const contactMessageDelivery: ContactMessageDelivery =
  process.env.NEXT_PUBLIC_CONTACT_MESSAGE_DELIVERY === "route-handler"
    ? "route-handler"
    : "external-backend";
