import { ButtonAnchor } from "@/components/ui/button";
import { Container } from "@/components/ui/layout";
import { learn } from "@/content/learn";
import { VisualPlaceholder } from "./visual-placeholder";

export function LearnHero() {
  return (
    <section className="learn-hero" aria-labelledby="learn-title">
      <span className="learn-hero__edge" aria-hidden="true" />
      <Container className="learn-hero__layout">
        <div className="learn-hero__copy">
          <p className="eyebrow">{learn.hero.eyebrow}</p>
          <h1 id="learn-title" className="learn-line-breaks">{learn.hero.title}</h1>
          <span className="learn-ornament" aria-hidden="true">◆</span>
          <p>{learn.hero.description}</p>
          <ButtonAnchor href={learn.hero.action.href}>
            {learn.hero.action.label}<span aria-hidden="true">↓</span>
          </ButtonAnchor>
        </div>
        <VisualPlaceholder className="learn-hero__visual" label="Hero image placeholder"
          description="Final cinematic NUBIA board with both empires" />
      </Container>
    </section>
  );
}
