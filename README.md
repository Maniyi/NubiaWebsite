# NUBIA: African Chess

Milestones 1 and 2 are implemented: the shared foundation and the homepage only. Learn, Explore, Pieces and Shop routes remain unimplemented and hidden from navigation.

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
- `src/app/home.css`: homepage compositions and responsive layouts.
- `src/components/home`: server-rendered hero/facts, objective, regions, piece displays, discovery CTA and manifest-backed images.
- `src/components`: site shell, provisional wordmark, buttons/links and layout primitives.
- `src/content`: canonical pieces, regions, resources, product identity, navigation and asset manifest.
- `scripts/check-assets.mjs`: development validation and production-readiness gate.

The root route is the homepage. Only Home is currently enabled in both header and footer. Hero actions target `#world` and `#pieces`; the closing action targets `#objective`. Native anchors transfer focus to the destination section without client-side handlers. Mobile navigation is a disclosure: Enter/Space toggles it, Tab reaches its links, Escape closes it and returns focus to the toggle. Moving focus outside, clicking outside or entering desktop width also closes it. Enable each future route in `navigation.ts` only after implementing it. Do not add placeholder pages or dead links just to fill the navigation.

Shared primitives: `Container` controls maximum width/gutters; `Section` supplies vertical rhythm and dark/ivory tone; `Surface` provides dark/raised/ivory treatments. `Button` is for actions; `ButtonLink` is for route navigation; `ButtonAnchor` is for same-page fragments. All offer primary, secondary and text variants. Use descriptive visible labels; do not simulate disabled anchors. Ivory surfaces use dark link/focus colours for contrast.

Accessibility includes a skip link and focusable main target, landmarks, active-page indication, visible focus, minimum 44px controls, semantic HTML and reduced-motion overrides. LAND/SEA must always have text, patterns or icons in later diagrams, never colour alone. Use meaningful alt text at the point of use; decorative artwork gets empty alt text.

## Assets and provisional branding

`assets.json` registers all 31 supplied non-screenshot images without copying or modifying originals. Source paths are relative to the supplied asset folder. `sourceRootHint` is a local audit hint only; neither runtime nor production build reads that folder. Set `NUBIA_ASSET_SOURCE_ROOT` when validating originals on another machine.

The provisional text wordmark and temporary N favicon are centralized in the manifest and consumed through `brand.ts`. Neither is an approved final logo. The SVG uses the brand's black and gold tokens as fixed values because standalone SVG favicons cannot inherit page CSS.

`temporary-hero-chess-board` appears only in the homepage hero, with an explicit visible notice that it is conventional chess artwork, not the real NUBIA board. Never derive rules, terrain, cells, coordinates, resources or instructional diagrams from it. Its entire composition and aspect ratio are preserved.

Before using an image in a later milestone, prepare a web derivative under `public/assets`, add its `src` and updated dimensions to the manifest, and consume that manifest entry instead of hard-coding the path. Retain the original `source` for traceability and set meaningful contextual alt text. All supplied images are flagged temporary with uncleared rights. Some contain watermarks and some are too small for hero use. The eight piece renders have opaque white backgrounds.

```sh
npm run check:production
```

This intentionally exits unsuccessfully until all manifest assets have approved status and cleared rights, and all provisional brand marks are replaced/approved. It flags the whole registered library, not just currently rendered images. Remove unused reference records or clear them before release. It does not equate a successful Next.js build with production readiness. Keep this gate in the future release process. The foundation also sets `noindex`; review this explicitly when real pages are ready.

## Subsequent milestones

3. Learn to Play, using manual-backed instructions.
4. Explore, using verified board information only; flag remaining mapping work.
5. All eight piece profiles with manual-backed rules.
6. Informational Shop; no purchase controls or invented product facts.
7. Cross-page accessibility, responsiveness, asset and content verification.

About, policies, account, search, cart, checkout, reviews, accessories, newsletter, tutorial video, gift functionality and all operational commerce remain out of scope. Do not add fabricated business history, contacts, prices, currency, editions, stock, specifications, shipping promises or policies.

## Milestone 1 verification

Production compilation and TypeScript validation pass. The browser shell was checked at 320px, 390px, 768px and 1280px widths. Narrow mobile/tablet checks showed no horizontal overflow. The mobile menu opens, exposes the Home link to Tab navigation, and closes with Escape while restoring toggle focus. The skip link transfers focus to main. No browser warnings/errors were observed. Reduced-motion behavior is defined in CSS; an OS-level reduced-motion emulation check remains for the broader page QA milestone.

## Milestone 2 content and assets

Homepage order: existing header → hero → compact game facts → objective/victory overview → five regions → eight pieces → final discovery CTA → existing footer. The homepage remains a server component. No dependencies, animation libraries, new routes or backend services were added. `noindex, nofollow` and the existing production asset gate remain enabled.

Content is in `src/content/home.ts`. Manual page 2 supports the 100 squares, eight piece types, five regions and five resource mines. The objective paraphrases pages 2 and 12, including immediate victory even if the peasant could subsequently be captured. This is an introduction, not the full rules. Region order remains Palace, Market, Town Center, Outskirts, Border. Piece introductions describe visual roles from design-system section 12, not movement or manufacturing claims. No buying controls, commercial facts or product-availability promises appear. A brief closing note identifies the future learning pages and informational product showcase without linking to them.

Fifteen WebP derivatives total 1,085,992 bytes (about 1.04 MiB) before Next.js responsive optimization:

| Derivative group | Files / dimensions | Source |
| --- | --- | --- |
| `public/assets/pieces/` | Eight canonical piece filenames, 640 × 960 | Confirmed `Pieces_Asset/*.png` mapping |
| `public/assets/board/temporary-hero-chess-board.webp` | 554 × 554 | `Images/board_image.jpeg` |
| `public/assets/regions/temporary-royal-portrait.webp` | 640 × 800 | `Images/Footer_image.png` |
| `public/assets/regions/temporary-market-cocoa.webp` | 640 × 360 | `Images/Cocoa-Exporting-commodities.webp` |
| `public/assets/regions/temporary-town-center-architecture.webp` | 640 × 426 | `Images/man-made_wonder.jpg` |
| `public/assets/regions/temporary-outskirts-gold.webp` | 640 × 336 | `Images/Gold Mine.jpeg` |
| `public/assets/regions/temporary-border-waterfall.webp` | 640 × 351 | `Images/border.jpeg` |
| `public/assets/backgrounds/temporary-parchment.webp` | 610 × 501 | `Images/parchment_background.jpeg` |

Only aspect-preserving resizing and WebP encoding were applied. No watermark removal, retouching or background removal occurred. Source path, original dimensions/bytes and SHA-256 hashes are retained alongside the derivative path/dimensions. Original hashes were checked after processing. Piece images retain their white backgrounds within deliberate gallery insets. Region photographs are contextual development references, not assertions that the pictured object is a particular game-board landmark. The royal portrait is reused decoratively in the closing section; parchment is decorative and ignored by assistive technology.

All images are consumed through `getWebAsset`/`AssetImage`, with dimensions reserved in markup, responsive `sizes`, lazy loading below the hero, and a preload for the hero. Missing registered derivatives fail explicitly. None of these assets has been marked approved or cleared.

## Milestone 2 verification

- Browser checks at 320, 390, 768, 1280 and 1600 pixels: no horizontal page overflow; hero aspect ratio remains 1:1. Layouts use one, two or four piece columns and one, two or five region columns.
- Mobile menu opens with Enter, Tab reaches Home, Escape closes it and restores a visible focus outline. Skip link transfers focus to `main-content`.
- Both hero anchors and the final CTA reach their intended sections and transfer focus. The existing header is not sticky, and destination headings remain visible.
- One H1 with ordered H2/H3 sections; LAND/SEA have explicit labels and distinct patterns. Contextual image alt text and empty decorative alt text are present.
- All 17 image instances loaded; each reserves intrinsic dimensions. No image-induced reflow was observed during inspection; this is not a measured field CLS score.
- No browser errors or warnings observed. All visible product controls meet the 44 × 44px target check (including a corrected minimum width on footer/navigation links); layouts retain readable text and full-width mobile CTAs.
- Compiled reduced-motion CSS disables animation, transitions and hover translation. The browser preference was not active and tooling did not expose media emulation, so simulated reduced-motion behavior was not claimed.
- `npm run lint`, `npm run typecheck`, `npm run check:assets`, and `npm run build` pass. `npm run check:production` intentionally fails on the unchanged 33 blockers (31 temporary images and two provisional marks).

Visual limitations: the hero is a small conventional-chess reference, not accurate NUBIA product artwork; region imagery is provisional; piece backgrounds are opaque. All require final owned/licensed replacements before production. Detailed instruction, board mapping, piece profiles, the Shop showcase and every postponed feature remain for later milestones.

`next dev` automatically adds `AGENTS.md` and `CLAUDE.md` with the installed Next.js documentation guidance; `next-env.d.ts` is framework-generated.
