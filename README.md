# Cognitive Motor Training website project

This is the clean successor project for the SMARTfit sales website. The legacy website remains a separate reference and is not the source of truth for this project.

## Current status

- SMARTfit source PDFs are organized under `source-library/smartfit/`.
- Robert confirms the PDF collection came from SMARTfit and SMARTfit marketing content came from its Google Drive sales tools; see the source-library provenance notes.
- The source collection has been indexed and locally text-extracted for page-level review.
- Initial positioning, audience, site architecture, and content-governance foundations are in `strategy/`.
- The content-intelligence workbook is in `strategy/content-intelligence-workbook.xlsx`; it includes a dedicated Research Appraisal tab and remains a working research/planning tool, not approved website copy.
- Readable CSV exports of each workbook tab, with VS Code opening instructions, are in `strategy/content-intelligence-csv/`.
- The newest-dated product-specification grouping and current manufacturer product pages have been reconciled; see `strategy/product-specification-review.md` and the Product Matrix for resolved current-page details and remaining conflicts.
- SMARTfit's published MultiTrainer page record describes E for 2-station and P for 3-/4-station systems, but E's current availability and the record's applicability are unconfirmed. A written clarification request is drafted, not sent.
- The Platinum Service Plan PDF has been added to the internal source library and reviewed against its one-page text extraction; its effective date and current terms remain unconfirmed, and rates stay internal.
- Robert supplied SMARTfit's US reseller price list effective July 1, 2026. The original workbook and structured pricing extraction are in the Git-ignored restricted commercial-pricing folder. Use it as the current supplied US reseller catalog/price source, but confirm specific availability before quoting; never publish the private reseller prices.
- Robert's business vision is to grow online SMARTfit sales toward a future combination location in or near San Antonio, with demos, training/wellness, possible clinical services, and evaluation of a separate Hypergravity suit. This is an aspiration, not an existing location, partnership, proven combined protocol, or confirmed financial plan; see `strategy/business-vision-and-phases.md`.
- The public sitemap for the NeuroAdaption Center website Robert identified was reviewed (58/58 listed pages returned HTTP 200 on 2026-10-27); see `strategy/neuroadaption-site-review.md` for scope, observations, and claim guardrails.
- Public sales-process pages for SMARTfit and selected alternatives were reviewed on 2026-10-28; see `strategy/competitor-sales-process-review.md` for useful buyer-journey patterns and limits. This is a public-content benchmark, not evidence of competitors' conversion performance.
- A DiffUI-ready homepage generation brief and 100-point visual/UX review scorecard are in `strategy/diffui-homepage-design-brief.md`; they are designed to avoid unverified claims and confidential data.
- The research and white-paper PDFs have been appraised individually; see `strategy/research-appraisals.md` and the Research Appraisal tab/CSV for study design, findings, limitations, and safe-use guardrails.
- Robert confirms SMARTfit products are currently available for sale.
- Robert confirms Texas is his territory and he can make sales beyond Texas; fulfillment and support details still need confirmation before the site promises them.
- The public brand name, logo, domain strategy, and visual identity are not approved yet.
- No website framework or production site has been initialized yet.

## Working principles

1. Serve all relevant SMARTfit institutional markets with a clear, balanced entry point and dedicated audience journeys.
2. Do not invent product facts, research findings, endorsements, certifications, efficacy, reimbursement, pricing, or reseller status.
3. Keep private commercial information out of public content and client-side code.
4. Preserve source documents and record citations for claims before publication.
5. Prefer a fast, accessible, content-first website with limited client-side JavaScript.
6. Treat this folder as the new source of truth. Do not silently synchronize changes with the legacy project.

## Next phases

1. Confirm business identity, authorized-dealer and brand wording, lead handoff, fulfillment/support limits, and public-contact details.
2. Review SMARTfit's current product catalog and source evidence with the manufacturer.
3. Approve brand positioning and visual direction.
4. Validate the site map and page briefs against actual demand and sales conversations.
5. Select the framework/build approach and implement a focused design system.
6. Build, test, measure, and refine the production site.
