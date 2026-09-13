import { resources } from "./game";
import type { SourceReference } from "./types";

const manual = (page: number): SourceReference => ({ document: "playing-manual", page });

export const learn = {
  subnavigation: [
    { label: "How to Play", href: "#how-to-play" },
    { label: "The Board", href: "#the-board" },
    { label: "Movement", href: "#movement" },
    { label: "Win Condition", href: "#win-condition" },
    { label: "Rules", href: "#rules" },
  ],
  hero: {
    eyebrow: "Learn to play",
    title: "Learn to Play\nNUBIA",
    description:
      "Lead an African empire through a contest of movement, resources, and strategy. Begin with the objective and the rhythm of play.",
    action: { label: "Start the quick guide", href: "#how-to-play" },
    source: manual(2),
  },
  howToPlay: {
    title: "How to Play NUBIA",
    steps: [
      {
        title: "Prepare to Play",
        description:
          "Each player controls an empire’s population. Agree who begins, or decide by flipping a coin.",
        placeholder: {
          label: "Setup diagram placeholder",
          description: "Verified initial piece arrangement required",
          tone: "parchment",
        },
      },
      {
        title: "Make One Move",
        description:
          "One player makes one move, then the other player makes one move. Play continues by alternating moves.",
        placeholder: {
          label: "Movement image placeholder",
          description: "Piece positioned on verified board artwork",
          tone: "charcoal",
        },
      },
      {
        title: "Claim the Resources",
        description:
          "Guide a Male or Female Peasant onto one of the opponent’s five natural-resource mines to win.",
      },
    ],
    sources: [manual(2), manual(3), manual(12)],
  },
  rules: {
    eyebrow: "One move at a time",
    title: "The rhythm of play",
    sequence: ["Player one makes one move", "Player two makes one move", "Continue alternating moves"],
    note:
      "Some special abilities explicitly count as one move or turn. Their complete rules belong with the individual pieces.",
    sources: [manual(3), manual(7), manual(10)],
  },
  terrain: {
    title: "LAND & SEA Squares",
    description:
      "The board alternates between square types called LAND and SEA. The distinction matters to some piece rules, including the East African High Chief.",
    types: [
      { name: "LAND", description: "One of the board’s two alternating terrain types.", className: "land" },
      { name: "SEA", description: "The other alternating terrain type.", className: "sea" },
    ],
    note:
      "No cell or printed square treatment is assigned to either terrain type in this introduction.",
    sources: [manual(2), manual(7)],
  },
  movement: {
    title: "Movement Overview",
    description:
      "Every piece has its own rules. This overview keeps movement, capture, and special abilities distinct without replacing the full Pieces guide.",
    pieceIndex: ["Imperion", "Queen", "War Chiefs", "High Chief", "Advisor", "Mystic", "Peasants"],
    featured: {
      name: "Imperion",
      label: "Featured piece",
      assetId: "piece-imperion",
      alt: "Bronze-toned Imperion sculpture seated with a crown and sceptre.",
    },
    terms: [
      { term: "Movement", definition: "Relocates a piece according to that piece’s movement rule.", mark: "→" },
      { term: "Capture", definition: "Follows that piece’s separately defined capture rule.", mark: "×" },
      { term: "Special ability", definition: "Uses a separately defined power or special move available to certain pieces.", mark: "◆" },
    ],
    note:
      "Gbesele, brainwash, the High Chief’s switch, and the Peasants’ special move are named only to show that this category exists.",
    sources: Array.from({ length: 8 }, (_, index) => manual(index + 4)),
  },
  victory: {
    title: "Victory Condition",
    description:
      "Guide a Male or Female Peasant onto any one of the five natural-resource mines in your opponent’s town.",
    conclusion:
      "Victory is immediate when the Peasant lands on the mine, even if that Peasant could subsequently be captured.",
    distinction: "Arable Land is a resource mine. LAND is a board terrain type.",
    resources: resources.map((resource) => resource.name),
    sources: [manual(2), manual(12), manual(14)],
  },
  next: {
    eyebrow: "Continue learning",
    title: "Ready to command your empire?",
    description:
      "Keep building your understanding. Future guides will explain verified board geography and the complete rules for every piece.",
    action: { label: "Review how to play", href: "#how-to-play" },
    directions: [
      { label: "Explore", description: "Board geography and verified terrain." },
      { label: "Pieces", description: "Movement, capture, and special abilities." },
    ],
  },
} as const;
