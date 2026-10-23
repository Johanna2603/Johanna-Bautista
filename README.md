# Johanna-Bautista — Tríada

## Deploy on Netlify

This repository is a **static HTML/CSS/JavaScript prototype**. The deploy configuration is in `netlify.toml`.

1. In Netlify, choose **Add new site → Import an existing project**.
2. Connect GitHub and select `Johanna2603/Johanna-Bautista`.
3. Keep the build command empty (there is no package.json/build step).
4. Set the publish directory to `01_MARY_TRIADA` (already configured in `netlify.toml`).
5. Deploy the site.

## Important limitations

- This version is a navigable visual prototype, **not a production application**.
- It has no backend, database, real authentication, or persistent storage. Forms and data operations are intentionally not functional.
- The interface itself describes the workspace as private, but a Netlify deployment is normally reachable by anyone who has its URL. The `noindex` metadata is not access control.
- Do not enter or upload confidential company information, personal data, passwords, access tokens, or real work files. Do not use this deployment as a secure private workspace.
- Before using it for real work, implement and test server-side authentication/authorization, persistence, file handling, and appropriate privacy controls.

## Project files

- `01_MARY_TRIADA/`: static site pages and assets.
- `netlify.toml`: Netlify publish directory and baseline response headers.
