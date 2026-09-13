"use client";

import Link from "next/link";
import { CheckoutProgress } from "@/components/checkout/checkout-progress";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/layout";
import { formatPrice, storefront } from "@/content/storefront";
import { useCart } from "./cart-provider";

const maximumQuantity = storefront.primaryProduct.maximumQuantity;

export function CartPage() {
  const { lines, hydrated, addItem, updateQuantity, removeItem } = useCart();
  const subtotal = lines.reduce((total, line) => total + line.unitPriceMinor * line.quantity, 0);
  const currency = lines[0]?.currency ?? storefront.primaryProduct.currency;
  const recommendations = storefront.relatedProducts.items;

  function addAccessory(item: (typeof recommendations)[number]) {
    addItem({
      productId: item.id,
      productName: item.name,
      editionId: "prototype-accessory",
      editionLabel: "Prototype accessory",
      quantity: 1,
      unitPriceMinor: item.priceMinor,
      currency: item.currency,
    });
  }

  return (
    <div className="cart-page">
      <section className="commerce-masthead" aria-labelledby="cart-title">
        <Container className="commerce-masthead__inner">
          <div>
            <nav className="commerce-breadcrumb" aria-label="Breadcrumb">
              <ol><li><Link href="/">Home</Link></li><li aria-hidden="true">›</li><li><span aria-current="page">Cart</span></li></ol>
            </nav>
            <h1 id="cart-title">Your Cart</h1>
            <p>Review your prototype items before continuing.</p>
          </div>
          <CheckoutProgress current={1} />
        </Container>
      </section>

      <section className="cart-surface surface surface--ivory">
        <Container className="cart-layout">
          <div className="cart-content">
            {!hydrated ? (
              <div className="cart-empty" role="status"><p>Loading your saved cart…</p></div>
            ) : lines.length === 0 ? (
              <div className="cart-empty">
                <span aria-hidden="true">◇</span>
                <h2>Your cart is empty</h2>
                <p>Add a prototype game or accessory to begin the frontend checkout flow.</p>
                <ButtonLink href="/shop">Return to Shop</ButtonLink>
              </div>
            ) : (
              <div className="cart-table" role="region" aria-label="Cart items">
                <div className="cart-table__head" aria-hidden="true"><span>Product</span><span>Price</span><span>Quantity</span><span>Total</span></div>
                <ul className="cart-page-lines">
                  {lines.map((line) => {
                    const key = `${line.productId}-${line.editionId}`;
                    return (
                      <li key={key} className="cart-page-line">
                        <div className="cart-page-line__product">
                          <div className="commerce-placeholder" role="img" aria-label={`Product photography placeholder for ${line.productName}`}><span>N</span></div>
                          <div><h2>{line.productName}</h2><p>{line.editionLabel}</p><p className="prototype-tag">Prototype content</p></div>
                        </div>
                        <p className="cart-page-line__price"><span>Price</span>{formatPrice(line.unitPriceMinor, line.currency)}</p>
                        <div className="cart-page-line__quantity">
                          <span>Quantity</span>
                          <div role="group" aria-label={`Quantity for ${line.editionLabel} ${line.productName}`}>
                            <button type="button" onClick={() => updateQuantity(line.productId, line.editionId, line.quantity - 1)} disabled={line.quantity === 1} aria-label={`Decrease ${line.productName} quantity`}>−</button>
                            <output aria-live="polite">{line.quantity}</output>
                            <button type="button" onClick={() => updateQuantity(line.productId, line.editionId, line.quantity + 1)} disabled={line.quantity === maximumQuantity} aria-label={`Increase ${line.productName} quantity`}>+</button>
                          </div>
                        </div>
                        <p className="cart-page-line__subtotal"><span>Total</span>{formatPrice(line.unitPriceMinor * line.quantity, line.currency)}</p>
                        <button type="button" className="cart-page-line__remove" onClick={() => removeItem(line.productId, line.editionId)} aria-label={`Remove ${line.editionLabel} ${line.productName}`}>Remove</button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}

            <section className="recommendations" aria-labelledby="recommendations-title">
              <div className="recommendations__heading"><p className="eyebrow">Prototype accessories</p><h2 id="recommendations-title">Complete the Experience</h2><p>Concept items and prices shown for interface testing only.</p></div>
              <div className="recommendations__grid">
                {recommendations.map((item) => (
                  <article key={item.id} className="recommendation-card">
                    <div className="commerce-placeholder" role="img" aria-label={item.imageLabel}><span>N</span></div>
                    <div><p className="prototype-tag">Prototype</p><h3>{item.name}</h3><p>{formatPrice(item.priceMinor, item.currency)}</p><button type="button" onClick={() => addAccessory(item)}>Add to Cart</button></div>
                  </article>
                ))}
              </div>
            </section>
          </div>

          <aside className="order-summary" aria-labelledby="cart-summary-title">
            <h2 id="cart-summary-title">Order Summary</h2>
            <dl><div><dt>Subtotal</dt><dd>{formatPrice(subtotal, currency)}</dd></div><div><dt>Shipping</dt><dd>Calculated later</dd></div><div><dt>Taxes</dt><dd>Calculated later</dd></div><div className="order-summary__total"><dt>Total</dt><dd>{formatPrice(subtotal, currency)}</dd></div></dl>
            <p className="order-summary__notice">{storefront.notice} Shipping, taxes and payment are not connected.</p>
            {hydrated && lines.length > 0 ? <ButtonLink href="/checkout" className="order-summary__action">Proceed to Checkout</ButtonLink> : <ButtonLink href="/shop" className="order-summary__action">Return to Shop</ButtonLink>}
          </aside>
        </Container>
      </section>
    </div>
  );
}
