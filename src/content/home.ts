import { board, pieces, regions, resources } from "./game";
import type { SourceReference } from "./types";

const overview = { document: "playing-manual", page: 2 } as const;

export const home = {
  hero: {
    eyebrow: "NUBIA · African Chess",
    headline: ["Conquer with strategy.", "Claim the resources.", "Build your legacy."],
    description: "Two African empires. A world of land, sea and resources. NUBIA is a strategy board game where guiding a peasant to an opponent’s resource mine wins the game.",
    assetId: "temporary-hero-chess-board",
    alt: "Temporary atmospheric artwork of conventional chess pieces overlooking a dramatic landscape; not the NUBIA board.",
    caption: "Temporary atmosphere artwork. Not the NUBIA board.",
    actions: [
      { label: "Explore the World", href: "#world" },
      { label: "Meet the Pieces", href: "#pieces" },
    ],
    source: overview,
  },
  facts: [
    { value: String(board.squareCount), label: "Board squares", detail: "Across LAND and SEA", source: overview },
    { value: String(pieces.length), label: "Piece types", detail: "From Imperion to Peasant", source: overview },
    { value: String(regions.length), label: "Board regions", detail: "From Palace to Border", source: overview },
    { value: String(resources.length), label: "Resource mines", detail: "The focus of the contest", source: overview },
  ],
  objective: {
    eyebrow: "01 / The objective",
    title: "A peasant’s journey.\nAn empire’s victory.",
    description: "Guide a Male or Female Peasant onto any one of the five natural resource mines in your opponent’s Outskirts row.",
    conclusion: "Landing on a mine wins the game immediately—even if the peasant could then be captured.",
    source: { document: "playing-manual", page: 12 },
    steps: [
      { title: "Your peasant", description: "Either a Male or Female Peasant can win the game." },
      { title: "Your opponent’s Outskirts", description: "The row containing their five natural resource mines." },
      { title: "Any one resource mine", description: "Land on one of these mines to claim victory." },
    ],
  },
  world: {
    eyebrow: "02 / Explore the world of NUBIA",
    title: "A world within the board.",
    description: "Royal heritage, trade, architecture and natural wonders. Five regions connect the board to Africa.",
    orderNote: "From the royal area toward the centre of the board",
    imageNote: "Temporary reference imagery; not a map of the board or final product photography.",
    source: overview,
  },
  pieces: {
    eyebrow: "03 / Meet the eight pieces",
    title: "The faces of an empire.",
    description: "From royal authority to everyday labor, meet NUBIA’s eight distinct piece types.",
    imageNote: "Temporary sculpture references. Final product appearance is not yet confirmed.",
    source: { document: "design-system", section: "12. Game piece asset style" },
  },
  closing: {
    eyebrow: "Strategy. Heritage. Discovery.",
    title: "Every empire begins\nwith understanding.",
    description: "Discover the objective, explore the five regions, and get to know the pieces that inhabit them.",
    action: { label: "Discover the Objective", href: "#objective" },
    futureNote: "Dedicated learning pages and a product showcase will follow. For now, discover NUBIA here.",
  },
} as const;

const regionPresentation = {
  palace: { assetId: "reference-footer-image", alt: "Bronze-toned royal portrait with an ornate headdress.", description: "Royal objects, from the Imperion’s throne to crowns and regalia." },
  market: { assetId: "reference-cocoa-exporting-commodities", alt: "Cocoa pods and beans laid across sacks.", description: "Export commodities, including cocoa, gold and palm oil." },
  "town-center": { assetId: "reference-man-made-wonder", alt: "Stone gateway and columns in a monumental architectural complex.", description: "Man-made wonders, including the Pyramids at Giza and Great Zimbabwe." },
  outskirts: { assetId: "reference-gold-mine", alt: "Gold nuggets beside a prospecting pan.", description: "The natural resource mines at the heart of the game’s objective." },
  border: { assetId: "reference-border", alt: "A broad waterfall beneath a warm sunset.", description: "Natural wonders, including the River Nile and Victoria Falls." },
} as const;

export const homeRegions = regions.map((region) => ({ ...region, ...regionPresentation[region.id] }));

// These are short visual-role introductions from design-system section 12,
// not movement/capture rules or product manufacturing claims.
const piecePresentation = {
  imperion: { role: "Royal authority", introduction: "The empire’s ruler, seated upon a throne.", alt: "Bronze-toned Imperion sculpture, seated with crown and sceptre." },
  queen: { role: "Royal power", introduction: "Crown and ceremonial dress express royal power.", alt: "Bronze-toned Queen sculpture with crown and layered robes." },
  "north-central-war-chief": { role: "Military strength", introduction: "Spear and shield distinguish the War Chief.", alt: "Bronze-toned North-Central War Chief sculpture carrying a spear and shield." },
  "east-african-high-chief": { role: "Ceremonial leadership", introduction: "A tall headpiece and staff mark a ceremonial leader.", alt: "Bronze-toned East African High Chief sculpture with tall headpiece and staff." },
  "south-african-advisor": { role: "Wisdom & counsel", introduction: "A figure of counsel in restrained ceremonial robes.", alt: "Bronze-toned South African Advisor sculpture holding a staff." },
  "west-african-mystic": { role: "Spiritual knowledge", introduction: "Beads, an amulet and a ritual staff define the Mystic.", alt: "Bronze-toned West African Mystic sculpture with beads and a carved ritual staff." },
  "male-peasant": { role: "Labor & agriculture", introduction: "An agricultural tool connects this piece to the land.", alt: "Bronze-toned Male Peasant sculpture holding an agricultural tool." },
  "female-peasant": { role: "Production & community", introduction: "Baskets of produce express work and community.", alt: "Bronze-toned Female Peasant sculpture carrying produce baskets." },
} as const;

export const homePieces = pieces.map((piece) => ({
  ...piece,
  ...piecePresentation[piece.id],
  introductionSource: { document: "design-system", section: "12. Game piece asset style" } satisfies SourceReference,
}));
