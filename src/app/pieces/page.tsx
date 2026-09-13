import type { Metadata } from "next";
import { FeaturedPiece } from "@/components/pieces/featured-piece";
import { PieceGallery } from "@/components/pieces/piece-gallery";
import { PieceSelector } from "@/components/pieces/piece-selector";
import { PiecesClosing } from "@/components/pieces/pieces-closing";
import { PiecesHero } from "@/components/pieces/pieces-hero";
import { PiecesSubnavigation } from "@/components/pieces/pieces-subnavigation";
import { getPieceProfile } from "@/content/pieces";
import "./pieces.css";

export const metadata: Metadata = {
  title: "Meet the Pieces",
  description: "Meet all eight NUBIA pieces and compare their manual-backed movement, capture and special abilities.",
};

export default async function PiecesPage({ searchParams }: { searchParams: Promise<{ piece?: string | string[] }> }) {
  const selectedPiece = getPieceProfile((await searchParams).piece);
  return <>
    <PiecesSubnavigation />
    <PiecesHero />
    <PieceSelector selectedId={selectedPiece.id} />
    <FeaturedPiece piece={selectedPiece} />
    <PieceGallery selectedId={selectedPiece.id} />
    <PiecesClosing />
  </>;
}
