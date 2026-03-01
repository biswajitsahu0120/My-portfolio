# Biswajit Sahu — Portfolio

> Senior Java Backend Engineer · GlobalLogic · Bengaluru  
> Built with **React 18 + Vite + Tailwind CSS** · Deployed on **Render (Static Site)**

---

## 📁 Project Structure

```
portfolio-biswajit/
├── public/
│   ├── profile.jpg          ← Profile photo (154KB, web-optimised)
│   ├── Biswajit_CV.pdf      ← Resume (Download Resume button)
│   └── favicon.svg
├── src/
│   ├── data.js              ← ✏️  ALL content lives here — edit this file only
│   ├── App.jsx              ← Root layout, footer, back-to-top, cookie banner
│   ├── index.css            ← Global styles, dark theme, glass cards
│   ├── main.jsx             ← React entry point
│   └── components/
│       ├── Navbar.jsx
│       ├── Hero.jsx
│       ├── About.jsx
│       ├── Skills.jsx
│       ├── Experience.jsx
│       ├── Projects.jsx
│       ├── Achievements.jsx
│       ├── Education.jsx
│       ├── Contact.jsx
│       └── useReveal.js     ← Scroll-reveal hook
├── render.yaml              ← Render deployment config
├── .env.example             ← Environment variable reference
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

---

## 🛠 Local Development

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev
# → http://localhost:3000

# 3. Production build
npm run build

# 4. Preview production build locally
npm run preview
# → http://localhost:4173
```

---

## 🚀 Deploy to Render — Step by Step

### Step 1 — Push to GitHub

```bash
# Inside the portfolio-biswajit folder:
git remote add origin https://github.com/<YOUR_USERNAME>/portfolio-biswajit.git
git branch -M main
git push -u origin main
```

### Step 2 — Create Render Static Site

1. Go to **[render.com](https://render.com)** → Sign in / Sign up (free)
2. Click **New +** → **Static Site**
3. Click **Connect a repository** → select `portfolio-biswajit`
4. Fill in the settings:

| Field | Value |
|---|---|
| **Name** | `biswajit-portfolio` |
| **Branch** | `main` |
| **Build Command** | `npm ci && npm run build` |
| **Publish Directory** | `dist` |

5. Click **Create Static Site**

Render will automatically:
- Install dependencies (`npm ci`)
- Build the site (`npm run build`)  
- Serve everything in `dist/` as a static site
- Give you a URL like `https://biswajit-portfolio.onrender.com`

### Step 3 — Auto-Deploy on Push (already enabled by default)

Every time you push to `main`, Render will automatically rebuild and redeploy. No manual steps needed.

---

## ⚙️ Environment Variables (Optional)

Set these in **Render Dashboard → Your Service → Environment → Add Environment Variable**:

| Variable | Purpose | Example |
|---|---|---|
| `VITE_ANALYTICS_ID` | Google Analytics GA4 ID | `G-XXXXXXXXXX` |

> No other environment variables are needed. The site is purely static with no backend.

---

## ✏️ How to Update Content

**All content is in `src/data.js`** — you never need to touch any component.

| What to change | Where in data.js |
|---|---|
| Name, headline, bio | `PROFILE` |
| Hero intro paragraph | `PROFILE.heroIntro` |
| Tech tags | `PROFILE.techTags` |
| About paragraphs | `ABOUT.paragraphs` |
| Skills grid | `SKILLS` array |
| Work experience | `EXPERIENCE` array |
| Projects | `PROJECTS` array |
| Achievements | `ACHIEVEMENTS` array |
| Education | `EDUCATION` array |
| Certifications | `CERTIFICATIONS` array |

After editing, commit and push — Render will redeploy automatically.

---

## 📦 Production Bundle

| Asset | Size | Gzip |
|---|---|---|
| CSS | 22 KB | 5.3 KB |
| JS (app) | 46 KB | 13 KB |
| JS (vendor) | 141 KB | 45 KB |
| Profile photo | 154 KB | — |
| Resume PDF | 122 KB | — |

**Total page weight: ~490 KB** (well under 1 MB)
