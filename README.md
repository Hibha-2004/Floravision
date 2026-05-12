# FloraVision - Plant E-Commerce Website

A dark-themed plant e-commerce landing page built with **Next.js** and **Tailwind CSS**, faithfully implementing the Figma design.

## Tech Stack
- **Next.js 14** (App Router)
- **Tailwind CSS** (no UI kits)
- **React 18**

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
floravision/
├── app/
│   ├── globals.css       # Tailwind base styles
│   ├── layout.jsx        # Root layout with metadata
│   └── page.jsx          # Main page (assembles all sections)
├── components/
│   ├── Navbar.jsx         # Fixed navbar with mobile hamburger drawer
│   ├── Hero.jsx           # Hero section with plant image + review card
│   ├── TrendyPlants.jsx   # Horizontal trendy plant cards
│   ├── TopSelling.jsx     # 2x3 grid of top selling plants
│   ├── CustomerReview.jsx # 3-column customer review cards
│   ├── BestO2.jsx         # O2 plants carousel with pagination
│   └── Footer.jsx         # Footer with newsletter subscribe
├── preview.html           # Standalone HTML preview (no build needed)
├── tailwind.config.js
├── postcss.config.js
└── next.config.js
```

## Features

- Responsive layout (320px–1440px)
- Mobile hamburger/drawer navigation
- Smooth hover transitions on all interactive elements
- Accessible: semantic HTML, alt text, aria labels, focus indicators
- Keyboard-navigable
- O2 plants carousel with dot indicators
- Newsletter subscribe form
- No UI kits — pure Tailwind CSS only

## Preview Without Build

Open `preview.html` directly in any browser for an instant preview without installing dependencies.
