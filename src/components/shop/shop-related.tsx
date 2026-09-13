import { VisualPlaceholder } from "@/components/learn/visual-placeholder";
import { Container } from "@/components/ui/layout";
import { formatPrice, storefront } from "@/content/storefront";

export function ShopRelated() {
  return (
    <section className="shop-related surface surface--ivory" aria-labelledby="related-title">
      <Container>
        <header className="shop-related__heading">
          <h2 id="related-title">{storefront.relatedProducts.title}</h2>
          <p>{storefront.relatedProducts.notice}</p>
        </header>
        <div className="related-grid">{storefront.relatedProducts.items.map((item) => <article key={item.id} className="related-card">
          <VisualPlaceholder tone="parchment" label={item.imageLabel} description="Prototype accessory concept" />
          <div><p className="eyebrow">Prototype concept</p><h3>{item.name}</h3><p className="related-card__price">{formatPrice(item.priceMinor, item.currency)}</p></div>
        </article>)}</div>
      </Container>
    </section>
  );
}
