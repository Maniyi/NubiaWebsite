import { Container } from "@/components/ui/layout";
import { learn } from "@/content/learn";

export function LearnSubnavigation() {
  return (
    <nav className="learn-subnav" aria-label="Learn page">
      <Container>
        <ul>
          {learn.subnavigation.map((item) => (
            <li key={item.href}><a href={item.href}>{item.label}</a></li>
          ))}
        </ul>
      </Container>
    </nav>
  );
}
