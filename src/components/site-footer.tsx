import Link from "next/link";
import { activeNavigation } from "@/content/navigation";
import { Brand } from "./brand";
import { Container } from "./ui/layout";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <Container className="site-footer__inner">
        <Brand />
        <nav aria-label="Footer">
          <ul>{activeNavigation.map((item) => (
            <li key={item.href}><Link href={item.href}>{item.label}</Link></li>
          ))}</ul>
        </nav>
      </Container>
    </footer>
  );
}
