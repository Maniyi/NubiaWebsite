import { Container, Section } from "@/components/ui/layout";

// Milestone 1 shell only. The homepage begins in Milestone 2.
export default function FoundationPage() {
  return (
    <Section aria-labelledby="foundation-title">
      <Container>
        <div className="prose">
          <p className="eyebrow">Development preview</p>
          <h1 id="foundation-title">NUBIA: African Chess</h1>
          <p className="text-muted">The site foundation is in place. Page content will follow.</p>
        </div>
      </Container>
    </Section>
  );
}
