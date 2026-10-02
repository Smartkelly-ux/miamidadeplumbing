# Miami Dade Plumbing

A static React website built with Vite. It does not require a server, API key, or environment variables to run or deploy.

## Run locally

Prerequisites: Node.js 20.19+ or 22.12+.

```sh
npm install
npm run dev
```

## Build and deploy

```sh
npm run build
```

Upload the contents of the generated `dist` folder to any static web host. The build uses relative asset paths, so it can also be served from a subfolder. No provider-specific runtime or environment configuration is required.

To preview the production build locally:

```sh
npm run preview
```

The canonical and sitemap URLs in `index.html` and `public/sitemap.xml` use the site's current domain. Update them if deploying under a different domain.
