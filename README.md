# CHERDAKOV

Personal developer portfolio: websites, applications, Telegram Mini Apps and AI integrations.

**Website:** https://cherdakov.github.io/

## Run locally

No package installation or build step is needed. From the repository directory:

```sh
python3 -m http.server 4173 --bind 127.0.0.1
```

Open http://127.0.0.1:4173/.

## Editing

- `index.html` — Russian content, semantic page structure, project illustrations and metadata.
- `styles.css` — responsive layout, locally hosted font, mobile styles and reduced-motion support.
- `script.js` — English translations, project case studies, language preference and accessible menu/dialog interactions.
- `assets/` — locally hosted images, font, favicon and social preview.

Add `?lang=en` or `?lang=ru` to share a specific language. Language preference is remembered locally where browser storage is available. The Russian page and Telegram contact links also work without JavaScript.

## Publishing

GitHub Pages publishes `main` from `/`. The `.nojekyll` file enables serving the static files directly. Pushing an update to `main` starts the Pages deployment automatically.

Contact links open https://t.me/cherdakov. This website has no contact-form backend, external analytics or third-party runtime dependencies.

Project links open the customer-facing sites or bot. The Chaki calendar is an illustrative preview without client records, rather than a screenshot of the live administrator workspace. All project descriptions reflect the documented implementation; no performance or revenue results are claimed.

## Assets

- Manrope variable font and its SIL Open Font License: `assets/fonts/`.
- Soul Temple photograph: existing public presentation asset from the Soul Temple project (`frontend/public/surf-school.webp`).
- Kiki Eats mobile screenshots and demo food image: existing public presentation assets from Kiki Eats (`landing/assets/`). Screenshots show the Russian product interface in both site languages.
- Favicon, social preview and interface illustrations: authored for this portfolio.

Source files for the portfolio are public. Code and operational data from the showcased projects are not included.
