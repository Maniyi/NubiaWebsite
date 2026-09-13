import { AssetImage } from "@/components/home/asset-image";
import { VisualPlaceholder } from "@/components/learn/visual-placeholder";
import { Container } from "@/components/ui/layout";
import { explore, exploreRegions } from "@/content/explore";

function SectionHeading({ eyebrow, title, description, id }: { eyebrow?: string; title: string; description?: string; id: string }) {
  return (
    <header className="explore-section-heading">
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 id={id} tabIndex={-1}>{title}</h2>
      {description ? <p>{description}</p> : null}
    </header>
  );
}

export function ExploreGuide() {
  const regionsFromCentre = [...exploreRegions].reverse();

  return (
    <div className="explore-guide surface surface--ivory">
      <AssetImage assetId="reference-parchment-background" alt="" sizes="100vw" className="explore-guide__texture" />

      <section id="board-overview" tabIndex={-1} className="explore-guide-section explore-overview" aria-labelledby="board-overview-title">
        <Container>
          <SectionHeading id="board-overview-title" eyebrow={explore.overview.eyebrow} title={explore.overview.title} description={explore.overview.description} />
          <dl className="explore-facts">
            {explore.overview.facts.map((fact) => (
              <div key={fact.label}><dt>{fact.label}</dt><dd><strong>{fact.value}</strong><span>{fact.detail}</span></dd></div>
            ))}
          </dl>
          <div className="region-concept" role="img" aria-label="Conceptual order of the five regions from the royal back area toward the centre: Palace, Market, Town Center, Outskirts, Border.">
            <p>Royal / back area</p>
            <ol>{exploreRegions.map((region) => <li key={region.id}><span>{region.index}</span>{region.name}</li>)}</ol>
            <p>Centre-facing edge</p>
          </div>
          <p className="explore-source-note">{explore.overview.pathNote}</p>
        </Container>
      </section>

      <section id="land-and-sea" tabIndex={-1} className="explore-guide-section explore-terrain" aria-labelledby="land-sea-title">
        <Container>
          <SectionHeading id="land-sea-title" title={explore.terrain.title} description={explore.terrain.description} />
          <div className="explore-terrain__composition">
            <article className="explore-terrain__panel explore-terrain__panel--land">
              <span className="explore-terrain__swatch" aria-hidden="true" />
              <div><p className="eyebrow">Terrain 01</p><h3>{explore.terrain.types[0].name}</h3><p>{explore.terrain.types[0].note}</p></div>
            </article>
            <VisualPlaceholder className="explore-terrain__map" tone="parchment" label="Verified LAND & SEA map required" description="Final cell-level terrain artwork will replace this guide" />
            <article className="explore-terrain__panel explore-terrain__panel--sea">
              <span className="explore-terrain__swatch" aria-hidden="true" />
              <div><p className="eyebrow">Terrain 02</p><h3>{explore.terrain.types[1].name}</h3><p>{explore.terrain.types[1].note}</p></div>
            </article>
          </div>
        </Container>
      </section>

      <section id="regions" tabIndex={-1} className="explore-guide-section explore-regions" aria-labelledby="regions-title">
        <Container>
          <SectionHeading id="regions-title" eyebrow={explore.regions.eyebrow} title={explore.regions.title} description={explore.regions.description} />
          <ol className="region-catalogue">
            {regionsFromCentre.map((region) => (
              <li key={region.id}>
                <article className="region-catalogue__card" aria-labelledby={`region-${region.id}-title`}>
                  <header className="region-catalogue__heading">
                    <span aria-hidden="true">{region.index}</span>
                    <h3 id={`region-${region.id}-title`}>{region.name}</h3>
                    <p>{region.theme}</p>
                  </header>
                  <div className={`region-catalogue__image region-catalogue__image--${region.id}`}>
                    <AssetImage assetId={region.assetId} alt={region.alt}
                      sizes="(min-width: 1200px) 240px, (min-width: 768px) 31vw, calc(100vw - 48px)" />
                  </div>
                  <ul aria-label={`${region.name} representative subjects`}>
                    {region.examples.map((example) => <li key={example}>{example}</li>)}
                  </ul>
                </article>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section id="resources" tabIndex={-1} className="explore-guide-section explore-resources" aria-labelledby="resources-title">
        <Container>
          <div className="explore-resources__intro">
            <SectionHeading id="resources-title" eyebrow={explore.resources.eyebrow} title={explore.resources.title} description={explore.resources.description} />
            <p className="explore-resources__distinction">{explore.resources.distinction}</p>
          </div>
          <div className="explore-resources__layout">
            <ol className="resource-mine-grid">
              {explore.resources.items.map((resource) => (
                <li key={resource.id} aria-label={`${resource.name}, provisional resource marker ${resource.marker}`}>
                  <span className="resource-mine-grid__marker" aria-hidden="true">{resource.marker}</span>
                  <strong>{resource.name}</strong>
                  <small>Provisional marker</small>
                </li>
              ))}
            </ol>
            <VisualPlaceholder className="explore-resources__map" tone="parchment" label="Exact resource placement map" description="Verified mine cells and approved markers required" />
          </div>
        </Container>
      </section>
    </div>
  );
}
