import { Container, Section } from "@/components/ui/layout";
import { home, homePieces } from "@/content/home";
import { AssetImage, ParchmentTexture } from "./asset-image";

export function HomePieces() {
  return (
    <Section id="pieces" tabIndex={-1} className="home-pieces textured-section" tone="ivory" aria-labelledby="pieces-title">
      <ParchmentTexture />
      <Container>
        <div className="home-section-heading">
          <p className="eyebrow">{home.pieces.eyebrow}</p>
          <h2 id="pieces-title" tabIndex={-1}>{home.pieces.title}</h2>
          <p>{home.pieces.description}</p>
          <span className="ornament-divider" aria-hidden="true">◆</span>
        </div>
        <ul className="piece-grid">
          {homePieces.map((piece, index) => (
            <li key={piece.id} className="piece-display">
              <div className="piece-display__inset">
                <span className="piece-display__index" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                <AssetImage assetId={piece.assetId} alt={piece.alt}
                  sizes="(min-width: 1280px) 284px, (min-width: 1024px) 23vw, (min-width: 640px) 43vw, calc(100vw - 80px)" />
              </div>
              <div className="piece-display__caption">
                <p className="eyebrow">{piece.role}</p>
                <h3>{piece.name}</h3>
                <p>{piece.introduction}</p>
              </div>
            </li>
          ))}
        </ul>
        <p className="asset-note">{home.pieces.imageNote}</p>
      </Container>
    </Section>
  );
}
