# AppsTech Soft — Website

Marketing site for AppsTech Soft, a Zoho Authorized Partner. Built with
React 18, React Router, Tailwind CSS, and Framer Motion via Vite.

## Development

```bash
npm install
npm run dev       # local dev server with hot reload
npm run build     # production build -> dist/
npm run preview   # preview the production build locally
```

## Project structure

```
src/
  components/   shared UI (Nav, Footer, Icon, Reveal animation, etc.)
  data/         content.js (all copy/data) + zohoIcons.js (Zoho product logos)
  pages/        one file per route (Home, Services, Products, ...)
  theme.jsx     light/dark theme context (persisted to localStorage)
```

Routing uses `HashRouter` so the built `dist/` folder can be deployed to
any static host (GitHub Pages, Netlify, S3, etc.) without server-side
rewrite rules.

## Content

All marketing copy, services, products, industries, testimonials, and
contact details live in `src/data/content.js` — edit there rather than
inside page components.

## Contact form

The consultation form on `/contact` validates input client-side and
opens a pre-filled `mailto:` to the address in `CONTACT_EMAIL`
(`src/pages/Contact.jsx`). To route leads into a CRM/webhook instead,
replace the `mailto:` call in `submit()` with a `fetch()` to your form
endpoint (Zoho Forms, a webhook, etc.).

## Legacy site

The previous no-build static version (plain HTML/CSS/JS with React
loaded from a CDN) is preserved under `legacy-static/` for reference.
