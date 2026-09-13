# Frontend production readiness

Milestone 8 audit date: 2026-09-13. This is an actionable release checklist, not approval to deploy.

## 1. Implemented routes

- `/`: brand introduction, objective, regions, piece overview, and closing route handoff.
- `/learn`: setup/turn primer, LAND and SEA, movement categories, and victory condition.
- `/explore`: board overview, terrain, region catalogue, and resource-mine guide.
- `/pieces`: all eight manual-backed profiles with query-driven selection.
- `/shop`: prototype gallery, editions, quantity, cart actions, inclusions, specifications, and related concepts.
- `/cart`: persistent prototype cart, line quantities, removal, recommendations, and totals.
- `/checkout`: session-only information/shipping validation plus payment and confirmation placeholders.

## 2. Completed frontend functionality

Shared responsive shell, active navigation, skip link, anchor subnavigation, accessible placeholder system, manifest-backed images, product-gallery selection, edition and quantity controls, integer-minor-unit totals, local cart persistence, cart drawer focus trap, cart page synchronization, and non-operational checkout step navigation are implemented.

## 3. Temporary image inventory

The asset manifest registers 31 temporary, rights-uncleared image sources and two provisional brand marks. Runtime derivatives currently cover one atmospheric conventional-chess hero, five regional references, a parchment texture, and eight piece sculptures. Consult `src/content/assets.json` for the complete record; none is production-approved.

## 4. Required final board imagery

Replace the conventional-chess homepage hero and supply approved NUBIA-specific hero/overview imagery for Home, Learn, Explore, and Pieces. A verified 100-square board, both empires, row orientation, and cell mapping must come from the game owner; do not infer them from mockups.

## 5. Required movement diagrams

Supply verified setup, general movement, LAND/SEA, victory, and per-piece movement/capture/special-ability diagrams. Imperion conditions, Mystic brainwash blocking, High Chief terrain switching, Peasant special movement, and coordinate orientation need owner verification where noted in the manual index.

## 6. Required region/resource icons

Supply one coherent icon family for Palace, Market, Town Center, Outskirts, Border, and the five resource mines. LAND and SEA must retain text/pattern distinctions in addition to color. Exact mine cells remain unverified.

## 7. Required product photography

Supply owned/licensed board, overhead, pieces, packaging, detail, video-preview, inclusions, upgrade set, board mat, storage box, and apparel media with final crops and intrinsic dimensions.

## 8. Provisional logo/favicon

The text wordmark and `public/brand/provisional-n.svg` favicon are provisional and intentionally block production. Replace or explicitly approve both before release.

## 9. Prototype prices and editions

The primary product is USD 89.99 with Premium and Standard prototype editions. Related concepts are USD 39.99, 29.99, 44.99, and 24.99. All are centralized in `src/content/storefront.json`, visibly labeled prototype content, and require commercial approval.

## 10. Missing product specifications

Players, ages, play time, physical dimensions, final edition differences, component quantities/materials, packaging, availability, and manufacturing claims remain unconfirmed.

## 11. Missing policies

Shipping, returns/refunds, privacy, terms, warranty, accessibility contact, support, taxes/duties, and regional sales policies are absent. Do not create policy links until approved content exists.

## 12. Backend requirements

Production needs an approved commerce backend, product/catalog source, secure customer-data handling, server-side validation, rate limiting, observability, and error recovery. The current app has none of these.

## 13. Payment-provider requirement

No provider is selected or installed. Production payment fields must be provider-hosted or otherwise implemented to the approved security/compliance design; the prototype intentionally collects no payment credentials.

## 14. Order and inventory requirements

No order, transaction, reservation, stock decrement, tax quote, shipping rate, email, or confirmation is created. Define inventory authority, idempotent order creation, fulfillment, cancellation/refund, and customer-notification flows before enabling checkout.

## 15. Hosting decision

`.openai/hosting.json` registers the private ChatGPT Sites project ID `appgprj_6aa6e61c2a4c8191a4877a7967d433ae`. It contains an identifier, not a credential or runtime secret. It is not required for normal Next.js development and is ignored by a standard Vercel deployment. Retain it only while the private Sites project remains a valid option; if Vercel is definitively selected and Sites is abandoned, remove it in a separate hosting decision change. No hosting configuration was changed and nothing was published during this audit.

## 16. SEO/noindex status

Root metadata remains `noindex, nofollow`. Keep it until content, legal, asset, commerce, canonical URL, social metadata, sitemap, and launch approval are complete.

## 17. Remaining game-owner clarifications

Confirm coordinate/path orientation, setup and cell map, printed LAND/SEA mapping, Imperion terminology, Mystic blocking, repetition/no-capture adjudication, Advisor naming, and Peasant/brainwash notation. See `docs/NUBIA_MANUAL_INDEX.md` for source pages and exact ambiguity notes.

## 18. Recommended future order

1. Resolve game-owner rules and board-map questions.
2. Approve final brand marks and acquire cleared board/diagram/icon/product assets.
3. Approve catalog facts, prices, editions, availability, and policies.
4. Select hosting, commerce, payment, tax, shipping, inventory, and order services.
5. Implement and security-test backend integrations and operational communications.
6. Complete accessibility, performance, SEO, legal, analytics-consent, and release QA before removing `noindex`.

## Current production gate

`npm run check:production` is expected to fail on 34 registered blockers: prototype storefront content, two provisional brand marks, and 31 temporary/rights-uncleared image sources. Do not suppress or downgrade these blockers to obtain a passing command.
