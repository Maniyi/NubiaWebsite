import { pieces as canonicalPieces } from "./game";
import type { PieceProfile, SourceReference } from "./types";

type PieceId = (typeof canonicalPieces)[number]["id"];
type PieceDetails = Omit<PieceProfile, "id" | "name" | "assetId" | "source">;

const manual = (page: number): SourceReference => ({ document: "playing-manual", page });

const details = {
  imperion: {
    aliases: ["Ruler"], role: "Ruler of the empire",
    description: "The royal centre of an empire, distinguished by a throne, crown and sceptre.",
    alt: "Bronze-toned Imperion sculpture seated on a throne with crown and sceptre.",
    movement: { summary: "Jumps to any unoccupied square within its own Palace row; it cannot move beyond that row.", source: manual(4) },
    capture: { summary: "Captures without leaving its square when an opposing piece is in the Imperion’s town, is unprotected or undefended, and is visible in a straight, unobstructed line. Two or three qualifying pieces may be captured simultaneously.", source: manual(4) },
    specialAbility: { name: "Gbesele", summary: "The Imperion’s conditional capture action is called Gbesele and is executed as one move. The manual also states that the Imperion cannot be threatened or captured.", source: manual(4) },
    manualPages: [4], hasMovementDiagram: false, hasCaptureDiagram: false, hasSpecialAbilityDiagram: false,
    clarificationStatus: "qualified-summary", clarification: "The manual does not formally define threatened, protected, unprotected or undefended; no Western-chess check or king-capture assumptions are applied.",
  },
  queen: {
    aliases: [], role: "Royal power",
    description: "A commanding royal figure whose reach extends across straight and diagonal lines.",
    alt: "Bronze-toned Queen sculpture with crown and layered ceremonial robes.",
    movement: { summary: "Moves any distance in one straight direction: forward, backward, sideways or diagonally. It cannot jump over other pieces.", source: manual(5) },
    capture: { summary: "Captures an opposing piece in its path at any distance in one straight forward, backward, sideways or diagonal direction.", source: manual(5) },
    manualPages: [5], hasMovementDiagram: false, hasCaptureDiagram: false, hasSpecialAbilityDiagram: false,
    clarificationStatus: "verified-summary",
  },
  "north-central-war-chief": {
    aliases: ["Warrior", "War Chief", "Warchief"], role: "Military strength",
    description: "A mobile war leader identified by martial dress, spear and shield.",
    alt: "Bronze-toned North-Central War Chief sculpture carrying a spear and shield.",
    movement: { summary: "Moves two squares in one direction, then one square at a right angle, forming an L shape. It can jump over other pieces.", source: manual(8) },
    capture: { summary: "Captures using the same two-squares-then-one-at-a-right-angle L-shaped path and can jump over intervening pieces.", source: manual(8) },
    manualPages: [8], hasMovementDiagram: false, hasCaptureDiagram: false, hasSpecialAbilityDiagram: false,
    clarificationStatus: "verified-summary",
  },
  "east-african-high-chief": {
    aliases: ["High Chief", "Highchief"], role: "Ceremonial leadership",
    description: "A ceremonial guardian whose primary reach and secondary switch create two distinct choices.",
    alt: "Bronze-toned East African High Chief sculpture with a tall headpiece and staff.",
    movement: { summary: "Its primary move travels diagonally any distance.", source: manual(7) },
    capture: { summary: "Captures diagonally at any distance using its primary movement.", source: manual(7) },
    specialAbility: { name: "Terrain switch", summary: "As a secondary, non-capturing move, steps one square left or right to switch between LAND and SEA. The switch counts as one turn.", source: manual(7) },
    manualPages: [7], hasMovementDiagram: false, hasCaptureDiagram: false, hasSpecialAbilityDiagram: false,
    clarificationStatus: "qualified-summary", clarification: "The manual does not identify which printed cells are LAND or SEA, so no specific cell assignment is shown.",
  },
  "south-african-advisor": {
    aliases: ["Southern Africa Advisor", "War Advisor", "Advisor"], role: "Wisdom and counsel",
    description: "A composed counsellor whose straight-line reach supports an empire across ranks and paths.",
    alt: "Bronze-toned South African Advisor sculpture in restrained ceremonial robes holding a staff.",
    movement: { summary: "Moves vertically or horizontally any distance and cannot jump over other pieces.", source: manual(6) },
    capture: { summary: "Captures an opposing piece the same way it moves: vertically or horizontally.", source: manual(6) },
    manualPages: [6], hasMovementDiagram: false, hasCaptureDiagram: false, hasSpecialAbilityDiagram: false,
    clarificationStatus: "verified-summary",
  },
  "west-african-mystic": {
    aliases: ["Mystic"], role: "Spiritual knowledge",
    description: "A ritual figure with a once-only power that changes allegiance without making an ordinary capture.",
    alt: "Bronze-toned West African Mystic sculpture with beads, amulet and ritual staff.",
    movement: { summary: "Moves one or two squares in any forward, backward, sideways or diagonal direction. It cannot jump over pieces.", source: manual(9) },
    capture: { summary: "Captures only a piece exactly two squares away in any direction. It cannot capture an adjacent piece, jump, or capture through a blocking piece.", source: manual(9) },
    specialAbility: { name: "Brainwash", summary: "Once per Mystic, when two squares from a target, it may brainwash instead of capturing. The target changes side and orientation; every piece except the Imperion is eligible. Brainwashing counts as one move, and an unused Mystic from the original side may later re-brainwash the piece from two squares away.", source: manual(10) },
    manualPages: [9, 10], hasMovementDiagram: false, hasCaptureDiagram: false, hasSpecialAbilityDiagram: false,
    clarificationStatus: "qualified-summary", clarification: "The manual does not expressly say whether an intervening piece blocks brainwash; the profile makes no claim about that condition or post-brainwash notation.",
  },
  "male-peasant": {
    aliases: ["Peasant"], role: "Labour and agriculture",
    description: "One of two distinct peasant figures sharing the same rules and the game’s resource-mine objective.",
    alt: "Bronze-toned Male Peasant sculpture carrying an agricultural tool.",
    movement: { summary: "Moves one square forward or sideways and can never move backward.", source: manual(11) },
    capture: { summary: "Captures an opposing piece one square diagonally and can never capture backward.", source: manual(11) },
    specialAbility: { name: "Two-square sideways move", summary: "While in the Outskirts or Town Center rows of its own town, may move two squares sideways as often as desired. This option is lost on reaching the Border row and beyond into the opposing town.", source: manual(11) },
    manualPages: [11], hasMovementDiagram: false, hasCaptureDiagram: false, hasSpecialAbilityDiagram: false,
    clarificationStatus: "verified-summary",
  },
  "female-peasant": {
    aliases: ["Peasant"], role: "Production and community",
    description: "One of two distinct peasant figures sharing the same rules and the game’s resource-mine objective.",
    alt: "Bronze-toned Female Peasant sculpture carrying baskets of produce.",
    movement: { summary: "Moves one square forward or sideways and can never move backward.", source: manual(11) },
    capture: { summary: "Captures an opposing piece one square diagonally and can never capture backward.", source: manual(11) },
    specialAbility: { name: "Two-square sideways move", summary: "While in the Outskirts or Town Center rows of its own town, may move two squares sideways as often as desired. This option is lost on reaching the Border row and beyond into the opposing town.", source: manual(11) },
    manualPages: [11], hasMovementDiagram: false, hasCaptureDiagram: false, hasSpecialAbilityDiagram: false,
    clarificationStatus: "verified-summary",
  },
} as const satisfies Record<PieceId, PieceDetails>;

export const pieceProfiles = canonicalPieces.map((piece) => ({ ...piece, ...details[piece.id] })) as readonly PieceProfile[];

export function getPieceProfile(value: string | string[] | undefined) {
  const id = Array.isArray(value) ? value[0] : value;
  return pieceProfiles.find((piece) => piece.id === id) ?? pieceProfiles[0];
}

export const piecesPage = {
  subnavigation: [
    { label: "The Pieces", href: "#pieces-overview" },
    { label: "Featured Piece", href: "#featured-piece" },
    { label: "Movement", href: "#movement" },
    { label: "All Pieces", href: "#all-pieces" },
  ],
  hero: {
    eyebrow: "Meet the pieces", title: "Eight figures.\nOne empire.",
    description: "Recognize every NUBIA piece, understand how movement differs from capture, and study the special actions that shape the contest.",
    action: { label: "Explore their roles", href: "#piece-selector" },
  },
} as const;
