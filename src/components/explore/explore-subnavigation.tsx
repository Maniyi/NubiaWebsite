import { Container } from "@/components/ui/layout";
import { explore } from "@/content/explore";

export function ExploreSubnavigation() {
  return (
    <nav className="explore-subnav" aria-label="Explore page">
      <Container>
        <ul>
          {explore.subnavigation.map((item) => (
            <li key={item.href}><a href={item.href}>{item.label}</a></li>
          ))}
        </ul>
      </Container>
    </nav>
  );
}
