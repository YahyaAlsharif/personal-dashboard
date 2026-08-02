# Personal Dashboard

This is Yahya Alsharif's personal dashboard / portfolio website. It introduces
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

## Social Preview Image

The public link-preview image is generated from the existing dashboard profile
asset and saved at `public/social-preview.png`.

Regenerate it after changing the profile image or social preview text:

```powershell
powershell.exe -NoProfile -ExecutionPolicy Bypass -File scripts\generate-social-preview.ps1
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
```

Local content references and planning notes live in an untracked `docs/`
folder, which is intentionally kept out of the public repository.

## Deployment

The site can be deployed later through GitHub Pages or another static host such
as Cloudflare Pages, Netlify, or Vercel.

## License

Released under the [MIT License](LICENSE). You are free to use, modify, and
distribute this code, including commercially, provided the copyright notice and
licence text are retained. The code is provided as is, without warranty of any
kind.

This was built as a personal learning project. It is not maintained as
production software, and the results reported here are specific to the setup
described above.

The MIT License covers the source code. Media assets are not covered by it and
keep their own terms:

- The hero background video is *Nighttime View of Grand Mosque in Mecca* by
  Mohammad Kheir, from [Pexels](https://www.pexels.com/video/nighttime-view-of-grand-mosque-in-mecca-35743721/),
  used under the [Pexels License](https://www.pexels.com/license/). Attribution
  is not required by that licence; it is given here voluntarily.
- Personal material such as the profile photo, CV, and project documents remains
  the property of Yahya Alsharif and is not licensed for reuse.
