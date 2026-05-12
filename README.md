# 🌿 FloraVision — Plant E-Commerce Landing Page

A dark-themed, mobile-first plant e-commerce landing page built with **Next.js 14** and **Tailwind CSS**, faithfully implementing a Figma design — no UI kits used.

🔗 **Live Demo → [floravision-nine.vercel.app](https://floravision-nine.vercel.app/)**

---

## Preview

> Dark green aesthetic · Mobile-first · Pixel-accurate Figma implementation

---

## Tech Stack

| Technology | Details |
|---|---|
| **Next.js 14** | App Router |
| **Tailwind CSS** | Utility-first, no UI kits |
| **React 18** | Functional components + hooks |
| **Vercel** | Deployment |

---

## Features

- Pixel-accurate Figma-to-code implementation
- Mobile-first responsive layout (`max-w-[430px]` base)
- Fixed navbar with hamburger/drawer navigation
- O2 plants carousel with dot pagination
- Product cards with hover transitions & cart buttons
- Customer review section
- Newsletter subscribe form in footer
- Accessible — semantic HTML, `aria` labels, focus indicators, keyboard navigable
- No UI kits — pure Tailwind CSS only

---

## Sections

| Section | Description |
|---|---|
| `Navbar` | Fixed top nav with logo, links, search, wishlist, cart |
| `Hero` | Full-height hero with plant visual, floating product card, review snippet |
| `TrendyPlants` | Horizontal list cards for trending plants |
| `TopSelling` | 3-column product grid with cart buttons |
| `CustomerReview` | Review cards with star ratings |
| `BestO2` | O2 plants carousel with dot indicators |
| `Footer` | Links, newsletter form |

---

## Project Structure

```
floravision/
├── app/
│   ├── globals.css         # Tailwind base styles
│   ├── layout.jsx          # Root layout with metadata
│   └── page.jsx            # Main page — assembles all sections
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── TrendyPlants.jsx
│   ├── TopSelling.jsx
│   ├── CustomerReview.jsx
│   ├── BestO2.jsx
│   └── Footer.jsx
├── tailwind.config.js
├── postcss.config.js
└── next.config.js
```

---

## Getting Started

### Prerequisites
- Node.js 18+
- npm

### Installation

```bash
# Clone the repo
git clone https://github.com/YOUR_USERNAME/floravision.git
cd floravision

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

---

## Deployment

Deployed on **Vercel** — connected to the GitHub repo for automatic deploys on every push to `main`.

---

