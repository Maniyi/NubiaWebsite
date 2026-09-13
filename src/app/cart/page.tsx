import type { Metadata } from "next";
import { CartPage } from "@/components/cart/cart-page";

export const metadata: Metadata = {
  title: "Your Cart",
  description: "Review the items in your NUBIA frontend prototype cart.",
};

export default function CartRoute() {
  return <CartPage />;
}
