// @ts-check
import { defineConfig, svgoOptimizer } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: 'https://cognitivemotortraining.com',
  output: 'static',
  adapter: vercel({
    webAnalytics: { enabled: true }
  }),
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  experimental: {
    svgOptimizer: svgoOptimizer(),
  },
});
