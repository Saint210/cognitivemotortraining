# Source review notes

## Extraction

- 57 unique PDFs were text-extracted locally.
- 624 PDF pages were processed; each extracted text file retains page markers for citation lookup.
- No PDF was empty at extraction time. This does not guarantee that diagrams, tables, or fine print were captured accurately; verify those against the original PDF.
- The source and document inventories preserve source paths, SHA-256 checksums, page counts, and extraction paths.

## Provenance and relevance flags

- Robert confirms that the organized PDF collection came from SMARTfit and that SMARTfit-specific material was obtained from SMARTfit's Google Drive sales tools. This records the user's account of source provenance; it does not establish that SMARTfit authored every included research paper or that every sales claim is independently substantiated.
- Marketing content transcribed from the sales tools is retained under `marketing-inputs/`. The source's revision date, currentness, and public-use permissions have not been independently recorded; see each intake file.
- `Assessment_of_the_Validity_and_Reliability_of_Reac.pdf` studies reaction-speed measurements in the Rezzil Player virtual-reality application and uses a SMARTfit Mini as a real-world comparator. It does not test SMARTfit training efficacy or validate SMARTfit against an independent clinical gold standard.
- `Physical but not cognitive demand of an exercise bout influences subsequent affective inhibition _ Current Issues in Sport Science (CISS).pdf` is a conference abstract about acute exercise sessions performed on a SMARTfit Single by school children. It reports no long-term training or product-efficacy comparison.
- These papers remain in `external-background-research-not-smartfit-validation/` because they do not validate SMARTfit product efficacy; the second does directly use a SMARTfit device and must not be described as unrelated general exercise research.
- The youth and military overview papers explicitly identify SMARTfit sponsorship on their first pages. Treat them as sponsored educational/marketing material, not independent product trials.
- The youth overview appears in two PDF files with different SHA-256 checksums but identical extracted text in this source set. Both are retained; do not assume either file is the authoritative version without provenance confirmation.
- Product specification sheets in the `2026-07` folder are the newest dated set located during this inventory. Robert confirms the PDFs came from SMARTfit, but their current revision status and orderability still need confirmation before public use.
- `Platinum Service Plan 1-01-24.pdf` was added to `service-and-warranty-review-before-use/` and text-extracted with a page marker. Its filename suggests January 1, 2024, but PDF metadata gives a creation/modification date of July 16, 2024; the effective date is unknown. See `strategy/platinum-service-plan-review.md`; do not treat it as current service/warranty guidance or public pricing.
- `product-guides-review-before-use/SMARTfit-BrainHealth.pdf` is the SMARTfit Brain Health lead magnet Robert identified. It is a 42-page, 2025 Rev 1.3 sales guide, already included in the PDF inventory and text extraction. It contains conflicting dated customer/country counts and a printed demo-access credential; see `strategy/smartfit-brain-health-lead-magnet-review.md`. Do not reproduce the credential or treat sales claims as independent research evidence.

## Review status

- Text extraction is not fact verification, scientific appraisal, legal review, or approval to publish.
- The document-by-document appraisal is in `../strategy/research-appraisals.md`, with a compact workbook/CSV register in `../strategy/content-intelligence-csv/research-appraisal.csv`. Direct SMARTfit use must remain distinct from SMARTfit efficacy evidence.
- `source-library/smartfit/claim-register.csv` is an empty claim-review template. Candidate claims currently being tracked are in `strategy/content-intelligence-csv/claim-register.csv`; no claim is approved merely by appearing there.
- No medical efficacy, reimbursement, certification, privacy/compliance, or competitor-comparison claim is approved by this inventory.
- A source can support only what it actually studied or specifies. General exercise research does not establish a SMARTfit-specific outcome.
