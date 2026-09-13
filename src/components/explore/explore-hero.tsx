import { VisualPlaceholder } from "@/components/learn/visual-placeholder";
import { ButtonAnchor } from "@/components/ui/button";
import { Container } from "@/components/ui/layout";
import { explore } from "@/content/explore";

export function ExploreHero() {
  return (
    <section className="explore-hero" aria-labelledby="explore-title">
      <span className="explore-hero__edge" aria-hidden="true" />
      <Container className="explore-hero__layout">
        <div className="explore-hero__copy">
          <p className="eyebrow ruled-eyebrow">{explore.hero.eyebrow}</p>
          <h1 id="explore-title">{explore.hero.title.split("\n").map((line) => <span key={line}>{line}</span>)}</h1>
          <p>{explore.hero.description}</p>
          <ButtonAnchor href={explore.hero.action.href} variant="secondary">
            {explore.hero.action.label}<span aria-hidden="true">↓</span>
          </ButtonAnchor>
        </div>
        <VisualPlaceholder
          className="explore-board-placeholder explore-hero__board"
          label="Final NUBIA board overview"
          description="Verified 100-square board artwork and cell mapping required"
        />
      </Container>
      <p className="explore-hero__motto">Two empires <span aria-hidden="true">◆</span> Five regions <span aria-hidden="true">◆</span> One board</p>
    </section>
  );
}
