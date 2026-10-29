# Restricted SMARTfit commercial pricing

Internal-only reseller commercial data. Do not publish, email externally, commit, or copy MSRP/reseller prices into website content, analytics, client-side code, or the general content-intelligence workbook.

## Current source supplied by Robert

- `SMARTfit Price List 2026 - US Resellers - effective 2026-07-01.xlsx`
- Effective date shown in workbook: July 1, 2026.
- Workbook metadata modified: August 2, 2026.
- SHA-256: `39B88FA0A78E1A9588D7C8990F3A5DBAAE7DE4B7057EA980C28DC444C19D09DA`
- The supplied Downloads original is preserved; the restricted copy has the same SHA-256.
- `price-list-items-internal.csv` is a structured internal extraction of item, description, MSRP, US reseller price, and shipping fields. It intentionally omits the image column, which contains spreadsheet formula errors.

Robert identifies this as the most current reseller information. Treat its dated catalog/prices as the current supplied US reseller source, not a guarantee of inventory, orderability on a particular date, dealer authorization, or permission to publish prices. Confirm current quote and availability with SMARTfit.

## Data-quality notes

- The sheet's image/formula column has `#VALUE!` errors on several product rows. The MSRP and US reseller prices are in separate columns; the extraction preserved those values as shown.
- Some annual extended-service-plan SKUs are reused across distinct model/configuration descriptions. Confirm the right item number and terms when quoting.
- Extended-service-plan descriptions still refer to the Platinum Service Plan effective January 1, 2024. The list's July 2026 effective date does not itself update or replace those coverage terms.
- The wired 5 Strike Pod item is described as a 5-pod system but its hardware description lists 3 pods. This repeats the manufacturer-site inconsistency; do not infer kit contents.
- License rows are internally inconsistent for MultiTrainer: general Model G/P eligibility text excludes MultiTrainers, while the item descriptions require E for MultiTrainer 2 and P for MultiTrainer 3 and 4. Obtain written confirmation before relying on compatibility or quoting licenses.

