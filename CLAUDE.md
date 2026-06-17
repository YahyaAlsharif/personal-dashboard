# CLAUDE.md

## Claude Code Instructions

This file contains the working rules for Claude Code in this repository.

Follow these instructions carefully. Treat them as the main project instructions unless Yahya explicitly overrides them in the chat.

This project is a static, serverless personal dashboard / portfolio website for Yahya Al-Sharif.

## Project Purpose

The website should present:

* Yahya’s personal introduction.
* Software Engineering and AI background.
* KAUST Academy AI journey.
* Projects such as ESAS and Home AI.
* Skills and tools.
* CV preview/download.
* Contact links for LinkedIn and email.

The project should stay simple, professional, public, and easy to deploy.

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
* Optional lightweight animation library only if useful and approved

Do not introduce unnecessary tools, frameworks, or dependencies.

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

* Clean
* Readable
* Modular
* Type-safe
* Beginner-friendly
* Maintainable
* Responsive
* Focused on the requested change

Avoid:

* Overengineering
* Big unrelated refactors
* Duplicate code
* Unused imports
* Unused variables
* Dead code
* Temporary hacks
* Leftover console logs
* Unclear naming
* Scattered hardcoded content
* Unnecessary dependencies

Prefer:

* Small components
* Clear data files
* Reusable sections
* Simple styling patterns
* Descriptive names
* Minimal changes
* Easy-to-review diffs

## Design Quality Rules

The website should look like a polished personal dashboard, not a plain default template.

Design expectations:

* Strong hero section.
* Clean layout.
* Good spacing.
* Professional typography.
* Clear cards/sections.
* Mobile-friendly behavior.
* Accessible contrast.
* Subtle animations.
* Clear contact buttons.
* No distracting effects.

Do not sacrifice readability or performance for flashy visuals.

## Content Accuracy Rules

Do not exaggerate Yahya’s experience.

Clearly distinguish between:

* Completed projects
* In-progress projects
* Planned projects
* Academic projects
* Graduation projects

Do not describe unfinished work as completed.

ESAS should be described as a graduation project focused on authentic Saudi tourism experiences.

Home AI, if included, should be described as planned/current unless Yahya says it is completed.

KAUST Academy content should be professional, accurate, and not overstated.

## Testing and Validation

After implementation, validate the project.

For React/Vite, use appropriate commands such as:

* `npm run build`
* `npm run lint` if available
* `npm test` or equivalent if available

If linting or tests are not configured, say that clearly.

Do not claim tests passed if they were not run.

After meaningful UI changes, check or explain how to check:

* Local startup
* Homepage rendering
* Section visibility
* Contact links
* CV preview/download
* Desktop layout
* Mobile layout
* Production build

## Regression Expectations

Before reporting completion, make sure the change did not break:

* Main page rendering
* Navigation or section scrolling
* Hero section
* About section
* Projects section
* KAUST section
* Skills section
* CV section
* Contact section
* Responsive layout
* Static build

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
* log files
* editor temporary files
* `.DS_Store`
* `Thumbs.db`

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
```

Use the actual project structure when different, but keep it simple.

## Privacy and Security

Do not expose private data.

Do not include:

* Passwords
* API keys
* Private tokens
* Sensitive personal data
* Private documents not meant for public GitHub

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
