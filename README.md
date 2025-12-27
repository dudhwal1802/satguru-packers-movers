# Satguru Packers and Movers

Responsive marketing website for Satguru Packers and Movers (Nashik, Maharashtra).

## Tech stack

- React + TypeScript
- Vite
- Tailwind CSS + shadcn/ui
- React Router

## Prerequisites

- Node.js (recommended: 18+)
- npm

## Getting started (local)

```sh
npm install
npm run dev
```

Vite dev server runs on `http://localhost:8080`.

## Scripts

- `npm run dev` – start dev server
- `npm run build` – production build
- `npm run preview` – preview production build locally
- `npm run lint` – run ESLint

## Project structure

- `index.html` – HTML metadata (title/SEO + favicon links)
- `src/pages/Index.tsx` – main landing page composition
- `src/components/` – page sections (Hero, Services, Contact, etc.)
- `src/components/ui/` – shared UI components
- `src/lib/` – utilities and translations

## Deployment

Build output is generated in `dist/`.

Typical deployment steps:

```sh
npm install
npm run build
```

Then host the `dist/` folder on any static hosting (Netlify, Vercel static, Cloudflare Pages, S3, etc.).

### Deploy on GitHub Pages (recommended with GitHub Desktop)

This repo includes a GitHub Actions workflow that builds and deploys the site to GitHub Pages automatically.

**A) Upload to GitHub using GitHub Desktop**

1. Open **GitHub Desktop**
2. **File → Add Local Repository…**
3. Select this project folder: `satguru-packers-movers`
4. If asked to create a repo, confirm.
5. Click **Publish repository** (top bar)
6. Keep it **Public** (GitHub Pages requires public repo on free plan), then publish.

**B) Enable GitHub Pages**

1. Open your repo on GitHub (web)
2. Go to **Settings → Pages**
3. Under **Build and deployment**, set **Source** to **GitHub Actions**

**C) Deploy**

1. Push to the `main` branch.
2. GitHub will run the workflow at `.github/workflows/deploy-pages.yml`.
3. Your live link will appear in **Actions** and also in **Settings → Pages**.

Notes:
- For GitHub Pages, the project builds with `--base=/<repo-name>/` automatically.
- React Router is configured to work with the base URL.
