# DiffUI homepage design brief and review scorecard

Status: design-generation brief; internal working document, not approved public copy  
Prepared: October 28, 2026  
Purpose: generate and evaluate homepage design concepts before choosing a visual identity or implementing the site

## How to use this brief

1. Paste the **DiffUI generation prompt** below into DiffUI.
2. Generate homepage concepts only. Do not design the full site yet.
3. If using reference screenshots, use only material you have permission to share. Do not upload confidential, customer, pricing, credential, or unpublished source-library materials.
4. Score the strongest concepts with the scorecard. Reject any concept that fails a hard gate, regardless of its visual score.
5. Refine the chosen concept through one or two focused iterations, then share screenshots/exported code for review before treating it as implementation-ready.

DiffUI describes screenshot-based style matching and code/token generation on its public site. Those features should be treated as starting points; generated code and extracted design tokens still require review.

## Project context

- **Site purpose:** help institutional buyers evaluate SMARTfit cognitive-motor training systems and request a private sales conversation.
- **Business identity:** this is Robert Aguilar's SMARTfit sales activity, not the manufacturer's corporate website. Public company name, logo, domain, trademark permissions, and authorized-dealer wording are not yet approved.
- **Primary audience:** organizational decision-makers across rehabilitation/therapy, senior living/healthy aging, sports performance, education/youth, tactical training, and community wellness.
- **Primary conversion:** request a private consultation about organizational needs. A demo CTA may be used for online demonstrations only if that process is actually available and approved.
- **Secondary conversion:** explore systems and applications.
- **Business policy:** prices remain private. Sales inquiries may come from Texas and beyond; confirm availability, delivery, installation, and support arrangements individually.
- **Future vision, not current offer:** a physical demonstration/training/wellness location in or near San Antonio is an aspiration, not an operating location. Do not advertise in-person demos, clinical services, or Hypergravity integration as currently available.
- **Evidence policy:** product functions, clinical efficacy, research findings, reimbursement, and business outcomes are distinct. Do not imply treatment, prevention, guaranteed performance, insurance coverage, or independently proven benefit without specific substantiation and approval.
- **Brand direction:** no final logo, colors, typography, or identity system has been approved. The design should feel professional and evidence-aware without pretending that provisional styling is an established SMARTfit brand.

## DiffUI generation prompt

```text
Design one polished, responsive homepage concept for an independent SMARTfit systems sales and buyer-guidance website run by Robert Aguilar. This is not SMARTfit Inc.'s corporate site. The public business name, logo, and visual identity have not been finalized, so use a neutral, editable visual direction and a simple text wordmark placeholder such as “SMARTfit system guidance” rather than inventing a logo or implying manufacturer ownership.

GOAL
Help institutional decision-makers quickly identify whether the site serves their organization, understand that they can explore SMARTfit system options, and request a private consultation. Optimize for credibility, clarity, accessibility, and qualified inquiries—not hype or pressure.

AUDIENCES
Represent these organizational settings inclusively: rehabilitation and therapy; senior living and healthy aging; sports performance and athletics; education and youth programs; tactical training; community wellness. The buyer is usually an organizational leader, while equipment participants may be patients, residents, students, athletes, service members, or community members. Do not make any one audience appear to be the only or default market.

PAGE STRUCTURE
1. Header with text-based placeholder identity, concise navigation (Applications, Systems, How It Works, Research & Resources, About), and one visible “Request a private consultation” CTA.
2. Hero with a plain-language headline about helping organizations evaluate SMARTfit systems; one short supporting sentence; primary consultation CTA and secondary “Explore systems” CTA. Use neutral placeholder copy, not outcome promises.
3. Audience selector with six clear, accessible cards or links for the settings above. Each card should state the buyer's practical question or decision, not a medical or performance promise.
4. Product-family overview using only neutral categories (interactive panels, multi-station systems, strike pods). Mark product names, specifications, license details, and availability as subject to verification; do not show prices.
5. “How to evaluate fit” section with practical topics: intended use, room/setup, group size, staffing, device/software requirements, and implementation questions. Do not make up answers or numeric specifications.
6. Evidence-aware information section linking concept education, SMARTfit-specific research, and general research as distinct resource types. Do not imply general research proves a SMARTfit-specific outcome.
7. Consultation section that sets expectations: private conversation about organization, setting, goals, and product questions. Do not ask for patient, student, or other sensitive personal/health information.
8. Footer with clear independent-sales identity placeholder, privacy/terms links, and a concise note that the future San Antonio-area physical location is not currently offered. Do not invent business contact details.

VISUAL DIRECTION
Create a refined, human, institutional B2B design: calm confidence, generous whitespace, strong typography hierarchy, disciplined grid, subtle motion only when it supports understanding, and high-quality real-world imagery of organizational settings. Avoid generic SaaS dashboards, neon gamer styling, medical stock clichés, exaggerated brain graphics, fake charts, decorative claims, and crowded feature grids.

Use an accessible neutral base with one restrained accent color and one complementary highlight, but keep all colors and fonts editable because the brand system is not approved. Use clear button hierarchy, readable line lengths, visible focus states, and strong text/background contrast. Desktop should feel composed and useful; mobile should preserve the same hierarchy with readable text, stacked cards, touch-sized controls, and no horizontal overflow.

CONTENT AND CLAIM GUARDRAILS
- Do not invent SMARTfit performance, clinical, educational, cognitive, safety, reimbursement, customer-count, or ROI claims.
- Do not use words such as “proven,” “guaranteed,” “revolutionary,” “best,” “prevents,” “treats,” or “improves” as product promises.
- Do not show public prices, reseller rates, discount offers, or implied savings.
- Do not claim authorized-dealer status, exclusivity, manufacturer ownership, or a formal research/clinical partnership.
- Do not claim a San Antonio showroom, in-person demo, clinic, Hypergravity offering, or combined treatment is available.
- Use only approved images and brand assets. If none are available, use neutral placeholders clearly marked for later replacement; do not fabricate logos or testimonials.

DELIVERABLE
Show a complete homepage at desktop and mobile breakpoints. Keep the primary action obvious without obscuring the audience paths. Make the design system and reusable components visually consistent. Prioritize a credible buyer journey over decorative effects.
```

## Optional refinement prompts

Use one focused prompt per iteration rather than asking the generator to change many unrelated things at once.

### Improve buyer clarity

```text
Refine this homepage so an institutional buyer can identify their setting and understand the next step within a few seconds. Improve content hierarchy and CTA clarity without adding claims, new facts, or extra sections. Preserve the evidence-aware, restrained visual direction.
```

### Improve mobile usability

```text
Refine the mobile layout only. Preserve all content and factual limits, prevent horizontal overflow, make navigation and CTAs easy to use by touch, keep headings readable without awkward wrapping, and ensure the audience choices remain easy to scan.
```

### Reduce visual noise

```text
Reduce decorative elements and generic AI-generated visual effects. Keep the strongest hierarchy, useful imagery, generous spacing, accessible contrast, and clear audience pathways. Do not add product or outcome claims.
```

## Hard gates

A concept fails and must be revised if any of these are true:

- It represents the site as SMARTfit Inc. or invents a final business identity, logo, or authorized-dealer status.
- It shows public pricing or private commercial information.
- It promises clinical, cognitive, educational, athletic, or financial outcomes without approved evidence and wording.
- It implies a clinic, physical demo location, in-person appointment, Hypergravity integration, or insurance coverage is available now.
- It relies on inaccessible text contrast, tiny text, color alone to communicate meaning, or controls that are not keyboard/touch usable.
- It excludes or hides major institutional audiences without an explicit business decision to do so.
- The main action is unclear, buried, or competes with multiple equally prominent CTAs.

## Concept scorecard

Score each item from **1 (poor) to 5 (excellent)**. Multiply the score by the weight divided by 5. A concept must score at least **80/100** and pass every hard gate to advance.

| Criterion | Weight | 1 — Poor | 3 — Adequate | 5 — Excellent | Score |
|---|---:|---|---|---|---:|
| Audience clarity and inclusion | 15 | Audience is unclear or one setting dominates without reason | Several audiences are visible but pathways are uneven | Buyers immediately recognize their setting; all intended audiences are represented | |
| Value proposition and first-screen clarity | 15 | Headline is vague, hype-driven, or claim-heavy | Purpose is mostly understandable after reading | Clear, plain language explains what the site helps buyers do | |
| Conversion path | 15 | No obvious next step or competing CTAs | CTA exists but expectations are unclear | One primary consultation action, useful secondary exploration, clear expectations | |
| Trust and evidence-aware presentation | 15 | Uses unsupported claims, fabricated proof, or misleading affiliation | Mostly restrained but source/evidence pathway is hard to find | Trust comes from clarity, transparent limits, and a visible evidence/resource pathway | |
| Product and buyer-information hierarchy | 10 | Product categories and practical questions are hard to find | Basic product overview with some useful guidance | Systems and fit factors are easy to scan without unverified specifications | |
| Visual quality and distinctiveness | 10 | Generic, cluttered, or inconsistent | Professional but familiar/uneven | Deliberate, polished visual system that feels credible and human without fake brand claims | |
| Accessibility and interaction | 10 | Poor contrast, tiny text, unclear controls, keyboard barriers | No obvious blockers but needs detailed audit | Strong contrast, readable type, visible focus, clear controls, inclusive interaction | |
| Responsive behavior | 10 | Desktop-only composition or broken mobile hierarchy | Mobile stacks but is dense or loses emphasis | Mobile and desktop both preserve clarity, hierarchy, and usable touch targets | |
| **Total** | **100** |  |  |  | |

### Decision bands

- **90–100:** strong candidate; proceed to prototype and implementation review if hard gates pass.
- **80–89:** promising; revise the lowest-scoring criteria before implementation.
- **Below 80:** do not implement; revise the concept or generate a new direction.
- **Any hard-gate failure:** reject or revise regardless of total score.

## Before implementation

The chosen concept is a visual direction, not final approved content or production code. Before building:

- Confirm public business identity, brand permissions, logo and image rights.
- Replace placeholders only with verified, approved copy and assets.
- Recheck all product names, configurations, license statements, and availability against current sources.
- Test keyboard navigation, focus visibility, semantic heading order, form labels, contrast, zoom, and screen-reader behavior.
- Validate mobile/tablet/desktop layouts and actual CTA/form behavior.
- Review generated code for framework compatibility, maintainability, performance, responsive correctness, and unnecessary dependencies.
- Do not include restricted price data in design tools, screenshots, source code, page metadata, analytics, or client-delivered assets.

## Project references

- [Positioning and audience map](./positioning-and-audience-map.md)
- [Site architecture](./site-architecture.md)
- [Page briefs CSV](./content-intelligence-csv/page-briefs.csv)
- [Product specification review](./product-specification-review.md)
- [Content governance](./content-governance.md)
- [DiffUI](https://diffui.ai)

