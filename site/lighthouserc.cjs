module.exports = {
  ci: {
    collect: {
      // Number of runs for each URL (more runs = more stable results)
      numberOfRuns: 3,
      // Static dist directory for Astro
      staticDistDir: './dist',
      // URLs to audit
      url: [
        'http://localhost:4322/',
        'http://localhost:4322/about/',
        'http://localhost:4322/systems/',
        'http://localhost:4322/applications/',
      ],
    },
    assert: {
      // Assertions for Lighthouse scores
      assertions: {
        'categories:performance': ['warn', { minScore: 0.7 }],
        'categories:accessibility': ['error', { minScore: 0.9 }],
        'categories:best-practices': ['error', { minScore: 0.9 }],
        'categories:seo': ['error', { minScore: 0.9 }],
      },
    },
    upload: {
      // Upload to temporary public storage (free, no account needed)
      target: 'temporary-public-storage',
    },
  },
};
