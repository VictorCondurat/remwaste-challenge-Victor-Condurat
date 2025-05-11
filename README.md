# REMWaste Skip Selection

A compact React 18 + Vite SPA powering the **“Choose your skip size”** step for REMWaste.  
Focused on responsiveness, accessibility, and maintainability.

---

## Overview

* **Data-driven** – runtime fetch from `/api/skips/by-location`, normalised client-side  
* **Responsive grid** – CSS Grid `auto-fill` cards flow from ≥ 300 px widths  
* **Keyboard support** – arrow-key navigation, roving `tabindex`, `aria-pressed` states  
* **Progress tracking** – `StepTracker` shows clear done / current / todo steps  
* **Sticky footer** – echoes chosen skip, price, and provides Back / Continue actions  
* **Design tokens** – single palette in `index.css` ensures consistent theming  

---

## Tech stack

| Purpose    | Choice                                   |
|------------|-------------------------------------------|
| Build tool | **Vite** – instant HMR & lean bundles     |
| UI library | **React 18** with functional components   |
| Styling    | **CSS Modules** scoped per component      |
| HTTP       | **Axios** for concise requests            |

---

## Architecture

~~~text
src/
 ├─ components/
 │   ├─ Header/ ─ StepTracker*
 │   ├─ SkipCard/
 │   └─ SkipList/
 ├─ pages/SkipSelectionPage.jsx
 ├─ utils/api.js
 └─ index.css
~~~

*`StepTracker` and `SkipCard` expose minimal props and keep state in `SkipSelectionPage`, avoiding global stores.*

---

## Setup

~~~bash
git clone https://github.com/VictorCondurat/remwaste-challenge-Victor-Condurat.git
cd remwaste-challenge-Victor-Condurat/skip-selection
npm i
npm run dev    # localhost:5173
npm run build  # production assets
~~~

Live demo: <https://codesandbox.io/p/devbox/REMWaste-skip-selection-victor>

---

## Design principles

* **Accessibility first** – skip-link, WCAG-AA colours, logical focus order, live-region announcements  
* **Component isolation** – JS and CSS co-located; no style bleed  
* **Performance** – lazy-loaded images and ~38 kB gzipped JS  

---

## Roadmap

* Unit & e2e tests (Jest + Playwright)  
* Persist selection in `localStorage`  
* Optional dark mode via token swap  
* Toast component for non-blocking error messaging  

---

## License

MIT
