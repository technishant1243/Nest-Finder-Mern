# 🏠 NestFinder — Real Estate Aggregator

A production-ready React + Vite frontend for aggregating Indian real estate listings from multiple sources (Housing.com, Magicbricks, 99acres, NoBroker) into a single platform.

## Tech Stack
- **React 18** (plain JavaScript, no TypeScript)
- **Vite 6** — lightning-fast dev server & bundler
- **Tailwind CSS v4.1** — via `@tailwindcss/vite` plugin (no config file needed)
- **Google Fonts** — Playfair Display + DM Sans

## Project Structure
```
nestfinder/
├── index.html
├── vite.config.js
├── package.json
├── src/
│   ├── main.jsx              # Entry point
│   ├── App.jsx               # Root component, state management
│   ├── index.css             # Tailwind v4 @import + @theme tokens + animations
│   ├── components/
│   │   ├── Navbar.jsx        # Sticky top nav with auth buttons
│   │   ├── Hero.jsx          # Hero section + integrated search bar
│   │   ├── FiltersBar.jsx    # Horizontal filter chips + source dots
│   │   ├── Sidebar.jsx       # Map placeholder, price slider, amenities
│   │   ├── PropertyCard.jsx  # Individual property card with fav toggle
│   │   ├── PropertyModal.jsx # Full-screen detail modal
│   │   └── Toast.jsx         # Notification toast
│   ├── hooks/
│   │   └── useToast.js       # Toast state hook
│   └── data/
│       └── properties.js     # Sample data, constants, gradients
```

## Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Start development server
```bash
npm run dev
```
Open http://localhost:5173

### 3. Build for production
```bash
npm run build
npm run preview
```

## Tailwind v4.1 Setup
This project uses the new Vite-native Tailwind v4.1 integration.
- **No `tailwind.config.js` needed**
- Theme tokens defined in `src/index.css` via `@theme { }` block
- Plugin added directly in `vite.config.js`

```js
// vite.config.js
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({ plugins: [react(), tailwindcss()] })
```

```css
/* src/index.css */
@import "tailwindcss";

@theme {
  --color-gold: #c9952a;
  --font-display: "Playfair Display", serif;
  /* ... */
}
```

## Features Implemented
- ✅ Sticky Navbar with Login/Signup
- ✅ Hero section with search bar (City, Type, Budget)
- ✅ Filter chips (BHK, Furnished, Amenities)
- ✅ Sidebar: Map placeholder, price range slider, type checkboxes, amenity tags, source filters
- ✅ Property cards with type badge, source badge, favorites toggle
- ✅ Property detail modal
- ✅ Toast notifications
- ✅ Pagination
- ✅ Smooth animations (fadeUp, modalIn, toastIn)
- ✅ Fully responsive (mobile → desktop)

## Next Steps (Backend Integration)
1. Replace `src/data/properties.js` with real API calls to your Express.js backend
2. Add React Router for `/login`, `/signup`, `/property/:id` pages
3. Implement JWT auth context
4. Connect favorites to MongoDB via POST `/api/favorites`
5. Add Google Maps embed for the sidebar map
