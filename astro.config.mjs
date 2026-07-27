// @ts-check
import { defineConfig } from 'astro/config';

// ─────────────────────────────────────────────────────────────
// DEPLOY CONFIG — read this before your first push.
//
// Two GitHub Pages setups:
//
//  A) User site  →  repo named  <username>.github.io
//     URL: https://<username>.github.io/      (cleanest to share)
//     Use:  site: 'https://<username>.github.io'   (no `base`)
//
//  B) Project site  →  repo named e.g. `portfolio`
//     URL: https://<username>.github.io/portfolio/
//     Use:  site + base: '/portfolio'
//
// Edit the two values below to match. Defaults assume option A.
// ─────────────────────────────────────────────────────────────
export default defineConfig({
  site: 'https://sravani-alle.github.io',
  // base: '/portfolio',   // ← uncomment ONLY for a project site (option B)
});
