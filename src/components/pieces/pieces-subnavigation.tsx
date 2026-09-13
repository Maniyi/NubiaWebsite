import { Container } from "@/components/ui/layout";
import { piecesPage } from "@/content/pieces";

export function PiecesSubnavigation() {
  return (
    <nav className="pieces-subnav" aria-label="Pieces page">
      <Container><ul>{piecesPage.subnavigation.map((item) => (
        <li key={item.href}><a href={item.href}>{item.label}</a></li>
      ))}</ul></Container>
    </nav>
  );
}
