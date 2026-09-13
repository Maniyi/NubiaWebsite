import { ButtonAnchor } from "@/components/ui/button";
import { Container } from "@/components/ui/layout";
import { learn } from "@/content/learn";

export function LearnNextSteps() {
  return (
    <section className="learn-next" aria-labelledby="next-title">
      <Container className="learn-next__layout">
        <div><p className="eyebrow">{learn.next.eyebrow}</p><h2 id="next-title">{learn.next.title}</h2><p>{learn.next.description}</p></div>
        <ul aria-label="Future learning guides">{learn.next.directions.map((direction) => (
          <li key={direction.label}><strong>{direction.label}</strong><span>{direction.description}</span></li>
        ))}</ul>
        <ButtonAnchor href={learn.next.action.href} variant="secondary">
          {learn.next.action.label}<span aria-hidden="true">↑</span>
        </ButtonAnchor>
      </Container>
    </section>
  );
}
