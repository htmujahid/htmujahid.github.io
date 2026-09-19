# htmujahid.github.io

Personal portfolio site for Talha Mujahid — a single-page, terminal-styled site built with plain HTML, CSS, and JavaScript (no framework, no build step).

**Live:** [htmujahid.github.io](https://htmujahid.github.io/)

## Features

- Three horizontally-scrolling panels — home/contact, projects, and tech stack — navigated with mouse wheel, arrow/page keys, or touch swipe
- Terminal-inspired visual theme
- No dependencies, bundler, or build process — just static files

## Project structure

```
.
├── index.html      # markup and content
├── style.css       # styling
├── script.js       # panel navigation logic
├── favicon.svg / favicon-16.png / favicon-32.png / apple-touch-icon.png
└── og-image.png     # social share preview image
```

## Development

This is a static site with no build tooling. To preview it locally, serve the directory with any static file server, for example:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000` in your browser.

## Deployment

The site is deployed via [GitHub Pages](https://pages.github.com/), served directly from the root of the `master` branch.
