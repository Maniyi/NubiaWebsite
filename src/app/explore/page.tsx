import type { Metadata } from "next";
import { ExploreClosing } from "@/components/explore/explore-closing";
import { ExploreGuide } from "@/components/explore/explore-guide";
import { ExploreHero } from "@/components/explore/explore-hero";
import { ExploreSubnavigation } from "@/components/explore/explore-subnavigation";
import "./explore.css";

export const metadata: Metadata = {
  title: "Explore the Board",
  description: "Explore the verified structure, regions, terrain types and resource mines of the 100-square NUBIA board.",
};

export default function ExplorePage() {
  return (
    <>
      <ExploreSubnavigation />
      <ExploreHero />
      <ExploreGuide />
      <ExploreClosing />
    </>
  );
}
