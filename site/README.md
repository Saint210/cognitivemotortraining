# Website scaffolding (Astro + Sveltia CMS) — placeholder only

Status: technical scaffolding only. No approved public copy, no final brand/visual identity, not
deployed anywhere. See the root [`CLAUDE.md`](../CLAUDE.md) for the governance rules this project
must follow (claim register, pricing, brand placeholders) — they are not repeated here.

## What's here

- `src/content.config.ts` — defines the `pages` content collection (schema matches
  `strategy/content-intelligence-csv/page-briefs.csv` columns, plus a `claimIds` field for future
  claim-register citations).
- `src/content/pages/*.md` — one entry per top-level route, placeholder text only.
- `src/layouts/BaseLayout.astro` — shared header/nav/footer. Mobile nav uses a plain
  `<details>`/`<summary>` disclosure, so the site ships with zero client-side JavaScript.
- `src/layouts/StubPage.astro` — generic placeholder renderer used by every route except the
  homepage.
- `src/pages/index.astro` — homepage, following the structure in
  `strategy/diffui-homepage-design-brief.md`.
- `public/admin/` — [Sveltia CMS](https://sveltiacms.app/) admin UI, currently configured for
  **local-only editing** (File System Access API, no OAuth, no proxy server — see the comment at
  the top of `public/admin/config.yml`). Wiring a real Git-backed login is a follow-up step tied
  to the hosting decision.

## Commands

| Command         | Action                                        |
| :--------------- | :-------------------------------------------- |
| `npm install`    | Install dependencies                           |
| `npm run dev`     | Start local dev server at `localhost:4321`     |
| `npm run build`   | Build production output to `./dist/`           |
| `npm run preview` | Preview the build locally                      |

To use the CMS locally: run `npm run dev`, open `http://localhost:4321/admin/index.html` in a
Chromium-based browser, choose "Work with Local Repository", and select the repository root
(`C:\repos\cognitivemotortraining`, the folder containing `.git` — not this `site/` folder).
