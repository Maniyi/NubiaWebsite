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
};

export type PieceRuleSummary = {
  summary: string;
  source: SourceReference;
};

export type PieceProfile = Piece & {
  aliases: readonly string[];
  role: string;
  description: string;
  alt: string;
  movement: PieceRuleSummary;
  capture: PieceRuleSummary;
  specialAbility?: PieceRuleSummary & { name: string };
  manualPages: readonly number[];
  hasMovementDiagram: boolean;
  hasCaptureDiagram: boolean;
  hasSpecialAbilityDiagram: boolean;
  clarificationStatus: "verified-summary" | "qualified-summary";
  clarification?: string;
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
