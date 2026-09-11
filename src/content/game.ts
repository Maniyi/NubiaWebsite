import type { BoardRegion, Piece, Resource, SourceReference } from "./types";

const manualOverview: SourceReference = { document: "playing-manual", page: 2 };

export const pieces = [
  { id: "imperion", name: "Imperion", assetId: "piece-imperion", source: manualOverview },
  { id: "queen", name: "Queen", assetId: "piece-queen", source: manualOverview },
  { id: "north-central-war-chief", name: "North-Central War Chief", assetId: "piece-north-central-war-chief", source: manualOverview },
  { id: "east-african-high-chief", name: "East African High Chief", assetId: "piece-east-african-high-chief", source: manualOverview },
  { id: "south-african-advisor", name: "South African Advisor", assetId: "piece-south-african-advisor", source: manualOverview },
  { id: "west-african-mystic", name: "West African Mystic", assetId: "piece-west-african-mystic", source: manualOverview },
  { id: "male-peasant", name: "Male Peasant", assetId: "piece-male-peasant", source: manualOverview },
  { id: "female-peasant", name: "Female Peasant", assetId: "piece-female-peasant", source: manualOverview },
] as const satisfies readonly Piece[];

// Back/royal area toward the centre, not an inferred cell or terrain mapping.
export const regions = [
  { id: "palace", name: "Palace", meaning: "Royal heritage", source: manualOverview },
  { id: "market", name: "Market", meaning: "Export commodities", source: manualOverview },
  { id: "town-center", name: "Town Center", meaning: "Man-made wonders", source: manualOverview },
  { id: "outskirts", name: "Outskirts", meaning: "Natural resource mines", source: manualOverview },
  { id: "border", name: "Border", meaning: "Natural wonders of Africa", source: manualOverview },
] as const satisfies readonly BoardRegion[];

export const resources = [
  { id: "gold", name: "Gold", source: manualOverview },
  { id: "crude-oil", name: "Crude Oil", source: manualOverview },
  { id: "diamond", name: "Diamond", source: manualOverview },
  { id: "arable-land", name: "Arable Land", source: manualOverview },
  { id: "silver", name: "Silver", source: manualOverview },
] as const satisfies readonly Resource[];

export const board = {
  rows: 10,
  columns: 10,
  squareCount: 100,
  terrainTypes: ["LAND", "SEA"],
  cellMappingStatus: "not-yet-transcribed-and-verified",
  source: manualOverview,
} as const;
