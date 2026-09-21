# english-notes.soft.rocks

A Nuxt 4 static site. `nuxt generate` prerenders every route, and GitHub Actions publishes the
output to the `web` branch for GitHub Pages.

## Requirements

- Node.js 22.22.2+ (CI runs 24)
- npm

## Development

```bash
npm install
npm run dev        # http://localhost:3000
```

## Static output

```bash
npm run generate   # writes .output/public (dist is a symlink to it)
npm run preview    # serve the generated output locally
```

## Checks

```bash
npm run lint
npm run typecheck
npm run format
```

## Deployment

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds with `npm ci && npm run generate`
and pushes `.output/public` to the `web` branch. The custom domain is set in `public/CNAME`.

See [AGENTS.md](AGENTS.md) for the design system, fonts, and state-management conventions.
