# singhamjesh.github.io

Personal portfolio for **Amjesh Kumar Singh** — Senior Software Engineer, Technical Lead, and Senior Full Stack Developer. Static site for GitHub Pages.

## File structure

```text
.
├── index.html              # Homepage
├── favicon.ico
├── robots.txt
├── sitemap.xml
├── README.md
├── assets/
│   ├── amjesh_cv.pdf       # Resume
│   ├── css/style.css
│   ├── js/script.js
│   └── images/
│       ├── me.png
│       ├── logo.png
│       └── logo2.png
└── pages/
    └── blogs.html          # Placeholder
```

## Local preview

```bash
python3 -m http.server 8080
```

Open `http://localhost:8080`.

## Deploy to GitHub Pages

1. Commit the files on the `main` (or `master`) branch of `singhamjesh/singhamjesh.github.io`.
2. In the repo: **Settings → Pages → Deploy from a branch → `main` / root**.
3. Site URL: [https://singhamjesh.github.io/](https://singhamjesh.github.io/)

No build step. HTML, CSS, and JS are served as-is.
