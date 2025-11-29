# Copilot instructions — landing-cars

Purpose: Quickly orient an AI coding agent to be productive in this Vue 3 + Vite landing site.

- **Repo type:** Vue 3 app scaffolded for Vite (see `package.json`). Dev server: `npm run dev`.
- **Entry points:** `src/main.js` mounts `App.vue` and registers a few global UI components (`UiButton`, `UiSlider`, `UiIcon`).

## High-level architecture

- **App shell / layout:** `src/components/LayoutTemplate/LayoutTemplate.vue` wraps all routes; `App.vue` simply places `<RouterView/>` inside the layout.
- **Routing:** `src/router/index.js` defines routes. Root `HomeView` is imported directly; other pages are lazy-loaded via dynamic import (preferred for non-root pages).
- **Views:** `src/views/*` contains page-level components (example: `src/views/HomeView/HomeView.vue`).
- **UI components:** `src/components/*` groups feature/component folders. Many components expose an `index.js` so they can be imported by folder (e.g. `import UiButton from './components/UiButton'`).
- **Helpers:** `src/helpers/` contains small utilities (animations, sound toggles). Example: `animationHelpers.js` registers `gsap` and `ScrollTrigger` and animates elements with the `.js-animation` class.

## Developer workflows (commands)

- Install dependencies: `npm install`
- Dev server (hot reload): `npm run dev`
- Build for production: `npm run build`
- Preview build: `npm run preview`
- Lint: `npm run lint` (ESLint; `--fix` enabled in script)
- Format: `npm run format` (Prettier on `src/`)

Run these from a PowerShell prompt on Windows; combine commands with `;` if chaining.

## Project-specific conventions & patterns

- Global component registration: Add components to `src/components/*` and export via an `index.js` if they should be imported by folder. Example: `UiSlider` also exposes a named `UiSlide` in `src/components/UiSlider/index.js` — preserve named/default export shapes.
- Styles: SCSS partials live in `src/assets/styles/`; `src/assets/main.scss` is imported in `src/main.js`. Use `vars.scss` for project variables (breakpoints, colors).
- Animations: Use `src/helpers/animationHelpers.js`. Target elements with the `.js-animation` class; the helper uses `gsap.fromTo(...)` and `ScrollTrigger` with `start` and `end` values you pass in. Ensure `gsap.registerPlugin(ScrollTrigger)` remains before use.
- Static assets: `public/` serves assets at root paths (examples in `HomeView`: `/sound.mp3`, `/mainpage-bg.mp4`). Reference these with absolute paths in templates.
- Sound helper: `src/helpers/toggleSound.js` is used by `HomeView` via a `ref` to the audio element. Follow this pattern when adding audio controls.

## Integration points & external dependencies

- GSAP: `gsap` + `ScrollTrigger` (registered in `animationHelpers.js`). If modifying animations, respect plugin registration and the `.js-animation` convention.
- Swiper: `swiper` is included — components or sliders may import Swiper CSS where needed.
- Build tooling: `vite` with `vite-plugin-image-optimizer`, `sharp`, and `svgo` in `devDependencies` — image optimization runs during build. Avoid changing plugin config in `vite.config.js` unless necessary.

## Editing guidance (how to make common changes)

- Add a new page/view: create `src/views/YourView/YourView.vue`, then add a route in `src/router/index.js`. Prefer lazy loading for non-root routes:

  component: () => import('../views/YourView/YourView.vue')

- Add a new component exported by folder: create `src/components/YourComponent/YourComponent.vue` and `src/components/YourComponent/index.js` that exports the component. If it should be globally available, register it in `src/main.js`.
- Add styles: create a partial under `src/assets/styles/` and import it into `src/assets/main.scss` or import the partial in the component's `<style lang="scss">`.
- Use helpers: call `animatePairedElements('top bottom', 'top center+=250')` or add `.js-animation` in templates and wire the call in `onMounted()` of the view.

## Quick examples (copyable)

- Start dev server (PowerShell):

  npm install
  npm run dev

- Minimal animation usage (inside a view's `onMounted`):

  // add `.js-animation` to elements in template
  import { animatePairedElements } from '@/helpers/animationHelpers'
  onMounted(() => animatePairedElements('top bottom', 'top center+=250'))

## Files to inspect first when debugging

- `src/main.js` — global registration and style entry
- `src/router/index.js` — routing behavior and lazy-loading pattern
- `src/components/LayoutTemplate/LayoutTemplate.vue` — page shell
- `src/views/HomeView/HomeView.vue` — example of audio/video, component composition, and style usage
- `src/helpers/animationHelpers.js` — GSAP + ScrollTrigger usage and the `.js-animation` convention
- `src/assets/styles/vars.scss` — project variables and breakpoints

If something is unclear or you want more detail on any section (for example, `vite.config.js` configuration, image optimization, or component export shapes), tell me which area to expand and I'll iterate.
