# Portfolio

A single-page portfolio built with [Astro](https://astro.build), deployed on GitHub Pages.
Design direction: **"Latent Space"** — a midnight-signal palette with an interactive
embedding point-field hero, grounded in an ML/CV engineer's world.

## Edit your content

**Everything on the page comes from one file:** [`src/data/site.ts`](src/data/site.ts).
Look for the `EDIT:` markers and swap in your real details — identity, stats,
socials, about, experience, projects, writing, and skills. No other file needs
touching for content changes.

## Run locally

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # production build → dist/
npm run preview  # preview the built site
```

## Deploy to GitHub Pages

1. **Pick your URL** and set it in [`astro.config.mjs`](astro.config.mjs):
   - **User site** (cleanest): create a repo named `<username>.github.io`.
     Set `site: 'https://<username>.github.io'`, leave `base` commented out.
   - **Project site**: any repo name, e.g. `portfolio`. Set `site` and
     uncomment `base: '/portfolio'`.
2. Push to the `main` branch.
3. In the repo: **Settings → Pages → Build and deployment → Source → GitHub Actions.**
4. The included workflow ([`.github/workflows/deploy.yml`](.github/workflows/deploy.yml))
   builds and publishes on every push to `main`.

Your site goes live at the URL from step 1.

## Structure

```
src/
  data/site.ts        ← all your content (edit this)
  styles/global.css   ← design tokens + base
  layouts/Base.astro  ← <head>, fonts, SEO, JSON-LD
  components/         ← Nav, Hero, About, Experience, Projects, Writing, Skills, Contact, Footer
  pages/index.astro   ← assembles the page
public/               ← favicon.svg, resume.pdf
```

## Accessibility & performance

- Responsive to mobile, visible keyboard focus, `prefers-reduced-motion` respected
  (the hero animation freezes to a single static frame).
- Zero client JS frameworks — only small vanilla scripts for the point-field,
  scroll reveal, and active-nav highlighting.
