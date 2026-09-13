import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/layout";
import { explore } from "@/content/explore";

export function ExploreClosing() {
  return (
    <section className="explore-closing" aria-labelledby="explore-closing-title">
      <Container className="explore-closing__layout">
        <div>
          <p className="eyebrow">{explore.closing.eyebrow}</p>
          <h2 id="explore-closing-title">{explore.closing.title.split("\n").map((line) => <span key={line}>{line}</span>)}</h2>
          <p>{explore.closing.description}</p>
          <p className="explore-closing__note">{explore.closing.note}</p>
        </div>
        <ButtonLink href={explore.closing.action.href}>{explore.closing.action.label}<span aria-hidden="true">→</span></ButtonLink>
      </Container>
    </section>
  );
}
