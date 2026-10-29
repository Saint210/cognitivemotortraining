# Proposed site architecture

Status: first-pass information architecture; validate routes, manufacturer scope, keyword evidence, and operational capability before implementation

## Architecture principles

- One broad homepage routes all audiences; it should not be an undifferentiated wall of copy.
- Each major audience receives a distinct application hub and a relevant buyer journey.
- Product configuration pages describe systems using current, cited specifications.
- Research education is separated from SMARTfit product claims.
- Comparison pages are factual, sourced, and explicit about where products have different purposes.
- Every page has one primary purpose, one primary search intent, and a clear next step.
- Prices remain private. Accept sales inquiries from Texas and beyond; confirm availability and any delivery, installation, or support arrangements before making commitments.
- The present site supports online product sales and buyer education. A physical SMARTfit demonstration location is a future goal, not an existing facility; do not imply in-person access until it is established.
- The longer-term concept is a combination facility in or near San Antonio: product demos, training/wellness, and potentially licensed clinical services. This is not a current location or service offering.
- Hypergravity is a possible future, separate offering. Do not present it as a SMARTfit product or imply a relationship with the Neuro Adaption Center in Oxnard. Do not claim combined outcomes or coverage without appropriate evidence and payer-specific review.

## Top-level navigation

1. **Applications**
2. **SMARTfit systems**
3. **How it works**
4. **Research & resources**
5. **Compare systems**
6. **About**
7. **Request a private consultation**

Use a responsive mega-menu only if it improves finding a relevant audience or product. Do not let the navigation expose every article and product at once.

## Silo map

### Home

Purpose: explain what the site offers, establish trust without unsupported superlatives, and route the visitor by setting or system.

Primary sections:

- Clear, plain-language positioning.
- Audience chooser with links to each application hub.
- Product-family overview.
- Short explanation of cognitive-motor training, accurately scoped.
- Evidence and product-information pathway.
- Private consultation/sales CTA and a clear note that sales inquiries are accepted beyond Texas, with fulfillment and support details confirmed individually. Do not promise in-person demos at a future site.

### Applications

- `/applications/` — audience selector and application overview.
- `/applications/rehabilitation/` — therapy and rehabilitation settings.
- `/applications/healthy-aging/` — senior living and community wellness.
- `/applications/sports-performance/` — sports and athletic performance.
- `/applications/education/` — school, youth, and after-school settings.
- `/applications/tactical/` — tactical and military training, only if current product fit and permissions are confirmed.
- `/applications/brain-health-fitness/` — general fitness and brain-health use cases, with wellness/medical distinctions.
- `/applications/research/` — research inquiry information; no implied partnerships.

For each application page, answer: who evaluates the system, what it is used for (supported by sources), which product configurations may be relevant, what facility questions matter, what evidence exists and does not establish, and how to ask for a private consultation.

### SMARTfit systems

- `/systems/` — product-family overview and comparison by format/use setting.
- `/systems/mini/`
- `/systems/multitrainer/`
- `/systems/protrainer/`
- `/systems/strikepods/`
- `/systems/neuro-rehab-kit/` — include only if confirmed as a current, independently selectable offering.
- `/systems/configurations/` — mounting, impact level, wired/wireless, station count, and accessory details where current specs support them.

Product pages should rely on approved current manufacturer data. Avoid pricing, promised outcomes, unverified license terms, or presenting a spec-sheet option as currently orderable without confirmation.

### How it works

- `/cognitive-motor-training/` — define the term and distinguish it from clinical treatment claims.
- `/dual-task-training/` — explain the general concept, with independent research separated from SMARTfit-specific evidence.
- `/system-use-and-setup/` — create only from reviewed manuals and manufacturer-approved guidance.
- `/data-and-reports/` — describe reports only from current specs/manuals and approved data-privacy information. Do not claim HIPAA compliance/certification for the reseller or site based on a manufacturer document.

### Future demonstration location (deferred)

- Consider `/visit/` or a location page only after a physical site is funded, operating, accessible, and approved for public visits.
- If established, distinguish sales demos, wellness/training services, and licensed clinical services with clear providers, scope, scheduling, and payment/coverage information.
- Until then, the website may gather nonbinding interest in future in-person demonstrations, but must say that no location or appointment availability is established.
- Any future Hypergravity information should be a separate, sourced offering page only after the exact product, permissions, training, safety, service model, and claims have been verified.
- Do not reference the Neuro Adaption Center in Oxnard as a partner, endorser, or program source without permission.

### Research & resources

- `/research/` — searchable evidence index, grouped by study type and population.
- `/research/smartfit-product-studies/` — only studies that actually evaluated SMARTfit; state sponsorship, sample, method, results, and limitations.
- `/research/related-evidence/` — broader dual-task, exergaming, and motor-cognitive evidence clearly labeled as not product validation.
- `/resources/product-guides/`
- `/resources/manuals/` — internal or user-facing only with permission and safe redaction.
- `/resources/specifications/` — approved public datasheets only.
- `/resources/glossary/` — explain terms without promising outcomes.

Each research entry should distinguish peer-reviewed article, pilot, protocol, review, sponsored overview, case study, or manufacturer collateral. Summaries require source page references and must not overstate causality or generalizability.

### Compare systems

- `/compare/` — overview of comparison topics.
- `/compare/dynavision-d2/`
- `/compare/bioness-bits/`
- `/compare/dividat-senso/`
- `/compare/fitlight/`
- `/compare/reaction-training-systems/`

Only compare products with meaningful overlap for the buyer's stated need. Bioness gait/FES products should not be treated as direct substitutes for Bioness BITS or SMARTfit merely because they share a brand. Cite each non-SMARTfit fact to a current public manufacturer or reputable source; date the comparison; correct errors promptly.

### About and conversion

- `/about/` — Robert's relevant professional background, business role, location, and limitations, using confirmed facts only.
- `/contact/` — actual working contact methods.
- `/request-demo/` — form that does not request protected or sensitive user/patient data.
- `/privacy/` and `/terms/` — written for the actual deployed services, analytics, lead routing, and jurisdiction.

## Interlinking rules

- Homepage links to every application hub, the system overview, the research hub, and consultation.
- Every application page links to relevant systems, only applicable research, and the next-step contact path.
- Every product page links to the applications it supports, the approved specification, relevant setup guidance, and consultation.
- Each research item links to the population/application page only where its findings are relevant and clearly qualified.
- Comparison pages link to relevant system pages and explain differences in intended use.
- Breadcrumbs reflect the hierarchy; related-content links should be selected, not autogenerated without relevance.

## Routes to avoid

- Do not create near-duplicate location pages for worldwide SEO without real local service.
- Do not create one page per diagnosis unless the product evidence, buyer need, and approved use substantiate a distinct page.
- Do not generate programmatic comparison pages from unsupported feature matrices.
- Keep test, preview, admin, and draft content out of the public sitemap and index.
