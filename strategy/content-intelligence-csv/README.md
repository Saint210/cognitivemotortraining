# Content intelligence workbook: readable files

VS Code's built-in text editor cannot display `.xlsx` as a spreadsheet. The original workbook is still available at [content-intelligence-workbook.xlsx](../content-intelligence-workbook.xlsx). Open that file with Microsoft Excel, LibreOffice Calc, or a spreadsheet-viewer extension to see its formatted tabs.

These UTF-8 CSV exports let you inspect each tab directly in VS Code or import it into a spreadsheet. The first three rows in each CSV are the title, guidance, and column headers; records follow beneath them.

## Tabs

| Tab | CSV file |
|---|---|
| Start Here | [start-here.csv](./start-here.csv) |
| Claim Register | [claim-register.csv](./claim-register.csv) |
| Product Matrix | [product-matrix.csv](./product-matrix.csv) |
| Research Index | [research-index.csv](./research-index.csv) |
| Research Appraisal | [research-appraisal.csv](./research-appraisal.csv) |
| Audience Map | [audience-map.csv](./audience-map.csv) |
| Search Map | [search-map.csv](./search-map.csv) |
| Page Briefs | [page-briefs.csv](./page-briefs.csv) |
| Social Plan | [social-plan.csv](./social-plan.csv) |
| Source Register | [source-register.csv](./source-register.csv) |
| Open Questions | [open-questions.csv](./open-questions.csv) |

## Notes

- These are readable exports of the workbook, not separate sources of truth. Make substantive changes in the `.xlsx` and regenerate exports, or clearly track edits before merging them.
- Candidate claims remain unapproved. Product details, research, and search-demand assumptions require the workbook's review rules.
- Search topics are hypotheses, not validated search volumes or rankings.
- The Product Matrix and Open Questions tabs include local spec findings and current manufacturer-page updates. See [product-specification-review.md](../product-specification-review.md) for cited details and remaining conflicts.
- The July 1, 2026 SMARTfit US reseller catalog is the current supplied catalog source for listed SKUs, not confirmation of live inventory or quote-time availability. The source workbook and exact prices remain restricted in `source-library/smartfit/restricted/commercial-pricing/`; general workbook records include no MSRP or reseller rates.
- The MultiTrainer license clarification request is drafted but not sent; see [manufacturer-clarification-request.md](../manufacturer-clarification-request.md). Q-014 remains unconfirmed until SMARTfit replies.
- The Platinum Service Plan PDF is now in the source library with page-marked text extraction. See [platinum-service-plan-review.md](../platinum-service-plan-review.md); terms and rates remain internal, and current applicability is unverified.
- Robert's longer-term plan is to grow online SMARTfit sales toward a physical demo location and evaluate a separate Hypergravity offering. See [business-vision-and-phases.md](../business-vision-and-phases.md). The future site and offering are not yet operational; workbook questions Q-019 and Q-020 track key decisions and permissions.
- The Research Appraisal tab covers every research and white-paper PDF in the current inventory; see [research-appraisals.md](../research-appraisals.md) for the full, page-specific appraisal.
- The workbook does not include the demo-account credentials printed in the SMARTfit guide.
