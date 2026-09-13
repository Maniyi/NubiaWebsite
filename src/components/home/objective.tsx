import { Container, Section } from "@/components/ui/layout";
import { home } from "@/content/home";
import { resources } from "@/content/game";
import { ParchmentTexture } from "./asset-image";

export function HomeObjective() {
  return (
    <Section id="objective" tabIndex={-1} className="home-objective textured-section" tone="ivory" aria-labelledby="objective-title">
      <ParchmentTexture />
      <Container className="home-objective__layout">
        <div className="home-objective__copy">
          <p className="eyebrow ruled-eyebrow">{home.objective.eyebrow}</p>
          <h2 id="objective-title" className="line-breaks" tabIndex={-1}>{home.objective.title}</h2>
          <p>{home.objective.description}</p>
          <p className="home-objective__conclusion">{home.objective.conclusion}</p>
        </div>
        <div className="objective-path">
          <ol>
            {home.objective.steps.map((step, index) => (
              <li key={step.title}>
                <span className="objective-path__number" aria-hidden="true">0{index + 1}</span>
                <div><h3>{step.title}</h3><p>{step.description}</p></div>
              </li>
            ))}
          </ol>
          <div className="objective-resources">
            <p className="eyebrow">The five resource mines</p>
            <ul aria-label="Resource mines">{resources.map((resource) => <li key={resource.id}>{resource.name}</li>)}</ul>
          </div>
        </div>
      </Container>
    </Section>
  );
}
