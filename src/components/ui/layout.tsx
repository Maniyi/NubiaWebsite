import type { ComponentProps } from "react";

export function Container({ className = "", ...props }: ComponentProps<"div">) {
  return <div className={`container ${className}`.trim()} {...props} />;
}

export function Section({ className = "", tone = "dark", ...props }:
  ComponentProps<"section"> & { tone?: "dark" | "ivory" }) {
  return <section className={`section surface surface--${tone} ${className}`.trim()} {...props} />;
}

export function Surface({ className = "", tone = "raised", ...props }:
  ComponentProps<"div"> & { tone?: "dark" | "raised" | "ivory" }) {
  return <div className={`surface surface--${tone} ${className}`.trim()} {...props} />;
}
