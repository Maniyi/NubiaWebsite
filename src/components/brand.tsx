import Link from "next/link";
import { brand } from "@/content/brand";

export function Brand() {
  return (
    <Link className="brand" href="/" aria-label={`${brand.name} — Home`}>
      <span className="brand__wordmark">{brand.wordmark.text}</span>
      <span className="brand__descriptor">African Chess</span>
    </Link>
  );
}
