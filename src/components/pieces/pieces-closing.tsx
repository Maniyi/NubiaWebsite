import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/layout";

export function PiecesClosing() {
  return (
    <section className="pieces-closing" aria-labelledby="pieces-closing-title">
      <Container className="pieces-closing__layout">
        <div><p className="eyebrow">From identity to strategy</p><h2 id="pieces-closing-title">Put the pieces in context.</h2><p>Learn the foundations, then explore the regions and terrain that shape every move.</p></div>
        <div className="pieces-closing__actions"><ButtonLink href="/learn">Learn to play<span aria-hidden="true">→</span></ButtonLink><ButtonLink href="/explore" variant="secondary">Explore the board<span aria-hidden="true">→</span></ButtonLink></div>
      </Container>
    </section>
  );
}
