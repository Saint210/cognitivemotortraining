# Content and evidence governance

Status: required workflow for future public content

## Source-of-truth hierarchy

Use the following order when checking a statement:

1. Current manufacturer-issued product specifications or written clarification for product facts.
2. Original peer-reviewed study, registry, or primary document for research findings.
3. Current legal, regulatory, certification, or compliance records for claims in those areas.
4. Manufacturer collateral for context only; label sponsorship and marketing purpose.
5. Third-party articles for market context, never as sole substantiation for a product claim.

Website copy from the legacy project, search snippets, AI output, filenames, and unsourced sales materials are not evidence.

## Required claim record

Before any factual or comparative claim is approved for the public site, add a row to `source-library/smartfit/claim-register.csv` containing:

- Proposed exact wording.
- Claim category (product specification, research, performance, safety, regulatory/compliance, reimbursement, competitor, business identity, or other).
- Exact source file and page number.
- Supporting excerpt or a carefully labeled paraphrase.
- Product model, population, setting, and date/version to which the claim applies.
- Study design, sponsorship, sample, and limitations where applicable.
- Conflicts with other documents.
- Approval status, reviewer, review date, and public-use permission.

Allowed working statuses: `unreviewed`, `needs-evidence`, `conflicting`, `reviewed-not-approved`, `approved-for-publication`, and `retired`.

Only `approved-for-publication` claims may be used in public copy. Approval applies only to the exact wording and scope reviewed, not to broader interpretations.

## Research-summary standard

For each study, record:

1. Full citation, publication date, and DOI/registry URL where available.
2. Whether it evaluated SMARTfit specifically or is background evidence.
3. Funding/sponsorship and author affiliations.
4. Study type and design.
5. Participant population, sample size, setting, and duration.
6. Outcomes measured and the exact result, with units/statistics if reported.
7. Study limitations and author-stated future research.
8. What the study does not demonstrate.
9. Approved one-sentence summary tied to the source pages.

Do not present association as causation, a pilot as definitive proof, an immediate result as long-term change, or a group's result as a guaranteed individual result.

## Product-information standard

- Robert confirms SMARTfit products are currently available for sale. Confirm the specific model, revision date, orderability, and any configuration limits against current manufacturer information before publishing product-specific details.
- Copy numeric specifications exactly, preserving units and exclusions.
- Distinguish included equipment from optional accessories and customer-supplied items.
- Distinguish app capability, license requirements, and hardware requirements.
- Do not rely on OCR alone for tables, diagrams, dimensions, or fine print; visually verify the PDF page.
- Do not publish pricing or inferred configurations.

## High-risk claims requiring explicit review

Medical diagnosis or treatment, efficacy, fall reduction, cognitive improvement, brain changes, return-to-play, injury prevention, reimbursement/CPT, FDA/regulatory status, CE certification, HIPAA/security/privacy, tax credits, competitor superiority, customer counts, dealer status, geographic coverage, clinical protocols, and endorsements.

## AI-assisted workflow

1. Retrieve the relevant original file and exact page.
2. Use extracted text to find the passage; verify it in the PDF visually.
3. Draft narrowly and cite the source in the claim register.
4. Mark unsupported or ambiguous statements as questions rather than filling gaps.
5. Have a qualified human approve high-risk claims and public permission.
6. Generate or edit public copy only from approved claim rows and approved business facts.
7. Recheck the rendered page, links, metadata, sitemap, and build before release.

AI may find, extract, structure, and draft. It does not approve evidence or determine clinical, legal, regulatory, privacy, or reseller status.
