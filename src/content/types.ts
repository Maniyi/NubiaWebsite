export type SourceReference = {
  document: "design-system" | "playing-manual" | "project-decisions";
  section?: string;
  page?: number;
};

export type Piece = {
  id: string;
  name: string;
  assetId: string;
  source: SourceReference;
  // Detailed movement, capture and special-power content is deferred to M3/M5.
};

export type BoardRegion = {
  id: "palace" | "market" | "town-center" | "outskirts" | "border";
  name: string;
  meaning: string;
  source: SourceReference;
};

export type Resource = {
  id: "gold" | "crude-oil" | "diamond" | "arable-land" | "silver";
  name: string;
  source: SourceReference;
};

// Deliberately no commerce fields until approved business data is supplied.
export type ProductShowcase = {
  id: string;
  name: string;
  source: SourceReference;
};
