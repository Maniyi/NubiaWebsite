import { Container, Section } from "@/components/ui/layout";
import { home, homeRegions } from "@/content/home";
import { AssetImage } from "./asset-image";

export function HomeWorld() {
  return (
    <Section id="world" tabIndex={-1} className="home-world" aria-labelledby="world-title">
      <Container>
        <div className="home-section-heading">
          <p className="eyebrow">{home.world.eyebrow}</p>
          <h2 id="world-title" tabIndex={-1}>{home.world.title}</h2>
          <p>{home.world.description}</p>
          <span className="ornament-divider" aria-hidden="true">◆</span>
        </div>
        <p className="region-order">{home.world.orderNote}<span aria-hidden="true"> →</span></p>
        <ol className="region-grid">
          {homeRegions.map((region, index) => (
            <li key={region.id} className="region-card">
              <div className={`region-card__image region-card__image--${region.id}`}>
                <AssetImage assetId={region.assetId} alt={region.alt}
                  sizes="(min-width: 1280px) 232px, (min-width: 1024px) 19vw, (min-width: 640px) 45vw, calc(100vw - 48px)" />
              </div>
              <div className="region-card__body">
                <span className="region-card__number" aria-hidden="true">0{index + 1}</span>
                <h3>{region.name}</h3>
                <p className="region-card__meaning">{region.meaning}</p>
                <p>{region.description}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className="asset-note">{home.world.imageNote}</p>
        <div className="terrain-legend" aria-label="The two square types">
          <div className="terrain-legend__intro"><p className="eyebrow">One board. Two terrains.</p><p>The board’s alternating square types are named LAND and SEA.</p></div>
          <div className="terrain-label"><span className="terrain-swatch terrain-swatch--land" aria-hidden="true" /><div><strong>LAND</strong><span>Solid ground</span></div></div>
          <div className="terrain-label"><span className="terrain-swatch terrain-swatch--sea" aria-hidden="true" /><div><strong>SEA</strong><span>Water</span></div></div>
        </div>
      </Container>
    </Section>
  );
}
