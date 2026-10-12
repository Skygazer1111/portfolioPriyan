# priyan.r — portfolio

Personal site for [Priyan Rajarajan](https://github.com/Skygazer1111): projects, stack, experience, and contact.

## Stack

- React 19 + TypeScript
- [TanStack Start](https://tanstack.com/start) (file-based routing, SSR)
- Vite 8 + Tailwind CSS 4
- Deployed via Nitro (`vercel` preset)

## Setup

Node.js 24 LTS and npm.

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

TypeScript stays on 6.x to match `typescript-eslint`'s supported range. Bun updates
respect the 24-hour minimum release age configured in `bunfig.toml`. The Nitro
override matches the direct dependency so npm accepts its newer beta despite
Lovable's peer range naming an older beta.

| Script | Purpose |
| --- | --- |
| `npm run dev` | Local development |
| `npm run build` | Production build |
| `npm run preview` | Preview the production build |

## Content

Almost all copy lives in [`src/routes/index.tsx`](src/routes/index.tsx):

- Web / desktop / Chrome extension projects
- Experience, education, certs, contact links, resume URL

Project preview videos go in `public/previews/` and are referenced from each web project’s `previewVideo` field.

Portrait: `priyan.png` at the repo root. Open Graph image: `public/og.png`.

GitHub contribution heatmap uses username `Skygazer1111` in [`src/lib/api/github.functions.ts`](src/lib/api/github.functions.ts).

## Config

Optional public site URL for OG tags:

```bash
VITE_SITE_URL=https://your-domain.com
```

Set this in the host’s environment (for example Vercel). No other env vars are required.

## Deploy

The Vite config uses `nitro: { preset: "vercel" }`. Connect the repo to [Vercel](https://vercel.com) and use the default build (`npm run build`).
