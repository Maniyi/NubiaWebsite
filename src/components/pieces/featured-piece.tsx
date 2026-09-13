import { AssetImage, ParchmentTexture } from "@/components/home/asset-image";
import { VisualPlaceholder } from "@/components/learn/visual-placeholder";
import { Container } from "@/components/ui/layout";
import type { PieceProfile } from "@/content/types";

function Diagram({ label, piece }: { label: string; piece: PieceProfile }) {
  return <VisualPlaceholder tone="parchment" className="piece-diagram" label={`Verified ${label} diagram required`} description={`${piece.name} — final verified board artwork will replace this guide`} />;
}

export function FeaturedPiece({ piece }: { piece: PieceProfile }) {
  return (
    <section id="featured-piece" tabIndex={-1} className="featured-profile surface surface--ivory" aria-labelledby="featured-piece-title">
      <ParchmentTexture />
      <Container>
        <header className="featured-profile__heading">
          <div><p className="eyebrow">Featured piece · Manual {piece.manualPages.map((page) => `p. ${page}`).join("–")}</p>
          <h2 id="featured-piece-title">{piece.name}</h2></div>
          <p>{piece.role}</p>
        </header>
        <div className="featured-profile__layout">
          <div className="featured-profile__portrait">
            <span className="featured-profile__index" aria-hidden="true">{String(pieceProfilesIndex(piece.id) + 1).padStart(2, "0")}</span>
            <AssetImage assetId={piece.assetId} alt={piece.alt} sizes="(min-width: 1024px) 380px, (min-width: 640px) 46vw, calc(100vw - 64px)" />
          </div>
          <div className="featured-profile__story">
            <p className="featured-profile__role">{piece.role}</p>
            <p className="featured-profile__description">{piece.description}</p>
            <dl className="piece-rules" id="movement" tabIndex={-1}>
              <div><dt>Movement</dt><dd>{piece.movement.summary}</dd></div>
              <div><dt>Capture</dt><dd>{piece.capture.summary}</dd></div>
              {piece.specialAbility ? <div><dt>{piece.specialAbility.name}</dt><dd>{piece.specialAbility.summary}</dd></div> : null}
            </dl>
            {piece.clarification ? <p className="piece-clarification"><strong>Manual clarification:</strong> {piece.clarification}</p> : null}
            <p className="piece-source">Rules source: NUBIA Playing Manual, {piece.manualPages.length === 1 ? `PDF page ${piece.manualPages[0]}` : `PDF pages ${piece.manualPages.join("–")}`}.</p>
          </div>
        </div>
        <div className={`piece-diagrams ${piece.specialAbility ? "piece-diagrams--three" : ""}`} aria-label={`${piece.name} diagram placeholders`}>
          <Diagram label="movement" piece={piece} />
          <Diagram label="capture" piece={piece} />
          {piece.specialAbility ? <Diagram label="special-ability" piece={piece} /> : null}
        </div>
      </Container>
    </section>
  );
}

function pieceProfilesIndex(id: string) {
  const order = ["imperion", "queen", "north-central-war-chief", "east-african-high-chief", "south-african-advisor", "west-african-mystic", "male-peasant", "female-peasant"];
  return order.indexOf(id);
}
