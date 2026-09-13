import type { Metadata } from "next";
import { CheckoutPage } from "@/components/checkout/checkout-page";

export const metadata: Metadata = {
  title: "Checkout Prototype",
  description: "Continue through the frontend-only NUBIA checkout prototype.",
};

export default function CheckoutRoute() {
  return <CheckoutPage />;
}
