import { Container } from "@/components/ui/layout";
import { learn } from "@/content/learn";
import { VisualPlaceholder } from "./visual-placeholder";

function ResourceMarkers({ compact = false }: { compact?: boolean }) {
  return (
    <ul className={`resource-markers ${compact ? "resource-markers--compact" : ""}`.trim()} aria-label="The five natural-resource mines">
      {learn.victory.resources.map((resource, index) => (
        <li key={resource}><span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span><small>{resource}</small></li>
      ))}
    </ul>
  );
}

export function LearnFoundations() {
  return (
    <section id="how-to-play" tabIndex={-1} className="learn-guide-section how-to-play" aria-labelledby="how-to-title">
      <Container>
        <div className="learn-section-title">
          <span aria-hidden="true" /><h2 id="how-to-title" tabIndex={-1}>{learn.howToPlay.title}</h2><span aria-hidden="true" />
        </div>
        <ol className="how-to-play__steps">
          {learn.howToPlay.steps.map((step, index) => (
            <li key={step.title}>
              <div className="guide-step__copy">
                <span className="guide-step__number" aria-hidden="true">{index + 1}</span>
                <div><h3>{step.title}</h3><p>{step.description}</p></div>
              </div>
              {"placeholder" in step ? (
                <VisualPlaceholder label={step.placeholder.label} description={step.placeholder.description}
                  tone={step.placeholder.tone} className="guide-step__visual" />
              ) : <ResourceMarkers compact />}
            </li>
          ))}
        </ol>
        <aside id="rules" tabIndex={-1} className="rules-rhythm" aria-labelledby="rules-title">
          <div><p className="eyebrow">{learn.rules.eyebrow}</p><h3 id="rules-title">{learn.rules.title}</h3></div>
          <ol>{learn.rules.sequence.map((step, index) => (
            <li key={step}><span aria-hidden="true">{index + 1}</span>{step}</li>
          ))}</ol>
          <p>{learn.rules.note}</p>
        </aside>
      </Container>
    </section>
  );
}

export { ResourceMarkers };
