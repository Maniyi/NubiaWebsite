import type { Metadata } from "next";
import { ShopBenefits } from "@/components/shop/shop-benefits";
import { ShopDetails } from "@/components/shop/shop-details";
import { ShopRelated } from "@/components/shop/shop-related";
import { ShopServiceStrip } from "@/components/shop/shop-service-strip";
import { ShopStorefront } from "@/components/shop/shop-storefront";
import "./shop.css";

export const metadata: Metadata = {
  title: "NUBIA Game",
  description: "Discover NUBIA: African Chess, an African-inspired physical strategy board game, its board and eight piece types.",
};

export default function ShopPage() {
  return (
    <>
      <ShopStorefront />
      <ShopBenefits />
      <ShopDetails />
      <ShopRelated />
      <ShopServiceStrip />
    </>
  );
}
