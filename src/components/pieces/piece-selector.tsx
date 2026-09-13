import Link from "next/link";
import { AssetImage } from "@/components/home/asset-image";
import { Container } from "@/components/ui/layout";
import { pieceProfiles } from "@/content/pieces";

export function PieceSelector({ selectedId }: { selectedId: string }) {
  return (
    <nav id="piece-selector" tabIndex={-1} className="piece-selector" aria-label="Choose a featured piece">
      <Container>
        <p className="piece-selector__label">Select a piece</p>
        <ul>{pieceProfiles.map((piece) => {
          const selected = piece.id === selectedId;
          return <li key={piece.id}>
            <Link href={`/pieces?piece=${piece.id}#featured-piece`} aria-current={selected ? "location" : undefined}>
              <span className="piece-selector__portrait"><AssetImage assetId={piece.assetId} alt="" sizes="72px" loading={selected ? "eager" : undefined} /></span>
              <span><strong>{piece.name}</strong><small>{piece.role}</small></span>
            </Link>
          </li>;
        })}</ul>
      </Container>
    </nav>
  );
}
