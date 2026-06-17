# AGENTS.md

## Project Purpose

This repository is for a static, serverless personal dashboard / portfolio website for Yahya Al-Sharif.

The site should present Yahya in a professional, polished, and honest way:

* Personal introduction.
* Software Engineering and AI background.
* KAUST Academy AI journey.
* Education.
* Projects such as ESAS and Home AI.
* Skills and tools.
* CV preview/download.
* Contact links for LinkedIn and email.

The project must remain simple, clean, public-safe, and easy to deploy as a static website.

## Core Architecture Rules

* This is a frontend-only project.
* Do not add a backend unless Yahya explicitly approves it.
* Do not add a database.
* Do not add authentication.
* Do not add server-side logic.
* Do not require paid services.
* Static data should live in local frontend files, such as `src/data/`.
* Assets such as images, CV files, icons, and static documents should live in appropriate public or source asset folders.
* The project should be deployable through static hosting such as GitHub Pages, Cloudflare Pages, Netlify, or Vercel.

## Expected Tech Stack

Preferred stack:

* React
* TypeScript
* Vite
* Tailwind CSS

Optional later:

* Lightweight animation library only if needed and approved.
* Lightweight localization approach only when Arabic support is intentionally started.

Do not introduce extra libraries unless they clearly improve the project and are explained before installation.

## Primary Website Structure

The website should be a single-page dashboard, not a multi-page app.

Preferred section order:

1. Hero / Greeting
2. About Me
3. Education & KAUST Academy
4. Projects
5. CV
6. Contact
7. Back to Top control

Use anchor navigation instead of routing.

Hero buttons should scroll to page sections:

* About Me
* Education
* Projects
* Contact

Example section anchors:

* `#about`
* `#education`
* `#projects`
* `#contact`

Do not add React Router unless Yahya explicitly approves a multi-page structure later.

## Dashboard Layout Rules

The page should feel like a modern personal dashboard.

Design goals:

* Clean modern layout.
* Professional first impression.
* Strong hero section with Yahya’s picture and name.
* Clear short introduction.
* Dashboard-style cards.
* Soft gradients.
* Subtle borders.
* Clean spacing.
* Good typography.
* Responsive desktop and mobile layout.
* Smooth section scrolling.
* Clear call-to-action buttons.
* Back-to-top button near the bottom of the page.

The site should be polished, but not distracting.

Avoid:

* Overly flashy effects.
* Busy animations.
* Gaming-style visuals.
* Forced full-screen sections everywhere.
* Empty vertical space.
* Design choices that reduce readability.

## Page Height and Scrolling Rules

The page height should be content-driven.

* The hero section may be large because it is the landing area.
* Other sections should grow naturally based on their content.
* Do not force every section to use `min-height: 100vh`.
* If a section has little content, it should stay compact.
* The page should scroll only until the real content ends.
* The back-to-top control should appear at or near the bottom of the page.

## Light Mode and Dark Mode Rules

The site should support light mode and dark mode.

Behavior expectations:

* Add a clear theme toggle.
* Respect the user’s saved preference if implemented.
* Prefer `localStorage` for remembering the selected mode.
* If no saved preference exists, it is acceptable to use the system preference.
* Both modes must look intentional and polished.
* Do not make dark mode an afterthought.
* Check contrast in both modes.
* Avoid hardcoded colors scattered across many components.

Implementation preference:

* Use a simple app-level theme state or class/data attribute.
* Keep theme logic small and easy to understand.
* Do not add a theme library unless Yahya approves it.

## Future Arabic Mode Rules

Arabic support is planned for later, not part of the first English UI unless Yahya explicitly asks for it.

When Arabic mode is implemented:

* Do not blindly mirror the entire layout.
* Do not reorder navigation buttons.
* Do not reorder the main dashboard cards unless Yahya approves it.
* Keep the visual structure stable when switching languages.
* Translate text content.
* Arabic text should use proper `dir="rtl"` where needed.
* Arabic paragraphs should align naturally to the right.
* English text should remain `ltr`.
* The button order should stay visually consistent across English and Arabic.
* Avoid confusing layout jumps when changing language.

Preferred future approach:

* Keep content in structured data files.
* Start with English content first.
* Later add Arabic content as separate translation data.
* Apply RTL behavior at the text/content level, not by globally flipping the whole UI without control.

## Content Source Rules

Use the files under `docs/` as content references.

Current expected references:

* `docs/cv.md` for CV/profile/education/projects/skills content.
* `docs/links.md` for LinkedIn and email contact links.
* `docs/dashboard-content.en.md` for the planned English dashboard content outline, if present.

If a public CV PDF exists in `docs/`, it may be copied or referenced for placement under `public/cv/` when implementing the CV download section.

Do not hardcode all content directly inside section components. Prefer structured data files such as:

* `src/data/profile.ts`
* `src/data/education.ts`
* `src/data/projects.ts`
* `src/data/skills.ts`
* `src/data/contact.ts`

## Content Accuracy Rules

The portfolio should present Yahya honestly.

Do not claim that a project is completed if it is planned, in progress, or only conceptual.

Use clear labels such as:

* Completed
* In progress
* Planned
* Academic project
* Graduation project

For KAUST Academy:

* Keep the wording professional and accurate.
* Mention completed stages only when supported by the provided content.
* Mention Stage 4 as accepted/upcoming/in progress unless Yahya says it is completed.
* Do not overstate the summer program before completion.

For ESAS:

* Describe it as a graduation project focused on authentic Saudi tourism experiences.
* Mention Yahya’s official role as Coordinator if relevant.
* Do not claim sole ownership.

For Home AI:

* Describe it as a privacy-focused AI project if included.
* Mark it as planned/current unless Yahya says it is completed.

## Plan-First Rule

Before making code changes, running setup commands, installing packages, deleting files, or restructuring the project:

1. Inspect the current project structure.
2. Explain what you found.
3. Propose a short implementation plan.
4. List the files you expect to create or modify.
5. Wait for Yahya to explicitly approve.

Approval words include:

* `approved`
* `yes`
* `go ahead`
* `do it`
* `proceed`

Do not assume approval from vague replies.

## Command Execution Rule

Before running terminal commands:

* Explain what the command does.
* Explain why it is needed.
* Wait for approval if the command changes files, installs dependencies, deletes files, formats the project, or affects Git.

Read-only commands such as listing files may be proposed, but still explain them clearly.

## Quality Standard

All code should be:

* Clean
* Readable
* Beginner-friendly
* Modular
* Easy to maintain
* Responsive on desktop and mobile
* Type-safe
* Free from unnecessary complexity

Avoid:

* Overengineering
* Large unrelated refactors
* Duplicate logic
* Hardcoded content scattered across many components
* Unclear file names
* Unused variables
* Unused imports
* Dead code
* Temporary hacks left in place
* Console logs left in production code
* Excessive dependencies

Prefer:

* Small components.
* Clear folder structure.
* Local data files for portfolio content.
* Reusable UI sections.
* Descriptive names.
* Minimal, focused changes.
* Simple CSS/Tailwind patterns.

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

## Testing and Validation Rule

After implementation, run the appropriate validation commands when available.

For this React/Vite project, this usually includes:

* `npm run build`
* `npm run lint` if linting is configured
* `npm test` or equivalent if tests are configured

If tests are not configured, state that clearly and do not pretend they were run.

When changes affect UI behavior, manually review or explain what should be checked in the browser.

Before reporting completion, include:

* What changed.
* Files changed.
* Commands run.
* Results of validation.
* Any remaining risks or follow-up tasks.

## Regression Check Rule

After meaningful changes, verify that the following still work:

* The site starts locally.
* The homepage renders.
* Smooth scrolling / anchor navigation works.
* Hero section is visible.
* About section is visible.
* Education / KAUST section is visible.
* Projects section is visible.
* CV section is visible if implemented.
* Contact section is visible.
* Contact links work if implemented.
* CV link or preview works if implemented.
* Light/dark mode works if implemented.
* Mobile layout does not obviously break.
* Build output succeeds.

## Git and Repository Hygiene

Keep the repository clean.

Do not commit or leave unnecessary generated files.

The `.gitignore` should ignore real generated or temporary files, including common Node/Vite outputs such as:

* `node_modules/`
* `dist/`
* `.vite/`
* `.env`
* `.env.local`
* `.env.*.local`
* log files.
* temporary editor files.
* OS files such as `.DS_Store` and `Thumbs.db`.

Do not ignore important source files.

Do not add large unnecessary files to the repository.

If a generated folder appears after running a build or dev command, update `.gitignore` only when appropriate and explain why.

## Dependency Rule

Before adding a new package:

1. Explain what the package does.
2. Explain why it is needed.
3. Mention whether the same result can be done without it.
4. Wait for approval before installing.

Avoid adding packages for simple features that can be implemented cleanly with React, TypeScript, CSS, or Tailwind.

## File Organization Preference

Prefer a structure similar to:

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

Adjust only if the actual project structure requires it.

## Security and Privacy

Do not expose private information.

Do not include:

* Passwords.
* API keys.
* Private tokens.
* Sensitive personal data.
* Private documents not meant for public GitHub.

Contact links should use public/professional contact information only.

## Communication Style

When responding to Yahya:

* Be direct.
* Keep explanations practical.
* Mention risks when they matter.
* Do not make unnecessary changes.
* Do not hide uncertainty.
* Ask only necessary questions.
* Prefer short plans and focused implementation.

## Final Response Format After Work

When finishing a task, respond with:

1. Summary of what was done.
2. Files changed.
3. Commands run and results.
4. Testing/regression status.
5. Suggested next step.

Do not claim success unless validation actually passed.
