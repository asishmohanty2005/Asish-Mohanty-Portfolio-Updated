# Asish Mohanty — Premium Portfolio

A deploy-ready Next.js portfolio with live GitHub data, a command terminal, local knowledge assistant, motion effects, Three.js particles, theme switching, project/skill/experience sections, certificate previews, and a contact endpoint.

## Run locally

```bash
cp .env.example .env.local
npm install
npm run dev
```

Open `http://localhost:3000`.

## Personalize

1. Update `.env.local` with Asish's actual GitHub username, LinkedIn URL, and email.
2. Edit content arrays near the top of `app/page.tsx`.
3. Replace `public/Asish-Mohanty-Resume.html` with the final PDF if available and update the two `/Asish-Mohanty-Resume.html` references.
4. Replace sample certification metadata with real certificates.

## Deploy

Import this folder into Vercel or run `vercel`. No secret is required. GitHub requests use the public REST API and gracefully fall back if the rate limit is reached.
