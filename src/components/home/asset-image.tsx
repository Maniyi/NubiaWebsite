import Image from "next/image";
import { getWebAsset } from "@/content/web-assets";

type Props = {
  assetId: string;
  alt: string;
  sizes: string;
  className?: string;
  preload?: boolean;
};

export function AssetImage({ assetId, alt, sizes, className, preload = false }: Props) {
  const asset = getWebAsset(assetId);
  return (
    <Image src={asset.src} width={asset.width} height={asset.height}
      alt={alt} sizes={sizes} className={className} preload={preload}
      data-asset-id={assetId} data-asset-status={asset.status} />
  );
}

export function ParchmentTexture() {
  return <AssetImage assetId="reference-parchment-background" alt=""
    sizes="100vw" className="parchment-texture" />;
}
