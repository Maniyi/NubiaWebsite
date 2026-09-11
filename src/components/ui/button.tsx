import Link from "next/link";
import type { ComponentProps } from "react";

type Variant = "primary" | "secondary" | "text";
type Styling = { variant?: Variant; className?: string };

function classes(variant: Variant, className = "") {
  return `button button--${variant} ${className}`.trim();
}

export function Button({ variant = "primary", className, type = "button", ...props }:
  ComponentProps<"button"> & Styling) {
  return <button type={type} className={classes(variant, className)} {...props} />;
}

export function ButtonLink({ variant = "primary", className, ...props }:
  ComponentProps<typeof Link> & Styling) {
  return <Link className={classes(variant, className)} {...props} />;
}
