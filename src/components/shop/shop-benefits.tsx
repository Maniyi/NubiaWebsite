import { Container } from "@/components/ui/layout";
import { storefront } from "@/content/storefront";

export function ShopBenefits() {
  return (
    <section className="shop-benefits surface surface--ivory" aria-label="NUBIA game benefits">
      <Container>
        <ul>{storefront.benefits.map((benefit) => <li key={benefit.title}>
          <span className="benefit-marker" aria-hidden="true">{benefit.marker}</span>
          <h2>{benefit.title}</h2>
          <p>{benefit.description}</p>
        </li>)}</ul>
      </Container>
    </section>
  );
}
