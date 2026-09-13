import manifest from "./assets.json";

// Runtime URLs and intrinsic dimensions come only from the registered derivative.
// A missing derivative must fail the build, never fall back to a local source path.
export function getWebAsset(id: string) {
  const asset = manifest.assets.find((entry) => entry.id === id);
  if (!asset || !("src" in asset) || !asset.src) {
    throw new Error(`No web derivative registered for asset: ${id}`);
  }
  return { ...asset, src: asset.src };
}
