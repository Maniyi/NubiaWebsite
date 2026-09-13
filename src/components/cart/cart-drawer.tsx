"use client";

import { useEffect, useRef } from "react";
import { formatPrice, storefront } from "@/content/storefront";
import { useCart } from "./cart-provider";

export function CartDrawer() {
  const { lines, isOpen, closeCart, removeItem } = useCart();
  const drawer = useRef<HTMLElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);
  const subtotal = lines.reduce((total, line) => total + line.unitPriceMinor * line.quantity, 0);
  const currency = lines[0]?.currency ?? storefront.primaryProduct.currency;

  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButton.current?.focus();

    function keydown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        closeCart();
        return;
      }
      if (event.key !== "Tab" || !drawer.current) return;
      const focusable = Array.from(drawer.current.querySelectorAll<HTMLElement>("button:not([disabled]), [href], [tabindex]:not([tabindex='-1'])"));
      const first = focusable[0];
      const last = focusable.at(-1);
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    }

    document.addEventListener("keydown", keydown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", keydown);
    };
  }, [isOpen, closeCart]);

  if (!isOpen) return null;

  return (
    <div className="cart-backdrop" onPointerDown={(event) => { if (event.target === event.currentTarget) closeCart(); }}>
      <aside ref={drawer} className="cart-drawer" role="dialog" aria-modal="true" aria-labelledby="cart-title" aria-describedby="cart-notice">
        <header className="cart-drawer__header">
          <div>
            <p className="eyebrow">Frontend prototype</p>
            <h2 id="cart-title">Your cart</h2>
          </div>
          <button ref={closeButton} type="button" className="cart-drawer__close" onClick={closeCart} aria-label="Close cart">×</button>
        </header>
        <p id="cart-notice" className="cart-drawer__notice">{storefront.notice}</p>

        {lines.length === 0 ? (
          <div className="cart-drawer__empty">
            <span aria-hidden="true">◇</span>
            <p>Your prototype cart is empty.</p>
          </div>
        ) : (
          <ul className="cart-lines">
            {lines.map((line) => (
              <li key={`${line.productId}-${line.editionId}`} className="cart-line">
                <div className="cart-line__visual" aria-hidden="true">N</div>
                <div className="cart-line__copy">
                  <h3>{line.productName}</h3>
                  <p>{line.editionLabel} · Quantity {line.quantity}</p>
                  <p>{formatPrice(line.unitPriceMinor, line.currency)} each</p>
                  <button type="button" onClick={() => removeItem(line.productId, line.editionId)}>Remove {line.editionLabel}</button>
                </div>
                <p className="cart-line__subtotal">{formatPrice(line.unitPriceMinor * line.quantity, line.currency)}</p>
              </li>
            ))}
          </ul>
        )}

        <div className="cart-drawer__summary">
          <span>Prototype subtotal</span>
          <strong>{formatPrice(subtotal, currency)}</strong>
        </div>
        <p className="cart-drawer__checkout-note">Checkout integration will be added after payment and order requirements are approved.</p>
      </aside>
    </div>
  );
}
