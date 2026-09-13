"use client";

import { useCart } from "./cart-provider";

export function CartControl() {
  const { itemCount, openCart } = useCart();
  return (
    <button type="button" className="cart-control" onClick={(event) => openCart(event.currentTarget)} aria-label={`Open prototype cart, ${itemCount} ${itemCount === 1 ? "item" : "items"}`}>
      <svg aria-hidden="true" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 4h2l2 11h10l2-7H6" /><circle cx="9" cy="19" r="1.25" /><circle cx="17" cy="19" r="1.25" />
      </svg>
      <span className="cart-control__count" aria-hidden="true">{itemCount}</span>
    </button>
  );
}
