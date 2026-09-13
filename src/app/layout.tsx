import type { Metadata } from "next";
import type { ReactNode } from "react";
import "@fontsource-variable/cinzel";
import "@fontsource-variable/inter";
import "./globals.css";
import "./commerce.css";
import { brand } from "@/content/brand";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { CartProvider } from "@/components/cart/cart-provider";

export const metadata: Metadata = {
  title: { default: brand.name, template: `%s | ${brand.name}` },
  icons: { icon: brand.favicon.src },
  // Foundation preview only; revisit when real pages are ready for release.
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <a className="skip-link" href="#main-content">Skip to content</a>
          <SiteHeader />
          <main id="main-content" tabIndex={-1}>{children}</main>
          <SiteFooter />
        </CartProvider>
      </body>
    </html>
  );
}
