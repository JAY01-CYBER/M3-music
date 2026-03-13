# M3 Music Client

A Material 3-inspired YouTube Music style client built with **React + Vite + MUI**.

## Features
- Premium "glass" UI with ambient gradients
- Responsive layout (desktop + mobile)
- Sidebar, now-playing panel, curated playlists, and queue panel
- Easy-to-run development scripts
- CI workflow that builds the app and publishes a downloadable artifact

## Run locally
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
npm run preview
```

## Downloadable build artifact (GitHub Actions)
A workflow is included at `.github/workflows/build-and-package.yml`.

On each push/PR, it:
1. Installs dependencies
2. Builds the app
3. Archives `dist/`
4. Uploads `m3-music-web-build` as a downloadable artifact
