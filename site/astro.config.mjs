// @ts-check
import { defineConfig, svgoOptimizer } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // TODO: Replace with actual domain when approved
  site: 'https://example.com',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  experimental: {
    svgOptimizer: svgoOptimizer(),
  },
});
