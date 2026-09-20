# Paradigm Pet Professionals - Cloudflare Pages Static Site

This is a framework-free static website intended for Cloudflare Pages.

## Deploy

1. Upload this folder to a Git repository, or upload the contents to a Cloudflare Pages deployment.
2. No build command is required.
3. Set the output/build directory to the project root when Cloudflare asks for one.
4. Make `index.html` the root page.

## Before production

- Replace `(https://dry-dream-721a.hendjf98.workers.dev/)` in `sitemap.xml`, `robots.txt`, and the canonical URL in `index.html` with the real domain.
- The consultation form is a client-side prototype. Connect `consult.html` to a Cloudflare Worker/Pages Function or a form provider to actually transmit/store submissions.
- Review all supplied pet-care guidance with the business's veterinarian/subject-matter experts before publishing as professional advice.
- The site uses direct Unsplash image URLs. The source pages identified during development marked the selected photographs as free to use under the Unsplash License. Recheck the license/status of any replacement image before publication.

## Accessibility

The site includes skip navigation, semantic headings, labeled form controls, keyboard focus states, responsive navigation, responsive tables, alt text, reduced-motion handling, and color choices based on the supplied brand palette.
