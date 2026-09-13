# NUBIA Playing Manual Reference Index

This is a compact routing index for the authoritative playing manual. It is not a replacement rulebook: consult the cited PDF page before implementing or publishing any rule, especially movement, capture, special-power, setup, coordinate, or victory behavior.

## Manual identity

- **Exact filename:** `NUBIA playing Manual.pdf`
- **Repository-adjacent source location at indexing time:** `/Users/mac/Documents/Nubia/NUBIA playing Manual.pdf`
- **SHA-256:** `8cbe6df34a8ee25cf40de501ee398762f6507759601d58763ca6cdf723708ee5`
- **File size:** 11,151,251 bytes
- **Total PDF pages:** 25
- **Visible identity:** cover reads `NUBIA`, `The Afrikan Chess.`, and `Game Manual`; no visible edition or version number was found.
- **Embedded PDF metadata:** title `NUBIA playing Manual.cdr`; author `AdeKU`; creator `CorelDRAW X5`; creation/modification date `2018-12-08 13:23:29 WAT`; PDF 1.5.
- **Index created:** 2026-09-13

## Page-number convention

References in this index use **1-based PDF page numbers**, with the cover as PDF page 1. No printed page numbers are visible anywhere in the manual, so every `Printed` value is `— (none visible)` rather than an inferred logical page number. Existing `src/content` references also appear to use this PDF-page convention (for example, manual page 2 is the overview and page 12 is “How Peasants win the game”).

## Search aliases and terminology

- `Warrior`, asset filename `Pieces_Asset/Warrior.png` → **North-Central War Chief**. The manual also uses `War Chief`, `Warchief`, and `Warchiefs`.
- `Highchief`, `High Chief`, asset filename `Pieces_Asset/Highchief.png` → **East African High Chief**.
- `Advisor`, `War Advisor`, `Southern Africa Advisor`, asset filename `Pieces_Asset/Advisor.png` → **South African Advisor** (canonical website term).
- `Mystic`, asset filename `Pieces_Asset/Mystic.png` → **West African Mystic**.
- **Arable Land** is one of the five resource mines; uppercase **LAND** is an alternating-square terrain type. Do not merge them in search, data, or UI labels.
- **Board Border** is the named central-facing board region/row; it is unrelated to decorative website borders or CSS borders.
- The design system confirms the eight canonical piece names and region order used here. It governs canonical website terminology where the manual varies in spelling or capitalization; this index preserves manual variants as aliases.
- The design system assigns LAND green and SEA blue for website presentation. That presentation rule does not, by itself, supply the manual's missing cell-by-cell terrain mapping.

## Topic index

`Diagram` means an instructional board layout, move map, notation key, or strategy position that should be visually inspected in the PDF. Decorative photos and cover art do not count.

| Canonical topic | Search terms / aliases | PDF page(s) | Printed | What the page covers | Route | Diagram | Ambiguity / conflict |
| --- | --- | ---: | --- | --- | --- | --- | --- |
| Game overview | about NUBIA, African Chess, Afrikan Chess, strategy board game, empires | 2; 24 | — (none visible) | Page 2 introduces the 100-square board, regions, terrain names, piece types, two empires, resources, and premise. Page 24 gives non-procedural benefits and uniqueness claims. | `/learn` | No | Branding varies between `African Chess` in body copy and `The Afrikan Chess.` on the cover; use the design system for website wording. |
| Game objective | objective, guide peasants, land on mine, claim resources | 2; 12–14 | — (none visible) | Defines the objective as landing a male or female peasant on an opponent's natural-resource mine and explains that the win is immediate. Pages 13–14 add draw/tournament and brainwashed-peasant cases. | `/learn` | Yes — p. 12 | See Victory conditions for unresolved draw wording; do not treat “capture the king” as the objective. |
| Board dimensions | board size, 100 squares, 10×10, rows, columns, paths | 2–3 | — (none visible) | Page 2 states 100 alternating squares and columns named 1st through 10th path; page 3 depicts the full board. | `/explore` | Yes — p. 3 | **UNRESOLVED:** `10 × 10` is supported by the 100-square board, ten paths, and diagram, but the prose never explicitly says “10 rows by 10 columns.” |
| Board orientation | own town, opponent town, middle, back, red, blue, two empires | 2–3; 15 | — (none visible) | Describes each town's rows from the board middle toward its back and shows opposing starting sides. Notation marks moves in the opponent's town with an asterisk. | `/explore` | Yes — p. 3 | **UNRESOLVED:** no universal north/south orientation, color-first rule, or shared left-to-right path origin is formally stated. |
| Board coordinates | 1st path, 2nd path, 10th path, location notation, b/o/m/c/p, asterisk | 2; 15 | — (none visible) | Defines numbered paths and the region-letter-plus-path notation used in move records. Page 15 provides notation examples and the opponent-town marker. | `/explore` | Yes — p. 15 notation key | **UNRESOLVED:** the path-number direction for each seated player and a complete coordinate map are not explicitly defined; examples record destination locations but do not resolve every perspective case. |
| Board regions | rows, town, Palace, Market, Town Center, Outskirts, Border | 2–3; 15 | — (none visible) | Identifies five named rows per town and their cultural/resource themes; page 15 assigns notation letters. | `/explore` | Yes — p. 3 | The manual lists middle-to-back as Border → Outskirts → Town Center → Market → Palace; the canonical toward-centre presentation is the reverse. |
| Palace | palace row, royal area, throne, p | 2–4; 15 | — (none visible) | Covers the back royal row's imagery, notation code `p`, initial placement, and the Imperion's palace-row move restriction. | `/explore` | Yes — pp. 3–4 | None beyond the general orientation issue. |
| Market | market row, commodities, export, m | 2–3; 15 | — (none visible) | Describes the export-commodity row and its notation code `m`. | `/explore` | Yes — p. 3 | None beyond the general orientation issue. |
| Town Center | town center, town centre, man-made wonders, c | 2–3; 11; 15 | — (none visible) | Describes the man-made-wonders row, gives notation code `c`, and includes it in the Peasant's own-town sideways special-move area. | `/explore` | Yes — pp. 3, 11 | Manual alternates `town center` and `Town centre`; canonical website term is **Town Center**. |
| Outskirts | outskirt, outskirts row, mines, own town, opponent town, o | 2–3; 11–14; 16–23 | — (none visible) | Defines the natural-resource row, the objective's target squares, notation code `o`, Peasant special-move scope, and many tactical positions. | `/explore` | Yes | Manual sometimes uses singular `outskirt row`; canonical website term is **Outskirts**. |
| Border | border row, middle row, natural wonders, b, board border | 2–3; 11; 15–21 | — (none visible) | Describes the row nearest the board middle, its natural-wonder imagery, notation code `b`, and its effect on the Peasant's sideways special move. | `/explore` | Yes | Do not confuse this board region with decorative website/CSS borders. |
| LAND and SEA | terrain, alternating colors, land square, sea square, di-alternating | 2; 7 | — (none visible) | Names the two alternating square types. The High Chief's secondary move is described as switching from land to sea and vice versa. | `/explore` | Yes — p. 7 | **UNRESOLVED:** prose does not map either printed square color/pattern to LAND versus SEA, and no cell-level terrain map is provided. |
| Resource mines | natural resources, Gold, Crude Oil, Diamond, Arable Land, Silver, mine | 2–3; 12–14; 16–23 | — (none visible) | Names the five resource mines, locates them in each town's Outskirts, and uses them in victory and strategy examples. | `/explore` | Yes | Keep **Arable Land** (resource) distinct from uppercase **LAND** (terrain). |
| Game setup | starting a game, first move, coin flip, alternate turns, arrange population | 3 | — (none visible) | Says first player is chosen by agreement or coin flip, then players alternate one move, and supplies the starting board arrangement. | `/learn` | Yes — critical setup diagram | **UNRESOLVED:** no empire/color is assigned first and the setup is not accompanied by a textual square-by-square list. |
| Initial piece arrangement | arranging your empire's population, starting position, setup diagram | 3 | — (none visible) | Full-board diagram showing both populations in their initial squares. | `/learn` | Yes — critical setup diagram | **UNRESOLVED:** exact cell mapping must be transcribed from the PDF diagram and independently human-verified before implementation; prose alone is insufficient. |
| Turn sequence | starting player, one move, alternate, counts as one turn/move | 3; 7; 10 | — (none visible) | Establishes alternating single moves; later pages clarify that the High Chief's switch and Mystic brainwash each consume a move/turn. | `/learn` | No | **UNRESOLVED:** the manual gives no fuller phase structure, pass rule, or explicit statement about whether a player may decline to move. |
| Legal movement | move, movement points, jump, block, forward, backward, sideways, diagonal | 4–11 | — (none visible) | Piece pages separately define legal movement; movement must not be conflated with capture or special abilities. | `/learn` | Yes — each piece page | **UNRESOLVED:** no general legality glossary defines terms such as `threatened`, `protected`, or `unprotected`; rely on the individual piece text. |
| Capturing | capture points, jump capture, Gbesele, diagonal capture, line of sight | 4–9; 11; 13 | — (none visible) | Piece pages separately define capture behavior, while page 13 supplies material values for tournament resolution. Mystic brainwash on page 10 is explicitly performed instead of capture. | `/learn` | Yes — pp. 4–9, 11 | **UNRESOLVED:** the Imperion's `protected/undefended` condition is not defined elsewhere. Do not infer capture behavior from movement diagrams alone. |
| Special abilities | special move, special power, Gbesele, secondary move, switch, brainwash, re-brainwash, peg, Peasant two-square sideways | 4; 7; 10–11; 14; 22–23 | — (none visible) | Routes to the exact manual text for the Imperion's Gbesele, High Chief's non-capturing switch, Mystic brainwash/remedy, and Peasant sideways special move. | `/learn` | Yes | **UNRESOLVED:** Mystic brainwash text does not expressly say whether an intervening piece blocks the two-square power; do not supply an answer from analogy. Preserve the exact manual rules when implementing. |
| Victory conditions | win, game over, resource mine, immediate, draw, tournament, repetition, 20 moves, values | 2; 12–14; 16–23 | — (none visible) | Covers immediate Peasant victory, brainwashed Peasant victory, repeated-position and no-capture rules, insufficient-Peasant endings, tournament material values, and winning patterns. | `/learn` | Yes | **UNRESOLVED:** page 13 says players “cannot” repeat an exact position three times without stating the adjudication; page 14 calls the 20-move result a draw and then names a blitz winner in tournament play. Human confirmation is required for formal adjudication wording. |
| Game notation | notation, record games, b/o/m/c/p, P/A/M/C/W/Q/I, movement, capture, Gbesele, brainwash, opponent town | 15 | — (none visible) | Gives lowercase location codes, uppercase piece codes, action symbols, the opponent-town marker, and four examples. | `/learn` | Yes — notation key | **UNRESOLVED:** Male and Female Peasants both use `P`; allegiance after brainwash and several coordinate-perspective details have no explicit encoding. |
| Strategy guidance | siege, frontal siege, lateral siege, avenging peasant, embedment, bottomless pit, winning positions, Adewonuola, Afasinu, Gbadeyan, Lepe | 16–23 | — (none visible) | Defines four tactical situations and four named common winning positions, each paired with a board example. | `/learn` | Yes — every page | These pages are guidance/examples, not new general movement rules. Preserve the manual's spellings when naming the positions unless a human approves normalization. |
| Examples and diagrams | setup, movement points, capture points, power points, game over situation, notation example, tactical positions | 3–12; 15–23 | — (none visible) | Provides the setup diagram, piece move/capture/power maps, victory examples, notation samples, and strategy boards. | `/learn` | Yes — primary diagram range | Diagrams are authoritative PDF content but some lack complete prose coordinate labels; do not derive a production cell map from screenshots or unrelated assets. |

## Piece index

These entries route to the exact manual wording. Their descriptions deliberately distinguish **movement**, **capture**, and **special ability** without restating or simplifying the ability rules.

| Canonical piece | Search terms / filename aliases | PDF page(s) | Printed | What the page covers | Route | Diagram | Ambiguity / conflict |
| --- | --- | ---: | --- | --- | --- | --- | --- |
| Imperion | king, ruler, throne, Gbesele, `Pieces_Asset/Imperion.png`, `I` | 2–4; 13; 15; 24 | — (none visible) | Page 4 separately states movement limits, the three capture criteria, simultaneous capture, and the named Gbesele capture move. Other pages cover setup, notation, value, and invulnerability claims. | `/pieces` | Yes — pp. 3–4 | **UNRESOLVED:** `threatened`, `protected`, and `unprotected/undefended` are not formally defined. The piece “cannot be captured,” so do not import chess check/checkmate assumptions. |
| Queen | `Pieces_Asset/Queen.png`, `Q`, straight, diagonal, any distance | 2–3; 5; 13; 15 | — (none visible) | Page 5 separately defines unrestricted-distance straight/diagonal movement and capture, with no jumping, and identifies the starting relation to the Imperion. | `/pieces` | Yes — pp. 3, 5 | None stated. |
| North-Central War Chief | Warrior, War Chief, Warchief, Warchiefs, `Pieces_Asset/Warrior.png`, `W`, L shape, jump | 2–3; 8; 13; 15 | — (none visible) | Page 8 separately defines the L-shaped movement and capture and says this is the only piece type that can jump over pieces. | `/pieces` | Yes — pp. 3, 8 | The manual varies spacing/capitalization; canonical website term is **North-Central War Chief**. |
| East African High Chief | Highchief, High Chief, `Pieces_Asset/Highchief.png`, `C`, primary move, secondary move, switch, land to sea | 2–3; 7; 13; 15; 20–21 | — (none visible) | Page 7 separates diagonal primary movement/capture from the one-step sideways, non-capturing secondary switch. Later strategy diagrams/captions use a High Chief as defender. | `/pieces` | Yes — pp. 3, 7, 20–21 | **UNRESOLVED:** the LAND/SEA color mapping needed to validate a switch is not stated in prose. Notation uses `C`, not the expected initial `H`. |
| South African Advisor | Advisor, War Advisor, Southern Africa Advisor, `Pieces_Asset/Advisor.png`, `A`, vertical, horizontal | 2–3; 6; 13; 15; 20–21 | — (none visible) | Page 6 defines orthogonal any-distance movement and capture with no jumping; pages 13 and 15 give value and notation. Strategy text mentions Advisor defense. | `/pieces` | Yes — pp. 3, 6 | **UNRESOLVED naming conflict:** overview says **South African Advisor**, the piece-page title says `The Southern Africa Advisor`, body says `war advisors`, and the value table says `War Advisor`. Use the design-system canonical name pending human confirmation of manual errata. |
| West African Mystic | Mystic, `Pieces_Asset/Mystic.png`, `M`, brainwash, re-brainwash, peg, power | 2–3; 9–10; 13–15; 18; 22–23 | — (none visible) | Page 9 separates ordinary movement and capture. Page 10 contains the exact once-per-Mystic brainwash power, peg handling, exclusions, and remedy; later pages show strategic uses. | `/pieces` | Yes | **UNRESOLVED:** the special-power text does not expressly resolve intervening-piece blocking. Brainwash is performed instead of capture and must not be modeled as an ordinary capture. |
| Male Peasant | Peasant, male, `Pieces_Asset/male_peasant.png`, `P`, forward, sideways, mine | 2–3; 11–23 | — (none visible) | Page 11 gives shared Male/Female Peasant movement, capture, backward restriction, and special move; pages 12–23 cover victory, notation, and strategy. | `/pieces` | Yes | The manual gives both Peasant types the same rules and the same notation code `P`; it does not state a rules-level distinction between them. |
| Female Peasant | Peasant, female, `Pieces_Asset/Female_peasant.png`, `P`, forward, sideways, mine | 2–3; 11–23 | — (none visible) | Page 11 gives shared Male/Female Peasant movement, capture, backward restriction, and special move; pages 12–23 cover victory, notation, and strategy. | `/pieces` | Yes | The manual gives both Peasant types the same rules and the same notation code `P`; it does not state a rules-level distinction between them. |

## Existing `src/content` source-reference audit

Checked: `src/content/game.ts`, `src/content/home.ts`, and the source-reference type in `src/content/types.ts`.

- `playing-manual`, PDF page 2 correctly supports the eight piece names, five region concepts, five resources, 100 squares, ten numbered paths, LAND/SEA names, two-empires premise, and basic objective. The `rows: 10` value is consistent with the full board and five rows per town, but the manual does not explicitly state the row count as a standalone number; keep cell mapping unverified.
- `src/content/home.ts` assigns the entire objective block only to PDF page 12. Page 12 supports the immediate-win conclusion and landing on an opponent's mine, but **the “five” mines and “Outskirts row” details are stated explicitly on PDF page 2**. This reference is potentially incomplete for the combined block; report/repair it in a later code task, not here.
- The existing region order Palace → Market → Town Center → Outskirts → Border is consistent with moving from the royal/back area toward the centre. The manual states the same rows in reverse when describing middle-to-back orientation.
- No existing source reference was found that points to a plainly wrong PDF page. No application source was modified during this audit.

## Human-confirmation queue

Before implementing board/rules data, resolve the items marked `UNRESOLVED`, especially:

1. exact coordinate/path orientation for both players and a verified cell-by-cell setup map;
2. which alternating square color/pattern is LAND and which is SEA;
3. formal meanings of threatened/protected/unprotected for Imperion capture;
4. whether an intervening piece blocks Mystic brainwash;
5. adjudication wording for threefold exact-position repetition and the tournament form of the 20-move no-capture rule;
6. canonical handling of the South African/Southern Africa/War Advisor naming variants;
7. whether notation needs to distinguish Male/Female Peasants or post-brainwash allegiance.
