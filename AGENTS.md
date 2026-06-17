# AGENTS.md

## Project Purpose

This repository is for a static, serverless personal dashboard / portfolio website for Yahya Al-Sharif.

The site should present:

* Yahya’s personal introduction.
* Software Engineering and AI background.
* KAUST Academy AI journey.
* Projects such as ESAS and Home AI.
* Skills and tools.
* CV preview/download.
* Contact links for LinkedIn and email.

The project must remain simple, clean, and easy to deploy as a static website.

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
* Optional lightweight animation library, only if needed

Do not introduce extra libraries unless they clearly improve the project and are explained before installation.

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

* Small components
* Clear folder structure
* Local data files for portfolio content
* Reusable UI sections
* Descriptive names
* Minimal, focused changes

## UI and Design Standard

The website should feel polished and modern, but not overly complex.

Design expectations:

* Clean dashboard-style layout.
* Strong hero section.
* Clear section hierarchy.
* Smooth spacing.
* Good typography.
* Mobile-friendly layout.
* Professional color usage.
* Accessible contrast.
* Buttons and links should be obvious.
* Animations should be subtle and not distracting.

Do not add flashy effects that hurt readability, performance, or professionalism.

## Content Rules

The portfolio should present Yahya honestly.

Do not claim that a project is completed if it is planned, in progress, or only conceptual.

Use clear labels such as:

* Completed
* In progress
* Planned
* Academic project
* Graduation project

For KAUST Academy, keep the wording professional and accurate.

For ESAS, describe it as a graduation project focused on authentic Saudi tourism experiences.

For Home AI, describe it as a privacy-focused AI project if included before completion.

## Testing and Validation Rule

After implementation, run the appropriate validation commands when available.

For a React/Vite project, this usually includes:

* `npm run build`
* `npm run lint` if linting is configured
* `npm test` or equivalent if tests are configured

If tests are not configured, state that clearly and do not pretend they were run.

When changes affect UI behavior, manually review or explain what should be checked in the browser.

Before reporting completion, include:

* What changed
* Files changed
* Commands run
* Results of validation
* Any remaining risks or follow-up tasks

## Regression Check Rule

After meaningful changes, verify that the following still work:

* The site starts locally.
* The homepage renders.
* Navigation or section scrolling works.
* Main sections are still visible.
* Contact links still work.
* CV link or preview still works if implemented.
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
* log files
* temporary editor files
* OS files such as `.DS_Store` and `Thumbs.db`

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
```

Adjust only if the actual project structure requires it.

## Security and Privacy

Do not expose private information.

Do not include:

* Passwords
* API keys
* Private tokens
* Sensitive personal data
* Private documents not meant for public GitHub

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
