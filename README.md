# damdug.com

Personal platform for Douglas M. Galloway — systems thinker, builder, coach.

## Tech Stack

- Astro (SSR mode with Vercel adapter)
- Content Collections for notes and HDK content
- Vercel Edge Functions for authentication
- Buttondown API for newsletter
- IBM Plex Mono typography
- Plain CSS (no frameworks)

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create `.env` from `.env.example` and add your API keys:
```bash
BUTTONDOWN_API_KEY=your_buttondown_api_key
AUTH_SECRET=your_random_secret_string_min_32_chars
SITE_URL=https://damdug.com
```

3. Run development server:
```bash
npm run dev
```

## Deployment

The site is configured for Vercel deployment. Push to main branch to deploy automatically.

## Structure

- `/src/pages` - All routes and API endpoints
- `/src/content` - Content collections (notes, hdk)
- `/src/components` - Reusable Astro components
- `/src/layouts` - Layout templates
- `/src/styles` - Global CSS
- `/legacy` - Archived original site files

## Authentication

The `/resources` route is protected by middleware. Users must:
1. Submit email via SignupForm
2. Receive magic link via email
3. Click link to set auth cookie (90 day expiry)
4. Access granted to /resources

Magic link flow: SignupForm → /api/subscribe → email → /confirm → /api/verify → /resources
