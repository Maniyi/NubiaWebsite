import { readFileSync, existsSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const manifest = JSON.parse(readFileSync(resolve(root, "src/content/assets.json"), "utf8"));
const storefront = JSON.parse(readFileSync(resolve(root, "src/content/storefront.json"), "utf8"));
const sourceRoot = process.env.NUBIA_ASSET_SOURCE_ROOT || manifest.sourceRootHint;
const production = process.argv.includes("--production");
const ids = new Set();
const errors = [];
const blockers = [];

if (storefront.status !== "approved") blockers.push(`storefront-commercial-content: ${storefront.status}`);
const commercialProducts = [storefront.primaryProduct, ...storefront.relatedProducts.items];
for (const item of commercialProducts) {
  if (!Number.isInteger(item.priceMinor) || item.priceMinor < 0) errors.push(`Invalid prototype priceMinor: ${item.id}`);
  if (!item.currency) errors.push(`Missing prototype currency: ${item.id}`);
}

for (const mark of Object.values(manifest.marks)) {
  if (ids.has(mark.id)) errors.push(`Duplicate ID: ${mark.id}`);
  ids.add(mark.id);
  if (mark.status !== "approved") blockers.push(`${mark.id}: ${mark.status} brand mark`);
  if (mark.src && !existsSync(resolve(root, "public", mark.src.slice(1)))) errors.push(`Missing mark: ${mark.src}`);
}
for (const asset of manifest.assets) {
  if (ids.has(asset.id)) errors.push(`Duplicate ID: ${asset.id}`);
  ids.add(asset.id);
  if (!(asset.width > 0 && asset.height > 0)) errors.push(`Invalid dimensions: ${asset.id}`);
  if (!asset.source) errors.push(`Missing source: ${asset.id}`);
  if (asset.status !== "approved" || asset.rights !== "cleared") {
    blockers.push(`${asset.id}: ${asset.status}; rights ${asset.rights}`);
  }
  // Sources live outside the repo and are not required to build on Vercel.
  if (!production && existsSync(sourceRoot) && !existsSync(resolve(sourceRoot, asset.source))) {
    errors.push(`Missing original: ${asset.source}`);
  }
  if (asset.src && !existsSync(resolve(root, "public", asset.src.replace(/^\//, "")))) {
    errors.push(`Missing web asset: ${asset.src}`);
  }
}

console.log(`Asset manifest: ${manifest.assets.length} image sources, ${Object.keys(manifest.marks).length} brand marks.`);
if (!production && !existsSync(sourceRoot)) console.log("Original source folder unavailable; local source existence check skipped. Set NUBIA_ASSET_SOURCE_ROOT to check originals.");
if (blockers.length) console.log(`\nProduction blockers (${blockers.length}):\n${blockers.map((item) => `- ${item}`).join("\n")}`);
if (errors.length) console.error(`\nManifest errors:\n${errors.join("\n")}`);
if (errors.length || (production && blockers.length)) process.exitCode = 1;
else console.log(production ? "Production asset check passed." : "Development manifest check passed; temporary assets remain explicitly flagged.");
