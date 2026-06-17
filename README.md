# Personal Dashboard

This is Yahya Al-Sharif's personal dashboard / portfolio website. It introduces
his software engineering background, AI learning journey, projects, CV, and
contact links in a clean one-page static site.

## Stack

- React
- TypeScript
- Vite
- Tailwind CSS

The project is frontend-only and static. It does not use a backend, database,
authentication, routing, or server-side logic.

## First-Time Setup

Run this after cloning the project, after deleting `node_modules/`, or when
dependencies change:

```bash
npm install
npm.cmd run dev
```

`npm install` is only needed to install dependencies locally. After that, normal
daily development can start directly from the dev command.

## Normal Daily Run

```bash
npm.cmd run dev
```

Open `http://127.0.0.1:5173/` or `http://localhost:5173/` while the dev server
is running. These local URLs stop working when the dev server is stopped.

## Validation

```bash
npm.cmd run build
npm.cmd run lint
```

## Project Structure

```txt
src/
  assets/      profile image and source assets
  components/  reusable UI components
  data/        structured portfolio content
  sections/    one-page dashboard sections
  styles/      global Tailwind and theme styles
public/
  cv/          public CV PDF for the website
docs/
  *.md         content references and planning notes
```

## Deployment

The site can be deployed later through GitHub Pages or another static host such
as Cloudflare Pages, Netlify, or Vercel.
