# CLAUDE.md

## Claude Code Instructions

This file contains the working rules for Claude Code in this repository.

Follow these instructions carefully. Treat them as the main project instructions unless Yahya explicitly overrides them in chat.

This project is a static, serverless personal dashboard / portfolio website for Yahya Al-Sharif.

## Project Purpose

The website should present Yahya in a professional, polished, and honest way:

* Personal introduction.
* Software Engineering and AI background.
* KAUST Academy AI journey.
* Education.
* Projects such as ESAS and Home AI.
* Skills and tools.
* CV preview/download.
* Contact links for LinkedIn and email.

The project should stay simple, professional, public-safe, and easy to deploy.

## Core Rules

* Frontend-only project.
* No backend unless Yahya explicitly approves it.
* No database.
* No authentication.
* No server-side logic.
* No paid services required.
* Static data should live in local frontend files.
* The project should be deployable through static hosting such as GitHub Pages, Cloudflare Pages, Netlify, or Vercel.

Preferred stack:

* React
* TypeScript
* Vite
* Tailwind CSS

Optional later:

* Lightweight animation library only if useful and approved.
* Lightweight localization approach only when Arabic support is intentionally started.

Do not introduce unnecessary tools, frameworks, or dependencies.

## Main Dashboard Direction

Build this as a single-page dashboard, not a multi-page app.

Preferred section order:

1. Hero / Greeting
2. About Me
3. Education & KAUST Academy
4. Projects
5. CV
6. Contact
7. Back to Top control

Use anchor navigation instead of routing.

Hero buttons should scroll to sections on the same page:

* About Me
* Education
* Projects
* Contact

Example anchors:

* `#about`
* `#education`
* `#projects`
* `#contact`

Do not add React Router unless Yahya explicitly approves it.

## Visual Design Rules

The website should look like a polished personal dashboard, not a plain default template.

Design expectations:

* Strong hero section with Yahya’s picture and name.
* Clean modern dashboard layout.
* Good spacing.
* Professional typography.
* Dashboard-style cards.
* Soft gradients.
* Subtle borders.
* Light and dark theme support.
* Mobile-friendly behavior.
* Accessible contrast.
* Subtle animations or transitions only.
* Clear contact buttons.
* Clear back-to-top button.

Avoid:

* Distracting effects.
* Overly flashy animation.
* Gaming-style visuals.
* Large empty sections.
* Forced full-screen sections everywhere.
* Design choices that hurt readability or performance.

The site should feel modern and slightly impressive, but still professional.

## Page Height and Scroll Behavior

The page height should be based on real content.

* The hero section may be large because it is the landing section.
* Other sections should grow naturally from their content.
* Do not force all sections to be `min-height: 100vh`.
* Empty or short sections should stay compact.
* The page should stop scrolling when real content ends.
* Add a back-to-top control near the bottom once the page has meaningful content.

## Light and Dark Mode Behavior

The site should support light mode and dark mode.

Expected behavior:

* Include a visible theme toggle.
* Save the user’s selected mode if implemented.
* Prefer `localStorage` for saved mode.
* If there is no saved preference, using system preference is acceptable.
* Both modes must look intentional.
* Contrast must remain readable.
* Avoid hardcoded colors scattered across components.

Implementation preference:

* Use a simple app-level theme state or class/data attribute.
* Keep the theme logic understandable.
* Do not add a theme library unless Yahya approves it.

## Future Arabic Mode Behavior

Arabic support is planned for later, not for the first English dashboard unless Yahya explicitly asks for it.

When Arabic mode is implemented:

* Do not blindly mirror the whole layout.
* Do not reorder the hero buttons.
* Do not reorder dashboard cards unless Yahya approves it.
* Keep the visual structure stable across languages.
* Translate text content.
* Arabic text should use proper `dir="rtl"` where needed.
* Arabic paragraphs should align naturally to the right.
* English text should remain `ltr`.
* Main button order should stay visually consistent between English and Arabic.
* Avoid confusing layout jumps when switching languages.

Preferred future approach:

* Keep content in structured data files.
* Implement English first.
* Add Arabic as separate content/translation data later.
* Apply RTL behavior at the text/content level instead of globally flipping the whole app without control.

## Content Source Rules

Use the files under `docs/` as content references.

Expected references:

* `docs/cv.md` for profile, education, KAUST Academy, projects, certificates, skills, and language content.
* `docs/links.md` for LinkedIn and email contact links.
* `docs/dashboard-content.en.md` for the planned English dashboard content outline, if present.

If a public CV PDF exists in `docs/`, it may be copied or referenced for placement under `public/cv/` when implementing the CV download section.

Do not scatter hardcoded content across components. Prefer structured data files such as:

* `src/data/profile.ts`
* `src/data/education.ts`
* `src/data/projects.ts`
* `src/data/skills.ts`
* `src/data/contact.ts`

## Content Accuracy Rules

Do not exaggerate Yahya’s experience.

Clearly distinguish between:

* Completed projects
* In-progress projects
* Planned projects
* Academic projects
* Graduation projects

Do not describe unfinished work as completed.

For KAUST Academy:

* Keep wording professional and accurate.
* Mention completed stages only when supported by the provided content.
* Mention Stage 4 as accepted/upcoming/in progress unless Yahya says it is completed.
* Do not overstate the summer program before completion.

For ESAS:

* Describe it as a graduation project focused on authentic Saudi tourism experiences.
* Mention Yahya’s official role as Coordinator when relevant.
* Do not claim sole ownership.

For Home AI:

* Describe it as a privacy-focused AI project if included.
* Mark it as planned/current unless Yahya says it is completed.

## Mandatory Plan-First Workflow

Before making changes, Claude must:

1. Inspect the current project structure.
2. Summarize what exists.
3. Propose a short implementation plan.
4. List the files that will be created or modified.
5. Wait for Yahya’s explicit approval.

Accepted approval examples:

* `approved`
* `yes`
* `go ahead`
* `do it`
* `proceed`

Do not continue with file edits, installs, setup commands, deletions, formatting, or restructuring until approval is given.

## Command Rules

Before running commands:

* Explain the command.
* Explain why it is needed.
* State whether it changes files.

Commands that install packages, create files, delete files, format files, build the project, or affect Git require approval before running.

Read-only inspection commands may be suggested first, but still explain them.

## Code Quality Rules

Code must be:

* Clean.
* Readable.
* Modular.
* Type-safe.
* Beginner-friendly.
* Maintainable.
* Responsive.
* Focused on the requested change.

Avoid:

* Overengineering.
* Big unrelated refactors.
* Duplicate code.
* Unused imports.
* Unused variables.
* Dead code.
* Temporary hacks.
* Leftover console logs.
* Unclear naming.
* Scattered hardcoded content.
* Unnecessary dependencies.

Prefer:

* Small components.
* Clear data files.
* Reusable sections.
* Simple styling patterns.
* Descriptive names.
* Minimal changes.
* Easy-to-review diffs.

## Accessibility and UX Rules

The site should be usable and professional.

Follow these expectations:

* Use semantic HTML where possible.
* Use proper section IDs for anchor navigation.
* Buttons and links should be keyboard accessible.
* Links should have clear labels.
* External links should be understandable.
* Images should have useful alt text.
* Text contrast should be readable in light and dark mode.
* Smooth scrolling should not break normal browser behavior.
* Do not hide important information behind hover-only interactions.

## Testing and Validation

After implementation, validate the project.

For React/Vite, use appropriate commands such as:

* `npm run build`
* `npm run lint` if available.
* `npm test` or equivalent if available.

If linting or tests are not configured, say that clearly.

Do not claim tests passed if they were not run.

After meaningful UI changes, check or explain how to check:

* Local startup.
* Homepage rendering.
* Anchor navigation / section scrolling.
* Section visibility.
* Contact links.
* CV preview/download.
* Desktop layout.
* Mobile layout.
* Light/dark mode if implemented.
* Production build.

## Regression Expectations

Before reporting completion, make sure the change did not break:

* Main page rendering.
* Navigation or section scrolling.
* Hero section.
* About section.
* Projects section.
* KAUST section.
* Skills/CV/contact content if implemented.
* Responsive layout.
* Static build.

## Git Hygiene and Temporary Files

Keep the repository clean.

Do not leave generated, temporary, or runtime files in the repository.

The `.gitignore` should ignore real generated outputs and temporary files, such as:

* `node_modules/`
* `dist/`
* `.vite/`
* `.env`
* `.env.local`
* `.env.*.local`
* log files.
* editor temporary files.
* `.DS_Store`.
* `Thumbs.db`.

Do not ignore important source files.

If new generated files appear after a command, explain whether they should be ignored or committed.

Do not add large unnecessary files.

## Dependency Policy

Before installing any package:

1. Explain what it does.
2. Explain why it is needed.
3. Explain whether the feature can be done without it.
4. Wait for Yahya’s approval.

Keep dependencies minimal.

## Preferred Project Structure

Prefer a simple structure like:

```txt
src/
  assets/
  components/
  data/
  sections/
  styles/
  App.tsx
  main.tsx
public/
  cv/
docs/
  cv.md
  links.md
  dashboard-content.en.md
```

Use the actual project structure when different, but keep it simple.

## Privacy and Security

Do not expose private data.

Do not include:

* Passwords.
* API keys.
* Private tokens.
* Sensitive personal data.
* Private documents not meant for public GitHub.

Only use public/professional contact information.

## Communication Style

When communicating with Yahya:

* Be concise.
* Be practical.
* Be honest about uncertainty.
* Do not make unnecessary changes.
* Do not assume approval.
* Explain risks only when relevant.
* Keep plans short and clear.

## Completion Report Format

After completing work, report:

1. What changed.
2. Files changed.
3. Commands run.
4. Validation results.
5. Remaining risks or next step.

Do not claim completion unless the work was actually implemented and validated.
