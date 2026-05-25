# Vargas Total Tennis — Squarespace Setup Guide

Complete step-by-step instructions for setting up the website using the Hayden template. Follow the steps in order. The final checklist at the bottom is everything to update before going live.

---

## Step 1 — Choose Your Squarespace Plan

**Recommended: Business plan ($23/mo billed annually)**

| Feature | Personal | Business ✓ |
|---|---|---|
| Custom domain | ✓ | ✓ |
| Custom CSS | ✗ | ✓ |
| Code blocks | ✗ | ✓ |
| Remove Squarespace branding | ✗ | ✓ |
| Squarespace Scheduling (Acuity) | Requires add-on | Integrates cleanly |

The custom CSS and code block snippets in this package **require the Business plan or higher.** Personal plan will not work.

Sign up at squarespace.com → Start Free Trial → select **Hayden** template (details in Step 2).

---

## Step 2 — Apply the Hayden Template

1. During signup (or from **Home → Settings → Template**), search for **"Hayden"**
2. Click **Start with Hayden**
3. The template will load with placeholder content — you'll replace everything

> **Why Hayden?** It has a clean, full-bleed hero, strong typography defaults, and a layout engine that responds well to custom CSS overrides without breaking on mobile.

---

## Step 3 — Add DM Sans Font (Code Injection)

This ensures the font loads before any CSS applies it.

1. Go to **Settings → Advanced → Code Injection**
2. In the **Header** box, paste:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500&display=swap" rel="stylesheet">
```

3. Click **Save**

---

## Step 4 — Paste the Custom CSS

1. Go to **Design → Custom CSS**
2. Delete any existing placeholder CSS
3. Open `custom.css` from this package and copy the entire contents
4. Paste into the Custom CSS editor
5. Click **Save**

You should immediately see the font and color changes take effect in the preview.

---

## Step 5 — Create the Page Structure

In the **Pages** panel, create the following pages in this order:

| Page name | URL slug | Type |
|---|---|---|
| Home | `/` | Regular page |
| About | `/about` | Regular page |
| Programs | `/programs` | Regular page |
| Pricing | `/pricing` | Regular page |
| Contact | `/contact` | Regular page |

**To create a page:** Pages → `+` → Blank Page → name it → set URL slug.

**Navigation order:** Drag pages in the Pages panel to match: Home · About · Programs · Pricing · Reviews · Contact.

---

## Step 6 — Build the Home Page Section by Section

Add sections from the bottom of the editor using the `+` button. Use these Squarespace blocks for each section:

### Section 1 — Hero
- **Block:** Image Block (full-bleed) or a Banner section
- **Content:** Headline, subheading, two Button blocks side by side
- **Image:** `[UPDATE: add Nestor's action photo — ideally coaching on court]`
- **Background:** Set to Custom Color → `#085041` (or upload the photo with a color overlay)
- Set section height to **Full screen**

### Section 2 — Trust Bar
- **Block:** 4-column Layout → each column gets a small **Text Block**
- Use the trust signals from `copy.md`
- Set section background to `#E1F5EE`

### Section 3 — Stats Row
- **Block:** Code Block
- Paste **Snippet 2** from `snippets.html`
- Set section background to `#085041`

### Section 4 — Programs
- **Block:** 4-column Layout → each column is a **Text Block** with button
- Or use a **Summary Block** (Grid layout) if you create a Programs collection
- Add the colored accent strip via CSS classes in the block's Advanced settings

### Section 5 — About
- **Block:** 2-column Layout → left: **Image Block**, right: **Text Block** with bullets
- Set section background to `#0F6E56` (dark green)
- Nestor's headshot on the left `[UPDATE: upload headshot photo]`

### Section 6 — Testimonials
- **Block:** **Quote Block** × 3 (side by side in a 3-column layout)
- Or use a **Summary Block** connected to a Testimonials collection for easy management

### Section 7 — Pricing
- **Block:** 3-column Layout → each column is a **Text Block** with button
- The featured (middle) column: add class `pricing-card--featured` in Advanced → Additional CSS classes

### Section 8 — Booking CTA
- **Block:** Code Block
- Paste **Snippet 3** (Calendly button) from `snippets.html`
- Set section background to `#1D9E75`

### Section 9 — Contact
- **Block:** 2-column Layout → left: **Text Block** with contact details, right: **Form Block**
- Set section background to `#085041`
- Configure the Form Block to send submissions to Nestor's email `[UPDATE: real email]`

---

## Step 7 — Add the Announcement Bar

1. On the Home page, add a **Code Block** as the very first element above all sections
2. Paste **Snippet 1** from `snippets.html`
3. Update the text and link inside the snippet if needed `[UPDATE]`

---

## Step 8 — Add the Google Maps Embed

1. In the Contact section, add a **Code Block** below or beside the form
2. Paste **Snippet 4** from `snippets.html`
3. **[UPDATE]** Generate the real embed URL: go to maps.google.com → search Nestor's exact address → click **Share** → **Embed a map** → copy the `src` URL from the `<iframe>` tag → replace the placeholder URL in the snippet

---

## Step 9 — Connect Squarespace Scheduling (Acuity)

Squarespace Scheduling is their built-in booking system (powered by Acuity). Alternatively, use Calendly (already set up in Snippet 3).

**Option A — Squarespace Scheduling (built-in):**
1. Go to **Scheduling → Getting Started** in the Squarespace sidebar
2. Set up your service types (Private Lesson, Group Session, etc.)
3. Connect your calendar (Google Calendar recommended)
4. Add a **Scheduling Block** to the page where you want the booking calendar to appear
5. Update Snippet 3 to point to your Squarespace Scheduling link instead of Calendly

**Option B — Calendly (already configured in Snippet 3):**
1. Create a free account at calendly.com
2. Set up event types matching your programs
3. Update the URL in Snippet 3: replace `https://calendly.com/coachnestorvargas` with your real Calendly link

---

## Step 10 — Upload and Use the Logo SVG Files

Three logo files are included in this package:

| File | Use |
|---|---|
| `logo.svg` | Primary — use on white/light backgrounds (header default) |
| `logo-white.svg` | Use on dark green backgrounds (e.g., footer, dark hero) |
| `logo-icon.svg` | Favicon, small uses (profile photos, app icons) |

**To add the logo to the header:**
1. Go to **Design → Logo & Title**
2. Click **Upload Image** and upload `logo.svg`
3. Adjust logo size with the slider (recommended: medium)
4. The transparent navbar CSS will switch to white on scroll automatically

**To add the favicon:**
1. Go to **Design → Browser Icon (Favicon)**
2. Upload `logo-icon.svg` (or a 32×32 PNG version exported from it)

**To add the white logo to the footer:**
1. Edit the Footer in **Pages → Footer**
2. Add an **Image Block** and upload `logo-white.svg`

---

## Step 11 — Set the Domain

1. **Purchase a domain** (recommended: `coachnestorvargas.com` or `vargastotaltennis.com`) `[UPDATE: decide on domain]`
2. Go to **Settings → Domains → Use a Domain I Own** or **Get a Domain**
3. If purchasing through Squarespace, it connects automatically
4. If using an external registrar (GoDaddy, Namecheap), follow Squarespace's DNS instructions

---

## Step 12 — Configure Email and Social Links

1. **Contact form:** Go to the Form Block settings → set **Storage** → email to `[UPDATE: Nestor's email]`
2. **Footer social links:** In the Footer editor, add Social Links blocks for Instagram, Facebook
3. **Email address link:** Update the contact email in copy to a real address `[UPDATE]`

---

## Final Handoff Checklist

Everything that needs to be updated before the site goes live. Check off each item:

### Content
- [ ] Replace all hero photos with real photos of Nestor coaching
- [ ] Update Nestor's headshot in the About section
- [ ] Replace `[UPDATE: real parent name]` testimonials with real reviews (with permission)
- [ ] Confirm all pricing numbers are accurate and current
- [ ] Update program descriptions with any details Nestor wants to change

### Contact & Business Info
- [ ] `[UPDATE: real phone number]` — add to Contact section and footer
- [ ] `[UPDATE: real email address]` — update Form Block delivery email and contact section
- [ ] `[UPDATE: exact facility address]` — update Google Maps embed (Snippet 4)
- [ ] `[UPDATE: real hours]` — update trust bar hours

### Booking
- [ ] `[UPDATE: real Calendly link]` — replace placeholder URL in Snippet 3
- [ ] Or: set up Squarespace Scheduling and update the booking button link

### Social & Domain
- [ ] `[UPDATE: real Instagram handle]` — update all Instagram references
- [ ] Add Facebook page URL to footer social links
- [ ] `[UPDATE: real domain]` — connect custom domain in Settings → Domains
- [ ] Update footer domain reference from `CoachNestor.com [UPDATE]`

### Branding & Tech
- [ ] `[UPDATE: confirm SGI certification details]` — verify certification name/body in About copy
- [ ] `[UPDATE: confirm if video review is offered]` — update pricing feature list
- [ ] `[UPDATE: confirm free first session]` — update pricing feature list
- [ ] Upload `logo.svg` to header (Design → Logo & Title)
- [ ] Upload `logo-icon.svg` as favicon (Design → Browser Icon)
- [ ] Upload `logo-white.svg` to footer
- [ ] Test the site on mobile before publishing

### Before Publishing
- [ ] Preview every section on desktop and mobile
- [ ] Test the contact form sends to the right email
- [ ] Test the Calendly booking button opens correctly
- [ ] Check all nav links work
- [ ] Remove "squarespace.com" from the domain (upgrade from free trial)
- [ ] Enable SSL (Settings → Security → SSL)

---

*Questions? All placeholder markers in this package use the format `[UPDATE: ...]` so they're easy to search for. Open any file and search for `[UPDATE` to find every item that needs a real value.*
