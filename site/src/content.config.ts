import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Fields mirror strategy/content-intelligence-csv/page-briefs.csv columns.
// claimIds is for future use: a build-time check (not yet implemented) should
// reject any claimId here that isn't `approved-for-publication` in
// source-library/smartfit/claim-register.csv.
const pages = defineCollection({
  loader: glob({ base: './src/content/pages', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    route: z.string(),
    audience: z.string(),
    pageJob: z.string(),
    visitorQuestion: z.string(),
    primaryCta: z.string(),
    reviewGuardrail: z.string(),
    claimIds: z.array(z.string()).default([]),
  }),
});

export const collections = { pages };
