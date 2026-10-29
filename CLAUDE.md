# Cognitive Motor Training website project

Read README.md first. This folder is the source of truth for the SMARTfit sales website successor. The legacy site is reference only; never sync with it silently.

## Layout
- strategy/ : positioning, site architecture, content governance, reviews, workbook and CSV exports
- source-library/smartfit/ : source PDFs, derived-text, claim-register.csv, document-inventory.csv, source-index.csv
- No website framework is initialized yet. Prefer a fast, accessible, content-first site with minimal client-side JS.

## Hard rules
1. PRIVATE DATA: never open, read, quote, summarize or copy anything in source-library/smartfit/restricted/. Never put reseller prices or pricing-derived numbers in public content or client-side code.
2. Do not invent product facts, research findings, endorsements, certifications, efficacy, reimbursement, pricing or reseller status.
3. Follow strategy/content-governance.md. Any public factual claim needs a row in source-library/smartfit/claim-register.csv with exact file and page. Only `approved-for-publication` claims may appear in public copy.
4. Copy numeric specs exactly, with units. Visually verify PDF tables; do not trust OCR alone.
5. Brand name, logo, domain and visual identity are NOT approved. Use placeholders.
6. Do not send emails or messages (e.g. manufacturer-clarification-request.md is a draft only).
7. Preserve source documents; do not move or rename files in source-library without asking.

## Working style
- Keep answers concise. Say what you changed and which files.
- When unsure whether something is confirmed, check README.md "Current status" and say it is unconfirmed.
