# Biswajit Sahu — Professional Portfolio

A modern, dark-themed single-page portfolio for **Biswajit Sahu**, Senior Java Backend Engineer.
Built with **React 18 + Vite + Tailwind CSS**, deployed as a static site on [Render](https://render.com).

---

## 🗂 Project Structure

```
portfolio-biswajit/
├── public/
│   ├── favicon.svg          ← SVG favicon (BS initials)
│   ├── profile.jpg          ← ⚠️ ADD YOUR PHOTO HERE
│   ├── resume.pdf           ← ⚠️ ADD YOUR RESUME HERE
│   └── og-image.png         ← Social share preview image (optional)
├── src/
│   ├── App.jsx              ← Root component, footer, cookie banner
│   ├── main.jsx             ← React entry point
│   ├── index.css            ← Tailwind + global styles
│   ├── data.js              ← ⭐ All content lives here — edit this!
│   └── components/
│       ├── Navbar.jsx       ← Fixed responsive navigation
│       ├── Hero.jsx         ← Hero section with CTA buttons
│       ├── About.jsx        ← About narrative + stats
│       ├── Skills.jsx       ← Grouped skill cards
│       ├── Experience.jsx   ← Collapsible timeline cards
│       ├── Projects.jsx     ← Project portfolio cards
│       ├── Achievements.jsx ← Key metric badges
│       ├── Education.jsx    ← Education + certifications
│       ├── Contact.jsx      ← Formspree contact form
│       └── useReveal.js     ← IntersectionObserver scroll hook
├── index.html               ← HTML shell with SEO meta + JSON-LD
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── render.yaml              ← Render deployment config
├── .env.example             ← Environment variable reference
└── README.md
```

---

## 🚀 Quick Start (Local Development)

### Prerequisites
- Node.js ≥ 18.x
- npm ≥ 9.x

### 1. Install dependencies
```bash
cd portfolio-biswajit
npm install
```

### 2. Add your assets
```bash
# Place your profile photo:
cp /path/to/your-photo.jpg public/profile.jpg

# Place your resume:
cp /path/to/Biswajit_Sahu_Resume.pdf public/resume.pdf
```

### 3. Configure environment (optional)
```bash
cp .env.example .env.local
# Edit .env.local and set VITE_FORMSPREE_ID to your Formspree form ID
```

### 4. Start dev server
```bash
npm run dev
# Open http://localhost:3000
```

### 5. Build for production
```bash
npm run build
# Output: dist/

npm run preview
# Preview production build at http://localhost:4173
```

---

## ✏️ Content Editing

**All content is in `src/data.js`** — edit this single file to update:
- Personal info, headline, contact details
- Tech tags and hero intro
- Work experience bullets
- Project descriptions
- Achievement metrics
- Education entries
- Certification details
- Navigation links
- Formspree endpoint

---

## 📬 Contact Form Setup (Formspree)

1. Go to [https://formspree.io](https://formspree.io) and create a free account
2. Create a new form → copy the Form ID (e.g., `xpzgqabk`)
3. In `src/data.js`, update:
   ```js
   export const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';
   ```
4. Set the recipient email in Formspree dashboard to `biswajitsahu697@gmail.com`

---

## 📊 Analytics Setup (Google Analytics 4)

1. Create a GA4 property at [analytics.google.com](https://analytics.google.com)
2. Get your Measurement ID (e.g., `G-XXXXXXXXXX`)
3. Uncomment the GA snippet in `index.html` and replace the placeholder ID
4. Set `VITE_ANALYTICS_ID` in Render environment variables

**Privacy note**: A simple cookie consent banner is included. Upgrade to a full CMP (e.g., Cookiebot) if you need GDPR compliance.

---

## ☁️ Render Deployment (Static Site)

### Method 1: Deploy via render.yaml (recommended)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "feat: initial portfolio"
   git remote add origin https://github.com/<YOUR_USERNAME>/portfolio-biswajit.git
   git push -u origin main
   ```

2. **Connect to Render**
   - Go to [https://dashboard.render.com](https://dashboard.render.com)
   - Click **New → Blueprint** (uses `render.yaml` automatically)
   - Select your GitHub repo
   - Render will detect `render.yaml` and configure everything

3. **Update render.yaml**
   - Edit `render.yaml` → replace `<YOUR_GITHUB_USERNAME>` with your GitHub username

### Method 2: Manual Render configuration

| Setting | Value |
|---|---|
| **Service Type** | Static Site |
| **Name** | biswajit-portfolio |
| **Repository** | Your GitHub repo URL |
| **Branch** | `main` |
| **Build Command** | `npm ci && npm run build` |
| **Publish Directory** | `dist` |
| **Auto-Deploy** | Yes (on push to main) |

### Environment Variables to set in Render Dashboard

| Variable | Value | Required |
|---|---|---|
| `VITE_FORMSPREE_ID` | Your Formspree form ID | For contact form |
| `VITE_ANALYTICS_ID` | Your GA4 Measurement ID | For analytics |

### Custom Domain (optional)
1. Render Dashboard → Your Service → Settings → Custom Domains
2. Add your domain (e.g., `biswajitsahu.dev`)
3. Update DNS records as instructed by Render
4. Update `og:url` in `index.html` with the new domain

---

## 🔧 Node.js Backend Option

If you need a server-side contact endpoint instead of Formspree:

1. Change `render.yaml` service type to `web` with `env: node`
2. Add a minimal Express server at `server.js`:
   ```js
   import express from 'express';
   import nodemailer from 'nodemailer';
   const app = express();
   app.use(express.json());
   app.post('/api/contact', async (req, res) => {
     // Use nodemailer to send to process.env.CONTACT_EMAIL
   });
   app.use(express.static('dist'));
   app.listen(process.env.PORT || 3000);
   ```
3. Set `CONTACT_EMAIL` env var in Render: `biswajitsahu697@gmail.com`

---

## ♿ Accessibility

- Semantic HTML5 elements (`<header>`, `<main>`, `<nav>`, `<section>`, `<article>`, `<footer>`)
- All images have descriptive `alt` attributes
- `aria-label` on nav, forms, and icon-only buttons
- Keyboard navigation and visible `:focus-visible` rings
- `prefers-reduced-motion` respected (animations disabled)
- Color contrast ratios meet WCAG AA (teal on dark background)
- `aria-expanded` on accordion cards
- `role="status"` / `aria-live` on form feedback

---

## 🔒 Security Headers

The `render.yaml` sets these security headers automatically:
- `X-Frame-Options: DENY`
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- Long-term cache headers on hashed asset files

---

## 📦 Tech Stack

| Tool | Version | Purpose |
|---|---|---|
| React | 18.x | UI framework |
| Vite | 5.x | Build tool & dev server |
| Tailwind CSS | 3.x | Utility-first CSS |
| react-icons | 5.x | Icon library |
| Formspree | — | Contact form backend |

---

## 📝 License

MIT — free to use and modify for personal portfolios.

---

*Resume reference used as content source. Screenshot used as design reference.*

