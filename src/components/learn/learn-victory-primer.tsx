import { Container } from "@/components/ui/layout";
import { learn } from "@/content/learn";
import { ResourceMarkers } from "./learn-foundations";
import { VisualPlaceholder } from "./visual-placeholder";

export function LearnVictoryPrimer() {
  return (
    <section id="win-condition" tabIndex={-1} className="learn-guide-section victory-guide" aria-labelledby="victory-title">
      <Container>
        <div className="learn-section-title">
          <span aria-hidden="true" /><h2 id="victory-title" tabIndex={-1}>{learn.victory.title}</h2><span aria-hidden="true" />
        </div>
        <div className="victory-composition">
          <VisualPlaceholder label="Victory diagram placeholder"
            description="Peasant approaching an opponent resource mine" tone="parchment" className="victory-composition__visual" />
          <div className="victory-composition__copy">
            <p>{learn.victory.description}</p>
            <p className="victory-conclusion">{learn.victory.conclusion}</p>
            <a href="#how-to-play">Review the quick guide <span aria-hidden="true">↑</span></a>
          </div>
          <div className="victory-resources">
            <p className="eyebrow">The five resource mines</p>
            <ResourceMarkers />
            <p><strong>Keep the terms distinct:</strong> {learn.victory.distinction}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
