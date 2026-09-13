import { Container, Section } from "@/components/ui/layout";
import { ButtonAnchor } from "@/components/ui/button";
import { home } from "@/content/home";
import { AssetImage } from "./asset-image";

export function HomeDiscovery() {
  return (
    <Section className="home-discovery" aria-labelledby="discovery-title">
      <Container className="home-discovery__layout">
        <div className="home-discovery__copy">
          <p className="eyebrow ruled-eyebrow">{home.closing.eyebrow}</p>
          <h2 id="discovery-title" className="line-breaks">{home.closing.title}</h2>
          <p>{home.closing.description}</p>
          <ButtonAnchor href={home.closing.action.href}>{home.closing.action.label}<span aria-hidden="true">↑</span></ButtonAnchor>
          <p className="home-discovery__note">{home.closing.futureNote}</p>
        </div>
        <div className="home-discovery__portrait" aria-hidden="true">
          <AssetImage assetId="reference-footer-image" alt="" sizes="(min-width: 960px) 320px, 1px" />
        </div>
      </Container>
    </Section>
  );
}
