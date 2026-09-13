import Link from "next/link";
import { activeNavigation } from "@/content/navigation";
import { Brand } from "./brand";
import { Container } from "./ui/layout";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <Container className="site-footer__inner">
        <div className="site-footer__brand">
          <Brand />
          <p>A strategy board game shaped by Africa’s heritage, resources, and spirit of discovery.</p>
        </div>
        <div className="site-footer__links">
          <p className="eyebrow">Navigate</p>
          <nav aria-label="Footer">
            <ul>{activeNavigation.map((item) => (
              <li key={item.href}><Link href={item.href}>{item.label}</Link></li>
            ))}</ul>
          </nav>
        </div>
      </Container>
    </footer>
  );
}
