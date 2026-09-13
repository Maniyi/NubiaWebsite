import { Container } from "@/components/ui/layout";
import { learn } from "@/content/learn";
import { VisualPlaceholder } from "./visual-placeholder";

export function LearnTerrainPrimer() {
  const [land, sea] = learn.terrain.types;
  return (
    <section id="the-board" tabIndex={-1} className="learn-guide-section terrain-guide" aria-labelledby="terrain-title">
      <Container>
        <div className="learn-section-title learn-section-title--overlap">
          <span aria-hidden="true" /><h2 id="terrain-title" tabIndex={-1}>{learn.terrain.title}</h2><span aria-hidden="true" />
        </div>
        <p className="terrain-guide__intro">{learn.terrain.description}</p>
        <div className="terrain-composition">
          <div className="terrain-panel terrain-panel--land">
            <span className="terrain-panel__swatch" aria-hidden="true" />
            <div><h3>{land.name}</h3><p>{land.description}</p></div>
          </div>
          <VisualPlaceholder label="LAND & SEA board placeholder"
            description="Verified LAND and SEA board artwork required" tone="parchment" className="terrain-composition__board" />
          <div className="terrain-panel terrain-panel--sea">
            <span className="terrain-panel__swatch" aria-hidden="true" />
            <div><h3>{sea.name}</h3><p>{sea.description}</p></div>
          </div>
        </div>
        <p className="learn-inline-note">{learn.terrain.note}</p>
      </Container>
    </section>
  );
}
