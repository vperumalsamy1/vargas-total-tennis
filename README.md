# Vargas Total Tennis — React Website

Production-ready React site for Coach Nestor Vargas, Tampa Bay, FL.
**Stack:** React 18 + Vite · Tailwind CSS · Framer Motion · Lucide React · React Scroll

---

## Running locally

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev
# → Opens at http://localhost:5173

# 3. Build for production
npm run build

# 4. Preview the production build
npm run preview
```

**Node version:** 18 or higher recommended.

---

## Deploying to Vercel

### Option A — Vercel CLI (fastest)

```bash
npm i -g vercel
vercel
# Follow the prompts: select the project directory, confirm settings
# Vercel auto-detects Vite and sets build command to "npm run build"
```

### Option B — Vercel Dashboard

1. Push the project to a GitHub repository
2. Go to [vercel.com](https://vercel.com) → **Add New Project**
3. Import the GitHub repo
4. Vercel auto-detects Vite settings:
   - **Framework preset:** Vite
   - **Build command:** `npm run build`
   - **Output directory:** `dist`
5. Click **Deploy**

`vercel.json` is already configured to handle client-side routing (SPA fallback).

---

## Project structure

```
vargas-total-tennis/
├── public/
│   └── favicon.svg            ← Shield icon (copied from logo-icon.svg)
├── src/
│   ├── assets/
│   │   ├── logo.svg           ← Primary logo (light backgrounds)
│   │   ├── logo-white.svg     ← White logo (dark backgrounds / footer)
│   │   └── logo-icon.svg      ← Shield only (small uses)
│   ├── components/
│   │   ├── Navbar.jsx         ← Transparent → solid scroll transition
│   │   ├── Hero.jsx           ← Two-column, load animation
│   │   ├── TrustBar.jsx       ← 4 trust signals with Lucide icons
│   │   ├── Programs.jsx       ← 4 program cards, staggered animation
│   │   ├── About.jsx          ← Coach bio with slide-in animation
│   │   ├── Testimonials.jsx   ← 3 review cards, Georgia serif quotes
│   │   ├── Pricing.jsx        ← 3-tier table with featured card
│   │   ├── Contact.jsx        ← Dark bg, form with validation
│   │   └── Footer.jsx         ← White logo, nav links, copyright
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css              ← Tailwind + custom utilities
├── index.html                 ← DM Sans font, meta tags
├── tailwind.config.js         ← Custom vtt-* color palette
├── vite.config.js
├── postcss.config.js
└── vercel.json                ← SPA routing + cache headers
```

---

## Design tokens

All brand colors are defined as Tailwind utilities in `tailwind.config.js`:

| Token             | Class            | Hex       | Use |
|-------------------|------------------|-----------|-----|
| Primary           | `text-vtt-primary` | `#1D9E75` | Buttons, accents, section labels |
| Dark              | `bg-vtt-dark`    | `#0F6E56` | Hero background |
| Darker            | `bg-vtt-darker`  | `#085041` | About / Footer background |
| Light             | `text-vtt-light` | `#5DCAA5` | Hero text accents |
| Lightest          | `bg-vtt-lightest`| `#E1F5EE` | Badge backgrounds |
| Amber             | (inline)         | `#EF9F27` | Junior Academy accent |
| Blue              | (inline)         | `#378ADD` | Tournament Prep accent |

Font: **DM Sans** (Google Fonts), weights 400 and 500 only — loaded in `index.html`.

---

## Before going live — full [UPDATE] checklist

Search any file for `[UPDATE` to find every placeholder that needs a real value.

### Content & media
- [ ] Replace the `NV` avatar circle in `About.jsx` with Nestor's real headshot photo
- [ ] Add a real hero background photo (optional — current dark green works well)
- [ ] Replace placeholder testimonial attributions with real parent names (with permission)
- [ ] Confirm all pricing figures are accurate

### Contact & business info
- [ ] `[UPDATE: real phone number]` — Contact section, `Contact.jsx` line ~19
- [ ] `[UPDATE: real email address]` — Contact section, `Contact.jsx` line ~20
- [ ] `[UPDATE: exact facility address]` — If you want a specific address shown
- [ ] `[UPDATE: real hours]` — Mon–Sat hours, `Contact.jsx` line ~22
- [ ] `[UPDATE: real Instagram handle]` — `Contact.jsx` line ~23

### Booking & form
- [ ] Wire up the contact form to a real service:
  - **Formspree** (easiest): `fetch('https://formspree.io/f/YOUR_ID', ...)`
  - **Netlify Forms**: add `data-netlify="true"` to the `<form>` element
  - **EmailJS**: `emailjs.send(serviceId, templateId, form)`
  - See `Contact.jsx` handleSubmit for the placeholder comment
- [ ] Add Calendly or Squarespace Scheduling link if using a booking widget

### SEO & meta
- [ ] Update `og:image` in `index.html` with a real social share photo URL
- [ ] Confirm the `<title>` and `<meta name="description">` text
- [ ] Add Google Analytics or similar if desired (paste snippet in `index.html`)

### Branding
- [ ] Confirm SGI / USPTA / PTR certification details — verify exact credential names
- [ ] Confirm "free first trial lesson" offer — it appears in `Pricing.jsx`
- [ ] Update "CoachNestor.com" in `Footer.jsx` with the real registered domain

### Domain (Vercel)
- [ ] In Vercel dashboard → Project → Settings → Domains → Add custom domain
- [ ] Point your domain's DNS to Vercel's nameservers (instructions shown in dashboard)
- [ ] SSL is automatic once DNS propagates

---

## Customising content

All section copy is co-located in each component file — no separate data layer to navigate.
To update text, open the relevant component and edit the string directly.

| Section      | File                              |
|---|---|
| Navbar links | `src/components/Navbar.jsx` — `NAV_LINKS` array |
| Hero text    | `src/components/Hero.jsx` — JSX copy |
| Trust signals| `src/components/TrustBar.jsx` — `items` array |
| Programs     | `src/components/Programs.jsx` — `programs` array |
| About bio    | `src/components/About.jsx` — JSX copy |
| Testimonials | `src/components/Testimonials.jsx` — `reviews` array |
| Pricing      | `src/components/Pricing.jsx` — `tiers` array |
| Contact info | `src/components/Contact.jsx` — `contactDetails` array |
| Footer       | `src/components/Footer.jsx` — JSX copy |
