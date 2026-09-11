import type { ProductShowcase } from "./types";

export const product = {
  id: "nubia-african-chess",
  name: "NUBIA: African Chess",
  source: { document: "project-decisions", section: "7–8: Product information and commerce scope" },
} as const satisfies ProductShowcase;
