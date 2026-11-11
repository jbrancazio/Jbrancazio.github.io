# jbrancazio.github.io

Personal site of Joshua Brancazio: projects, resume, and writing. Built with [Astro](https://astro.build) and deployed to GitHub Pages by GitHub Actions on every push to `master`.

## Run locally

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
```

## Where things live

| What | File |
|---|---|
| Site title, tagline, links | `src/site.ts` |
| Resume content | `src/data/resume.ts` |
| Projects (one Markdown file each) | `src/content/projects/` |
| Blog posts (one Markdown file each) | `src/content/posts/` |
| Colors, fonts, spacing | `src/styles/global.css` |
| Images used by posts | `public/img/` |

**Add a project:** copy an existing file in `src/content/projects/` and edit the front matter. Projects marked `featured: true` show on the home page.

**Add a post:** add a Markdown file to `src/content/posts/` with `title`, `date`, and `slug`. It's served at `/<slug>/`.
