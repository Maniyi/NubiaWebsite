import { Container } from "@/components/ui/layout";
import { ButtonAnchor } from "@/components/ui/button";
import { home } from "@/content/home";
import { AssetImage } from "./asset-image";

export function HomeHero() {
  return (
    <section className="home-hero" aria-labelledby="hero-title">
      <Container className="home-hero__layout">
        <div className="home-hero__copy">
          <p className="eyebrow ruled-eyebrow">{home.hero.eyebrow}</p>
          <h1 id="hero-title">
            <span>{home.hero.headline[0]}</span>
            <span className="home-hero__gold">{home.hero.headline[1]}</span>
            <span className="home-hero__gold">{home.hero.headline[2]}</span>
          </h1>
          <p className="home-hero__description">{home.hero.description}</p>
          <div className="home-actions">
            {home.hero.actions.map((action, index) => (
              <ButtonAnchor key={action.href} href={action.href} variant={index === 0 ? "primary" : "secondary"}>
                {action.label}<span aria-hidden="true">↗</span>
              </ButtonAnchor>
            ))}
          </div>
        </div>
        <figure className="home-hero__art">
          <div className="home-hero__frame">
            <AssetImage assetId={home.hero.assetId} alt={home.hero.alt}
              sizes="(min-width: 1280px) 530px, (min-width: 960px) 43vw, (min-width: 640px) 554px, calc(100vw - 64px)"
              preload />
          </div>
          <figcaption>{home.hero.caption}</figcaption>
        </figure>
      </Container>
      <div className="home-hero__baseline" aria-hidden="true"><span>◆</span></div>
    </section>
  );
}

export function CoreFacts() {
  return (
    <section className="home-facts" aria-label="NUBIA at a glance">
      <Container>
        <dl className="home-facts__grid">
          {home.facts.map((fact) => (
            <div className="home-fact" key={fact.label}>
              <dt>{fact.label}</dt>
              <dd className="home-fact__value">{fact.value}</dd>
              <dd className="home-fact__detail">{fact.detail}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
