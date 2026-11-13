# For Buuuuu ♡

A photo-led, romantic birthday website made with plain HTML, CSS and JavaScript. It includes all 20 supplied photos (optimized as WebP), animated falling petals, a scrapbook-style gallery with a photo viewer, 12 personal expandable love reasons, a letter, a live countdown to 21 November 2026, and a final secret message.

## Preview locally

Open `index.html` in a modern browser. The website does not need a build step or a server.

## Publish on GitHub Pages

1. Create a new GitHub repository (for example, `for-buuuuu`).
2. Upload the complete contents of this folder, including the `images` folder, to the repository root.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Choose branch **main** and folder **/(root)**, then save.
6. GitHub will publish the website at `https://YOUR-USERNAME.github.io/for-buuuuu/`.

## Personalize

- Edit the birthday letter and final note in `index.html`.
- Edit photo captions and dates in the `memories` array in `script.js`.
- Edit the 12 reasons in the `reasons` array in `script.js`.
- The countdown currently targets **21 November 2026, 00:00 IST**.

## Photos and privacy

The 20 supplied photos are included in `images/` as compressed WebP files for faster loading. A GitHub Pages site from a public repository is public on the internet, so anyone with the link may view the page and its photos. Use a private repository only if your GitHub plan/settings support Pages for it, or choose another private hosting arrangement.

No analytics, tracking, backend, or external image hosting is used. Google Fonts are loaded from Google Fonts; if you prefer fully offline fonts, remove the font link in `index.html` and use the fallback fonts in `style.css`.
