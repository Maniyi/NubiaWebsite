import storefrontData from "./storefront.json";

export type ContentStatus = "prototype" | "approved";

export type ProductEdition = {
  status: ContentStatus;
  id: string;
  label: string;
};

export type PrototypeProduct = {
  status: "prototype";
  id: string;
  name: string;
  eyebrow: string;
  tagline: string;
  description: string;
  priceMinor: number;
  currency: string;
  defaultEditionId: string;
  defaultQuantity: number;
  maximumQuantity: number;
  editions: ProductEdition[];
  rating: { status: "prototype"; label: string };
  gallery: Array<{ id: string; label: string; description: string }>;
  reassurance: Array<{ label: string; detail: string }>;
};

type StorefrontContent = Omit<typeof storefrontData, "status" | "primaryProduct"> & {
  status: "prototype";
  primaryProduct: PrototypeProduct;
};

export const storefront = storefrontData as StorefrontContent;

export function formatPrice(priceMinor: number, currency: string) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency }).format(priceMinor / 100);
}
