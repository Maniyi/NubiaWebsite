import Link from "next/link";
import { AssetImage } from "@/components/home/asset-image";
import { Container } from "@/components/ui/layout";
import { pieceProfiles } from "@/content/pieces";

export function PieceGallery({ selectedId }: { selectedId: string }) {
  return (
    <section id="all-pieces" tabIndex={-1} className="piece-catalogue surface surface--ivory" aria-labelledby="all-pieces-title">
      <Container>
        <header className="piece-catalogue__heading"><p className="eyebrow">The complete population</p><h2 id="all-pieces-title">All eight piece types</h2><p>Each sculpture carries a distinct visual identity. Select one to bring its verified rule profile into focus.</p></header>
        <ol className="piece-catalogue__grid">{pieceProfiles.map((piece, index) => (
          <li key={piece.id}><article className="piece-card" data-selected={piece.id === selectedId}>
            <div className="piece-card__portrait"><span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span><AssetImage assetId={piece.assetId} alt={piece.alt} sizes="(min-width: 1200px) 260px, (min-width: 768px) 45vw, calc(100vw - 64px)" /></div>
            <div className="piece-card__copy"><p>{piece.role}</p><h3>{piece.name}</h3><p>{piece.description}</p>
              <Link href={`/pieces?piece=${piece.id}#featured-piece`} aria-current={piece.id === selectedId ? "location" : undefined}>View {piece.name}<span aria-hidden="true">→</span></Link>
            </div>
          </article></li>
        ))}</ol>
      </Container>
    </section>
  );
}
