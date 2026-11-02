## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Integrations Configured

- **@astrojs/sitemap**: Generates XML sitemap on build
- **Tailwind CSS v4**: Utility-first CSS framework via @tailwindcss/vite
- **SVG Optimization**: Experimental feature to optimize SVG components at build time
- **Lighthouse CI**: Automated performance, accessibility, SEO, and best practices audits

## Lighthouse CI

Lighthouse CI runs automated quality checks on the site. Configuration is in `lighthouserc.js`.

**Commands:**
- `npm run lighthouse` - Run Lighthouse CI against preview server (requires preview server running)
- `npm run lighthouse:ci` - Build and run Lighthouse CI

**Current thresholds:**
- Performance: 70+ (warn) - Homepage currently scores ~70 due to large CSS/JS and images
- Accessibility: 90+ (error)
- Best Practices: 90+ (error)
- SEO: 90+ (error)

**Important:** Update URLs in `lighthouserc.js` when deploying to production domain.

## Important TODOs

- Update `site` URL in `astro.config.mjs` from placeholder `https://example.com` to actual domain when approved
- Update sitemap URL in `public/robots.txt` from placeholder to actual domain when approved
- Update URLs in `lighthouserc.js` from localhost to production domain when deployed

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
