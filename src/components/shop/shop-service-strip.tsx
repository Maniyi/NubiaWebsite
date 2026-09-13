import { Container } from "@/components/ui/layout";
import { storefront } from "@/content/storefront";

export function ShopServiceStrip() {
  return (
    <section className="service-strip" aria-label="Store service information">
      <Container><dl>{storefront.services.map((service) => <div key={service.title}>
        <span className="service-strip__marker" aria-hidden="true">{service.marker}</span>
        <span><dt>{service.title}</dt><dd>{service.description}</dd></span>
      </div>)}</dl></Container>
    </section>
  );
}
