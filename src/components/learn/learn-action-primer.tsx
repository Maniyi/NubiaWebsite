import { AssetImage } from "@/components/home/asset-image";
import { Container } from "@/components/ui/layout";
import { learn } from "@/content/learn";
import { VisualPlaceholder } from "./visual-placeholder";

export function LearnActionPrimer() {
  return (
    <section id="movement" tabIndex={-1} className="learn-guide-section movement-guide" aria-labelledby="movement-title">
      <Container>
        <div className="learn-section-title">
          <span aria-hidden="true" /><h2 id="movement-title" tabIndex={-1}>{learn.movement.title}</h2><span aria-hidden="true" />
        </div>
        <div className="movement-composition">
          <div className="piece-index">
            <p className="eyebrow">Piece index</p>
            <ul>{learn.movement.pieceIndex.map((piece, index) => (
              <li key={piece} data-featured={index === 0}><span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>{piece}</li>
            ))}</ul>
          </div>
          <figure className="featured-piece">
            <div><AssetImage assetId={learn.movement.featured.assetId} alt={learn.movement.featured.alt}
              sizes="(min-width: 1280px) 240px, (min-width: 768px) 24vw, 72vw" /></div>
            <figcaption><span>{learn.movement.featured.label}</span>{learn.movement.featured.name}</figcaption>
          </figure>
          <div className="movement-explainer">
            <p>{learn.movement.description}</p>
            <dl>{learn.movement.terms.map((item) => (
              <div key={item.term}><dt><span aria-hidden="true">{item.mark}</span>{item.term}</dt><dd>{item.definition}</dd></div>
            ))}</dl>
            <p className="learn-inline-note">{learn.movement.note}</p>
          </div>
          <div className="movement-examples" aria-label="Future board examples">
            <p className="eyebrow">Board examples</p>
            <VisualPlaceholder label="Movement example placeholder"
              description="Piece positioned on verified board artwork" tone="land" />
            <VisualPlaceholder label="Capture or ability placeholder"
              description="Verified capture or special-ability example" tone="sea" />
          </div>
        </div>
      </Container>
    </section>
  );
}
