import type { Metadata } from "next";
import { AssetImage } from "@/components/home/asset-image";
import { LearnHero } from "@/components/learn/learn-hero";
import { LearnSubnavigation } from "@/components/learn/learn-subnavigation";
import { LearnFoundations } from "@/components/learn/learn-foundations";
import { LearnActionPrimer } from "@/components/learn/learn-action-primer";
import { LearnTerrainPrimer } from "@/components/learn/learn-terrain-primer";
import { LearnVictoryPrimer } from "@/components/learn/learn-victory-primer";
import { LearnNextSteps } from "@/components/learn/learn-next-steps";
import "./learn.css";

export const metadata: Metadata = {
  title: "Learn to Play",
  description: "Learn the objective, setup, turn rhythm, terrain, resources and victory basics of NUBIA: African Chess.",
};

export default function LearnPage() {
  return (
    <>
      <LearnSubnavigation />
      <LearnHero />
      <div className="learn-guide surface surface--ivory">
        <AssetImage assetId="reference-parchment-background" alt="" sizes="100vw" className="learn-guide__texture" />
        <LearnFoundations />
        <LearnTerrainPrimer />
        <LearnActionPrimer />
        <LearnVictoryPrimer />
      </div>
      <LearnNextSteps />
    </>
  );
}
