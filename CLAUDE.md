# Cognitive Motor Training website project

Read README.md first. This folder is the source of truth for the SMARTfit sales website successor. The legacy site is reference only; never sync with it silently.

## Layout
- strategy/ : positioning, site architecture, content governance, reviews, workbook and CSV exports
- source-library/smartfit/ : source PDFs, derived-text, claim-register.csv, document-inventory.csv, source-index.csv
- No website framework is initialized yet. Prefer a fast, accessible, content-first site with minimal client-side JS.

## Hard rules
1. PRIVATE PRICING: you may read source-library/smartfit/restricted/ for internal analysis, but reseller prices and pricing-derived numbers must NEVER appear in public content, site code, client-side code, build output, or any committed file. Keep pricing work in files under restricted/ (git-ignored) only.
2. Do not invent product facts, research findings, endorsements, certifications, efficacy, reimbursement, pricing or reseller status.
3. Follow strategy/content-governance.md. Any public factual claim needs a row in source-library/smartfit/claim-register.csv with exact file and page. Only `approved-for-publication` claims may appear in public copy.
4. Copy numeric specs exactly, with units. Visually verify PDF tables; do not trust OCR alone.
5. Brand name, logo, domain and visual identity are NOT approved. Use placeholders.
6. Do not send emails or messages (e.g. manufacturer-clarification-request.md is a draft only).
7. Preserve source documents; do not move or rename files in source-library without asking.

## Reading source documents (keeps token cost low)
- Every PDF in source-library/smartfit/ has a matching text file in source-library/smartfit/derived-text/ (same subfolder layout, same name, .txt). Read the .txt, not the PDF.
- Find things with search (grep / Select-String) first, then read only the relevant lines or section. Do not read whole large files (some are 70-100 KB) unless needed.
- Use source-index.csv and document-inventory.csv to locate documents.
- Open a PDF only to visually verify a specific table, diagram or page cited in a claim. State the file and page.
- Do not bulk-read the source library. Work one task at a time and keep sessions focused.

## Working style
- Keep answers concise. Say what you changed and which files.
- When unsure whether something is confirmed, check README.md "Current status" and say it is unconfirmed.
