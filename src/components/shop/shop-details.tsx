import { VisualPlaceholder } from "@/components/learn/visual-placeholder";
import { Container } from "@/components/ui/layout";
import { storefront } from "@/content/storefront";

export function ShopDetails() {
  return (
    <section className="shop-details" aria-labelledby="included-title">
      <Container className="shop-details__layout">
        <div className="included-section">
          <header className="shop-heading">
            <p className="eyebrow">Physical product</p>
            <h2 id="included-title">What’s Included</h2>
            <p>{storefront.included.notice}</p>
          </header>
          <div className="included-grid">{storefront.included.items.map((item) => <article key={item.id} className="included-card">
            <VisualPlaceholder label={item.imageLabel} description="Prototype product-content image slot" />
            <div><h3>{item.title}</h3><p>{item.description}</p></div>
          </article>)}</div>
        </div>

        <aside className="specifications-panel" aria-labelledby="specifications-title">
          <p className="eyebrow">Prototype product data</p>
          <h2 id="specifications-title">{storefront.specifications.title}</h2>
          <dl>{storefront.specifications.rows.map((row) => <div key={row.label}><dt>{row.label}</dt><dd>{row.value}</dd></div>)}</dl>
        </aside>

        <aside className="why-panel" aria-labelledby="why-title">
          <h2 id="why-title">{storefront.whyNubia.title}</h2>
          <ul>{storefront.whyNubia.points.map((point) => <li key={point}><span aria-hidden="true">✓</span>{point}</li>)}</ul>
          <div className="testimonial-placeholder" role="img" aria-label={`${storefront.testimonial.label}. ${storefront.testimonial.description}`}>
            <span aria-hidden="true">“</span>
            <p className="eyebrow">{storefront.testimonial.label}</p>
            <p>{storefront.testimonial.description}</p>
          </div>
        </aside>
      </Container>
    </section>
  );
}
