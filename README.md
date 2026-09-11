# NUBIA: African Chess

Milestone 1: project foundation only. No homepage sections or other complete pages have been implemented.

## Run locally

Use Node.js 20.9 or newer and npm.

```sh
npm ci
npm run dev
```

```sh
npm run lint
npm run typecheck
npm run check:assets
npm run build
```

Next.js App Router and TypeScript, compatible with standard Vercel deployment. No deployment, commerce service, database or runtime secrets are configured. Exact dependency versions are locked in package-lock.json. Fonts are bundled locally through Fontsource; rendering and builds do not request Google Fonts.

Tooling limitation: ESLint is pinned to 9.39.5 because the React plugin bundled with eslint-config-next 16.3.5 fails on ESLint 10 (`contextOrFilename.getFilename is not a function`). npm marks ESLint 9 as unsupported. Revisit this development-only pin when Next's lint plugin supports ESLint 10; do not silently upgrade to a broken lint configuration.

## Scope and source authority

- The supplied `NUBIA_DESIGN_SYSTEM.md` governs appearance and canonical terminology.
- `NUBIA playing Manual.pdf` is authoritative for all rules, setup, board structure, captures, special abilities, victory, notation and strategy.
- User project decisions confirm the eight piece mappings and Palace → Market → Town Center → Outskirts → Border order toward the centre.
- Screenshots guide layout, never override the manual or design system, and contain unapproved commercial placeholders.

Source references accompany foundational game records. No movement rules or cell-level map are implemented yet. The board record explicitly marks its cell mapping as unverified. The product record contains only the confirmed name and an internal content ID, not an invented SKU or availability.

## Structure

- `src/styles/tokens.css`: design-system colours, type, spacing, surfaces, motion and focus tokens.
- `src/app/globals.css`: semantic defaults and shared component styles.
- `src/components`: site shell, provisional wordmark, buttons/links and layout primitives.
- `src/content`: canonical pieces, regions, resources, product identity, navigation and asset manifest.
- `scripts/check-assets.mjs`: development validation and production-readiness gate.

The root route is a minimal foundation status, not Milestone 2. Only Home is currently enabled in both header and footer. Mobile navigation is a disclosure: Enter/Space toggles it, Tab reaches its links, Escape closes it and returns focus to the toggle. Moving focus outside, clicking outside or entering desktop width also closes it. Enable each future route in `navigation.ts` only after implementing it. Do not add placeholder pages or dead links just to fill the navigation.

Shared primitives: `Container` controls maximum width/gutters; `Section` supplies vertical rhythm and dark/ivory tone; `Surface` provides dark/raised/ivory treatments. `Button` is for actions; `ButtonLink` is for navigation, with primary, secondary and text variants. Use descriptive visible labels; do not simulate disabled anchors. Ivory surfaces use dark link/focus colours for contrast.

Accessibility includes a skip link and focusable main target, landmarks, active-page indication, visible focus, minimum 44px controls, semantic HTML and reduced-motion overrides. LAND/SEA must always have text, patterns or icons in later diagrams, never colour alone. Use meaningful alt text at the point of use; decorative artwork gets empty alt text.

## Assets and provisional branding

`assets.json` registers all 31 supplied non-screenshot images without copying or modifying originals. Source paths are relative to the supplied asset folder. `sourceRootHint` is a local audit hint only; neither runtime nor production build reads that folder. Set `NUBIA_ASSET_SOURCE_ROOT` when validating originals on another machine.

The provisional text wordmark and temporary N favicon are centralized in the manifest and consumed through `brand.ts`. Neither is an approved final logo. The SVG uses the brand's black and gold tokens as fixed values because standalone SVG favicons cannot inherit page CSS.

`temporary-hero-chess-board` is reserved for Milestone 2's temporary hero. It is conventional chess artwork, not the real NUBIA board. Never derive rules, terrain, cells, coordinates, resources or instructional diagrams from it. Preserve aspect ratio; do not conceal watermarks. No supplied raster assets are rendered in Milestone 1.

Before using an image in a later milestone, prepare a web derivative under `public/assets`, add its `src` and updated dimensions to the manifest, and consume that manifest entry instead of hard-coding the path. Retain the original `source` for traceability and set meaningful contextual alt text. All supplied images are flagged temporary with uncleared rights. Some contain watermarks and some are too small for hero use. The eight piece renders have opaque white backgrounds.

```sh
npm run check:production
```

This intentionally exits unsuccessfully until all manifest assets have approved status and cleared rights, and all provisional brand marks are replaced/approved. It flags the whole registered library, not just currently rendered images. Remove unused reference records or clear them before release. It does not equate a successful Next.js build with production readiness. Keep this gate in the future release process. The foundation also sets `noindex`; review this explicitly when real pages are ready.

## Subsequent milestones

2. Homepage, with temporary hero imagery and responsive verification.
3. Learn to Play, using manual-backed instructions.
4. Explore, using verified board information only; flag remaining mapping work.
5. All eight piece profiles with manual-backed rules.
6. Informational Shop; no purchase controls or invented product facts.
7. Cross-page accessibility, responsiveness, asset and content verification.

About, policies, account, search, cart, checkout, reviews, accessories, newsletter, tutorial video, gift functionality and all operational commerce remain out of scope. Do not add fabricated business history, contacts, prices, currency, editions, stock, specifications, shipping promises or policies.

## Milestone 1 verification

Production compilation and TypeScript validation pass. The browser shell was checked at 320px, 390px, 768px and 1280px widths. Narrow mobile/tablet checks showed no horizontal overflow. The mobile menu opens, exposes the Home link to Tab navigation, and closes with Escape while restoring toggle focus. The skip link transfers focus to main. No browser warnings/errors were observed. Reduced-motion behavior is defined in CSS; an OS-level reduced-motion emulation check remains for the broader page QA milestone.
