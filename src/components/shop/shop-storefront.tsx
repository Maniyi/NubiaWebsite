"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useCart } from "@/components/cart/cart-provider";
import { VisualPlaceholder } from "@/components/learn/visual-placeholder";
import { Container } from "@/components/ui/layout";
import { formatPrice, storefront } from "@/content/storefront";

function CartIcon() {
  return <svg aria-hidden="true" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M3 4h2l2 11h10l2-7H6" /><circle cx="9" cy="19" r="1.25" /><circle cx="17" cy="19" r="1.25" /></svg>;
}

export function ShopStorefront() {
  const product = storefront.primaryProduct;
  const [selectedGalleryId, setSelectedGalleryId] = useState(product.gallery[0].id);
  const [selectedEditionId, setSelectedEditionId] = useState(product.defaultEditionId);
  const [quantity, setQuantity] = useState(product.defaultQuantity);
  const { addItem, setItem, openCart } = useCart();
  const router = useRouter();
  const selectedGallery = product.gallery.find((item) => item.id === selectedGalleryId) ?? product.gallery[0];
  const selectedEdition = product.editions.find((edition) => edition.id === selectedEditionId) ?? product.editions[0];

  function cartLine() {
    return {
      productId: product.id,
      productName: product.name,
      editionId: selectedEdition.id,
      editionLabel: selectedEdition.label,
      quantity,
      unitPriceMinor: product.priceMinor,
      currency: product.currency,
    };
  }

  return (
    <section className="shop-hero" aria-labelledby="shop-title">
      <Container>
        <nav className="shop-breadcrumb" aria-label="Breadcrumb">
          <ol>{storefront.breadcrumb.map((item, index) => <li key={`${item.href}-${item.label}`}>
            {index > 0 && <span aria-hidden="true">›</span>}
            <Link href={item.href} aria-current={index === storefront.breadcrumb.length - 1 ? "page" : undefined}>{item.label}</Link>
          </li>)}</ol>
        </nav>

        <div className="shop-hero__grid">
          <div className="product-gallery">
            <div className="product-gallery__main" aria-live="polite">
              <VisualPlaceholder label={selectedGallery.label} description={selectedGallery.description} />
            </div>
            <div className="product-gallery__thumbnails" aria-label="Choose product view">
              {product.gallery.slice(1).map((item) => (
                <button key={item.id} type="button" className="product-thumbnail" aria-pressed={selectedGalleryId === item.id}
                  aria-label={`Show ${item.label}`} onClick={() => setSelectedGalleryId(item.id)}>
                  <VisualPlaceholder label={item.label} description={item.description} />
                  {item.id === "video" && <span className="product-thumbnail__play" aria-hidden="true">▶</span>}
                </button>
              ))}
            </div>
          </div>

          <div className="purchase-panel">
            <p className="eyebrow">{product.eyebrow}</p>
            <h1 id="shop-title">{product.name}</h1>
            <p className="purchase-panel__tagline">{product.tagline}</p>
            <p className="purchase-panel__description">{product.description}</p>
            <div className="prototype-rating" aria-label={product.rating.label}>
              <span aria-hidden="true">☆ ☆ ☆ ☆ ☆</span>
              <p>{product.rating.label}</p>
            </div>
            <p className="prototype-price">{formatPrice(product.priceMinor, product.currency)}</p>
            <p className="prototype-notice">{storefront.notice}</p>

            <fieldset className="edition-selector">
              <legend>Edition</legend>
              <div>{product.editions.map((edition) => (
                <label key={edition.id} className="edition-option">
                  <input type="radio" name="edition" value={edition.id} checked={selectedEditionId === edition.id}
                    onChange={() => setSelectedEditionId(edition.id)} />
                  <span>{edition.label}</span>
                </label>
              ))}</div>
            </fieldset>

            <div className="quantity-selector">
              <p id="quantity-label">Quantity</p>
              <div role="group" aria-labelledby="quantity-label">
                <button type="button" onClick={() => setQuantity((value) => Math.max(1, value - 1))} disabled={quantity === 1} aria-label="Decrease quantity">−</button>
                <output aria-live="polite" aria-label={`Quantity ${quantity}`}>{quantity}</output>
                <button type="button" onClick={() => setQuantity((value) => Math.min(product.maximumQuantity, value + 1))} disabled={quantity === product.maximumQuantity} aria-label="Increase quantity">+</button>
              </div>
              <p className="quantity-selector__limit">Prototype limit: {product.maximumQuantity}</p>
            </div>

            <div className="purchase-actions">
              <button type="button" className="purchase-button purchase-button--primary" onClick={(event) => { addItem(cartLine()); openCart(event.currentTarget); }}><CartIcon /> Add to Cart</button>
              <button type="button" className="purchase-button purchase-button--secondary" onClick={() => { setItem(cartLine()); router.push("/checkout"); }}>Buy It Now</button>
            </div>

            <dl className="purchase-reassurance">{product.reassurance.map((item) => <div key={item.label}><dt>{item.label}</dt><dd>{item.detail}</dd></div>)}</dl>
          </div>
        </div>
      </Container>
    </section>
  );
}
