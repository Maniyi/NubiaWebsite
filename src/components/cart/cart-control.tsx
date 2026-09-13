"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "./cart-provider";

export function CartControl() {
  const { itemCount } = useCart();
  const pathname = usePathname();
  return (
    <Link href="/cart" className="cart-control" aria-current={pathname === "/cart" ? "page" : undefined}
      aria-label={`View prototype cart, ${itemCount} ${itemCount === 1 ? "item" : "items"}`}>
      <svg aria-hidden="true" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 4h2l2 11h10l2-7H6" /><circle cx="9" cy="19" r="1.25" /><circle cx="17" cy="19" r="1.25" />
      </svg>
      <span className="cart-control__count" aria-hidden="true">{itemCount}</span>
    </Link>
  );
}
