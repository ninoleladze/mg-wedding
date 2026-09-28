# M & G — Wedding Website

A single-page wedding invitation website built with **Angular 21**. Guests get the invitation, a live countdown to the big day, and the details of the civil ceremony and the dinner — all on one elegant, responsive page.

## Sections

- **Hero** — the couple and the date
- **Countdown timer** — live days / hours / minutes / seconds until the wedding
- **Invitation** — the invitation text
- **Civil ceremony** and **dinner** — time and place for each event
- **With love** — a closing message
- Navigation bar and footer

## Tech Stack

- Angular 21 (standalone components)
- SCSS
- Netlify for hosting (`netlify.toml` — SPA redirects and long-term caching for hashed assets)

## Run locally

```bash
npm install
npm start        # http://localhost:4200
npm run build    # output in dist/mg-wedding/browser
```
