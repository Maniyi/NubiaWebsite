import type { Metadata } from "next";
import { HomeHero, CoreFacts } from "@/components/home/hero";
import { HomeObjective } from "@/components/home/objective";
import { HomeWorld } from "@/components/home/world";
import { HomePieces } from "@/components/home/pieces";
import { HomeDiscovery } from "@/components/home/discovery";
import "./home.css";

export const metadata: Metadata = {
  description: "Discover NUBIA: African Chess, its resource-mine objective, five board regions and eight piece types.",
};

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <CoreFacts />
      <HomeObjective />
      <HomeWorld />
      <HomePieces />
      <HomeDiscovery />
    </>
  );
}
