# MCC Static Site (Eleventy Starter)

This is a minimal Eleventy (11ty) starter for the Marist Computing Conference site.

## Quick start
```bash
npm install
npm run dev      # local preview at http://localhost:8080
npm run build    # outputs to _site/
```

## Where to edit
- Page content: `src/*.md`
- Schedule data: `src/_data/schedule.json`
- External links (HomeTown, IBM poster site, Map): `src/_data/links.json`
- Base layout / nav: `src/_includes/layouts/base.njk`
- Styles: `public/assets/styles.css` (served as `/assets/styles.css`)

## Deploying to GitHub Pages (gh-pages branch)
1. Create a repo and push this project.
2. Ensure GitHub Pages is set to deploy from the `gh-pages` branch (Settings → Pages).
3. GitHub Action in `.github/workflows/deploy.yml` will build Eleventy and publish to `gh-pages` on every push to `main`.

## Notes
- The site is purely static. Buttons link out to the IBM TechMeet site, HomeTown registration, and Marist map.
- Edit `src/_data/links.json` to update those URLs.
# test trigger

.