import { board, regions, resources } from "./game";
import type { SourceReference } from "./types";

const manual = (page: number): SourceReference => ({ document: "playing-manual", page });
const designSystem = (section: string): SourceReference => ({ document: "design-system", section });
const outskirtsResourceOrder = ["crude-oil", "gold", "diamond", "arable-land", "silver"] as const;

const regionPresentation = {
  palace: {
    index: "01",
    theme: "Royal heritage",
    description:
      "The Palace is the royal and back area of an empire’s town. Its imagery draws on authority, ceremony, and cultural objects associated with African royalty.",
    examples: ["Imperion’s Throne", "Benin Bronze Mask", "Yoruba Crown", "Zulu Necklace", "Royal Fly Whisk"],
    assetId: "reference-footer-image",
    alt: "Temporary bronze-toned royal portrait used to evoke ceremony and authority.",
  },
  market: {
    index: "02",
    theme: "Export commodities",
    description:
      "The Market gives the board’s world an economic life. Its imagery represents commodities exported from Africa and the exchange of valuable materials.",
    examples: ["Gold", "Crude Oil", "Palm Oil", "Cocoa", "Diamond"],
    assetId: "reference-cocoa-exporting-commodities",
    alt: "Temporary still life of cocoa pods and beans, used as trade imagery.",
  },
  "town-center": {
    index: "03",
    theme: "Man-made African wonders",
    description:
      "The Town Center is associated with enduring works of African architecture, scholarship, engineering, and public memory.",
    examples: ["Great Zimbabwe", "Bet Giyorgis", "University of Timbuktu", "Pyramids at Giza", "African Renaissance Monument"],
    assetId: "reference-man-made-wonder",
    alt: "Temporary image of monumental stone architecture used to evoke the built environment.",
  },
  outskirts: {
    index: "04",
    theme: "Natural-resource mines",
    description:
      "The Outskirts contains the natural-resource mines connected to NUBIA’s victory objective. Their exact cells remain intentionally unmapped here.",
    examples: outskirtsResourceOrder.map((id) => resources.find((resource) => resource.id === id)!.name),
    assetId: "reference-gold-mine",
    alt: "Temporary close view of gold nuggets and mining tools, used as resource imagery.",
  },
  border: {
    index: "05",
    theme: "Natural wonders of Africa",
    description:
      "The Border is the region nearest the middle of the board. Its imagery turns the meeting edge of the two empires into a gallery of African landscapes.",
    examples: ["Mount Kilimanjaro", "Serengeti Migration", "River Nile", "Sahara Desert", "Victoria Falls"],
    assetId: "reference-border",
    alt: "Temporary landscape photograph of a broad waterfall beneath warm light.",
  },
} as const;

export const exploreRegions = regions.map((region) => ({
  ...region,
  ...regionPresentation[region.id],
  sources: [manual(2), designSystem("15. Board region system")],
}));

export const explore = {
  subnavigation: [
    { label: "Board Overview", href: "#board-overview" },
    { label: "Land & Sea", href: "#land-and-sea" },
    { label: "Regions", href: "#regions" },
    { label: "Resources", href: "#resources" },
  ],
  hero: {
    eyebrow: "Explore the board",
    title: "Explore the\nNUBIA board.",
    description:
      "Discover the geography of NUBIA: 100 squares shaped by two opposing empires, five regions, two terrains, and the resources at the heart of victory.",
    action: { label: "Enter the board guide", href: "#board-overview" },
    source: manual(2),
  },
  overview: {
    eyebrow: "The board at a glance",
    title: "A world arranged in layers",
    description:
      "NUBIA’s 100-square board represents two opposing empires. Each empire’s town contains the same five conceptual regions, moving from its royal back area toward the centre.",
    pathNote:
      "The manual names the board’s paths from First through Tenth. Their player-relative direction is not assigned in this guide.",
    facts: [
      { value: String(board.squareCount), label: "Squares", detail: "Across the complete board" },
      { value: "2", label: "Empires", detail: "Facing one another" },
      { value: String(regions.length), label: "Regions", detail: "Within each empire’s town" },
      { value: String(resources.length), label: "Resource mines", detail: "Named in each Outskirts" },
    ],
    source: manual(2),
  },
  terrain: {
    title: "LAND & SEA — two terrains, one board",
    description:
      "The board alternates between square types called LAND and SEA. Some individual piece rules refer to this distinction, but the source does not establish a verified cell-by-cell terrain map.",
    types: [
      { name: "LAND", note: "A named terrain type represented here with green and a diagonal ground pattern." },
      { name: "SEA", note: "A named terrain type represented here with blue and a horizontal wave pattern." },
    ],
    source: manual(2),
  },
  regions: {
    eyebrow: "Five regions. One connected world.",
    title: "Discover Each Row",
    description:
      "This display moves from the centre-facing row toward the royal and back area. It is a conceptual guide, not a cell-accurate map.",
  },
  resources: {
    eyebrow: "Five resource mines",
    title: "The resources at the edge of victory",
    description:
      "Each empire’s Outskirts contains five named natural-resource mines. Their exact board positions are awaiting verified artwork and mapping.",
    distinction: "Arable Land is a resource mine. LAND is a terrain type.",
    items: resources.map((resource, index) => ({ ...resource, marker: String(index + 1).padStart(2, "0") })),
    source: manual(2),
  },
  closing: {
    eyebrow: "Continue learning",
    title: "Understand the board.\nCommand your empire.",
    description: "Return to the complete beginner’s guide for the objective, turn rhythm, movement categories, and victory condition.",
    action: { label: "Learn how to play", href: "/learn" },
    note: "A detailed guide to every NUBIA piece will follow in a later milestone.",
  },
} as const;
