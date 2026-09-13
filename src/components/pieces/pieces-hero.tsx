import { VisualPlaceholder } from "@/components/learn/visual-placeholder";
import { ButtonAnchor } from "@/components/ui/button";
import { Container } from "@/components/ui/layout";
import { piecesPage } from "@/content/pieces";

export function PiecesHero() {
  return (
    <section id="pieces-overview" tabIndex={-1} className="pieces-hero" aria-labelledby="pieces-title">
      <span className="pieces-hero__edge" aria-hidden="true" />
      <Container className="pieces-hero__layout">
        <div className="pieces-hero__copy">
          <p className="eyebrow">{piecesPage.hero.eyebrow}</p>
          <h1 id="pieces-title">{piecesPage.hero.title.split("\n").map((line) => <span key={line}>{line}</span>)}</h1>
          <span className="pieces-ornament" aria-hidden="true">◆</span>
          <p>{piecesPage.hero.description}</p>
          <ButtonAnchor href={piecesPage.hero.action.href} variant="secondary">{piecesPage.hero.action.label}<span aria-hidden="true">↓</span></ButtonAnchor>
        </div>
        <VisualPlaceholder className="pieces-hero__visual" label="Final piece collection image" description="All eight NUBIA pieces presented on verified board artwork" />
      </Container>
    </section>
  );
}
