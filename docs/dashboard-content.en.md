# Dashboard Content Outline - English

This file describes the planned English content and section structure for Yahya Al-Sharif’s personal dashboard website.

This is the main content reference for the first implemented version of the dashboard.

Arabic content will be added later in a separate file.

## Overall Website Concept

The website is a single-page personal dashboard / portfolio.

It should introduce Yahya clearly, show his education and AI journey, highlight his projects, provide a CV link, and make it easy to contact him.

The page should feel:

* Modern
* Professional
* Clean
* Dashboard-like
* Lightly polished
* Not overly flashy

The page should use smooth scrolling between sections instead of separate pages.

Main section order:

1. Hero / Greeting
2. About Me
3. Education & KAUST Academy
4. Projects
5. CV
6. Contact
7. Back to Top

## 1. Hero / Greeting Section

Purpose:
Create a strong first impression and immediately explain who Yahya is.

Content to include:

* Personal picture.
* Name: Yahya Al-Sharif.
* Short role/title.
* Short intro sentence.
* Navigation buttons that scroll to page sections.

Suggested hero title:

Hi, I’m Yahya Al-Sharif.

Suggested subtitle:

Software Engineering Student | AI Learner | Project Coordinator

Suggested short intro:

I’m a Software Engineering student at Umm Al-Qura University with a growing focus on artificial intelligence, practical software development, and building projects that connect technical ideas with real user needs.

Hero buttons:

* About Me
* Education
* Projects
* Contact

Button behavior:

* Buttons should scroll to sections on the same page.
* Do not navigate to separate pages.
* Button order should remain stable if Arabic support is added later.

Suggested anchors:

* About Me → `#about`
* Education → `#education`
* Projects → `#projects`
* Contact → `#contact`

Visual notes:

* Use a clean profile photo card.
* The hero can be large and visually strong.
* Add a subtle background gradient or soft dashboard-style background.
* Avoid making it too flashy.

## 2. About Me Section

Purpose:
Give visitors a short human introduction before listing education and projects.

Suggested section title:

About Me

Suggested content:

I’m interested in the intersection of software engineering and artificial intelligence: how systems are designed, how users interact with them, and how AI can be used responsibly to solve practical problems.

I enjoy working on projects from the early idea stage through requirements, design, documentation, implementation, testing, and presentation. My current focus is strengthening my skills in software development, AI, and building polished projects that can be clearly explained to others.

Possible highlights:

* Software Engineering student.
* Interested in AI and practical software solutions.
* Comfortable with documentation, planning, and project coordination.
* Learning by building real projects.

Design notes:

* Keep this section short.
* Use one clean card or two balanced cards.
* Avoid long paragraphs.

## 3. Education & KAUST Academy Section

Purpose:
Show Yahya’s academic foundation and emphasize the importance of the KAUST Academy AI journey.

Suggested section title:

Education & AI Journey

### Umm Al-Qura University

Suggested content:

Bachelor of Computer Software Engineering
Umm Al-Qura University
Expected Graduation: 2027

Key points:

* Maintaining a strong academic record.
* Studying software engineering, requirements engineering, software testing, system analysis, algorithms, data structures, and software development.
* Working on ESAS as a graduation project focused on authentic, locally curated tourism experiences in Saudi Arabia.

### KAUST Academy Artificial Intelligence Specialization

Suggested content:

KAUST Academy has been one of the most important parts of my AI learning journey. Through its multi-stage Artificial Intelligence Specialization, I progressed through foundational AI learning, in-person instruction, advanced AI coursework, and selection into the final AI Summer Program.

Suggested bullets:

* Completed KAUST Academy’s Introduction to Artificial Intelligence stage.
* Completed KAUST Academy’s Advanced Artificial Intelligence stage.
* Studied machine learning foundations, neural networks, deep learning concepts, PyTorch basics, and convolutional neural networks.
* Prepared for advanced AI topics through additional learning in CNNs, computer vision, and machine learning fundamentals.
* Advanced to the final AI Summer Program after completing the first three stages.
* Accepted for Stage 4 of the KAUST Academy AI Summer Program at King Khalid University in Abha.
* Stage 4 should be described as upcoming/in progress until Yahya completes it.

Suggested careful Stage 4 wording:

I am preparing to begin Stage 4 of the KAUST Academy AI Summer Program at King Khalid University in Abha, where I expect to continue learning through advanced AI topics and practical project work under KAUST Academy guidance.

Important accuracy rule:
Do not describe Stage 4 as completed until Yahya says it is completed.

Possible KAUST Academy topics to mention:

* Machine learning
* Neural networks
* Deep learning
* Convolutional neural networks
* Computer vision
* Natural language processing
* Reinforcement learning
* Deep unsupervised learning
* Practical AI projects

Certificates to mention:

* Introduction to Artificial Intelligence — KAUST Academy
* Advanced Artificial Intelligence — KAUST Academy

Design notes:

* This section can use timeline cards.
* Suggested timeline:

  1. Umm Al-Qura University
  2. KAUST Academy Stage 1 / Foundations
  3. KAUST Academy Introduction to AI
  4. KAUST Academy Advanced AI
  5. KAUST Academy AI Summer Program
* Make KAUST visually important but still professional.
* Do not overclaim or make it sound like a completed internship before completion.

## 4. Projects Section

Purpose:
Show practical work and project direction.

Suggested section title:

Projects

### ESAS - Experience Saudi As a Saudi

Status:
Graduation Project

Role:
Coordinator

Suggested description:

ESAS is a graduation project focused on presenting authentic, locally curated tourism experiences in Saudi Arabia. The project developed from brainstorming and requirements gathering into system design, documentation, prototype development, and a functional demo.

Suggested bullets:

* Served as project coordinator.
* Contributed to brainstorming, planning, requirements gathering, and system direction.
* Helped prepare software requirements, system workflows, use cases, diagrams, and SRS documentation.
* Supported backend and frontend implementation planning and demo readiness.
* Presented the project poster and live demo at the INJAZ 2026 Graduation Projects Exhibition.

Suggested tags:

* Software Engineering
* Graduation Project
* Requirements Engineering
* Documentation
* Backend / Frontend
* Project Coordination

### Home AI Project

Status:
Planned / Current Project

Suggested description:

Home AI is a privacy-focused AI project idea exploring how home assistant commands can be processed more safely by keeping speech recognition on-device and using a privacy gate to decide what should or should not leave the home.

Suggested bullets:

* Focuses on privacy-aware AI.
* Explores on-device speech-to-text.
* Considers a classifier/gating system for private versus non-private commands.
* Planned as an AI-focused project connected to real-world privacy concerns.

Suggested tags:

* AI
* Privacy
* Speech-to-Text
* Edge AI
* Research-Oriented Project

### Personal Dashboard

Status:
Current Project

Suggested description:

This website itself is a public personal dashboard built with React, TypeScript, Vite, and Tailwind CSS. It is designed to present my background, projects, CV, and contact links in a clean static website that can be deployed without a backend.

Suggested tags:

* React
* TypeScript
* Vite
* Tailwind CSS
* Static Website
* Portfolio

Design notes:

* Use project cards.
* Each project card should show status clearly.
* Do not make unfinished projects look completed.
* Keep project descriptions concise.

## 5. CV Section

Purpose:
Make it easy for visitors to view or download Yahya’s CV.

Suggested section title:

CV

Suggested content:

Want the full version of my background, education, certificates, projects, and skills? You can view or download my CV here.

CV actions:

* View CV
* Download CV

Source notes:

* The CV content reference is in `docs/cv.md`.
* The CV PDF should be placed or copied into `public/cv/` before implementing the final link.
* If the PDF currently exists under `docs/`, use it as the source reference but serve the public download from `public/cv/`.

Design notes:

* Use a clean CV card.
* Optionally show a CV preview later.
* For the first version, a clean button link is enough.
* Do not overcomplicate this section.

## 6. Contact Section

Purpose:
Give visitors two clear ways to contact Yahya.

Suggested section title:

Contact

Suggested content:

If you’d like to connect, collaborate, or reach out about opportunities, the best way to contact me is through LinkedIn or email.

Contact links:

* LinkedIn link from `docs/links.md`
* Email link from `docs/links.md`

Buttons:

* Connect on LinkedIn
* Send Email

Email behavior:

* Use a `mailto:` link.

Design notes:

* Keep this section simple.
* Use two clear contact buttons.
* Make sure links are easy to click on mobile.
* Do not include private contact information beyond the public email and LinkedIn.

## 7. Back to Top

Purpose:
Allow users to quickly return to the hero section after reaching the bottom.

Suggested button text:

Back to Top

Behavior:

* Scroll smoothly to the top or hero section.
* Should be visible near the bottom of the page.
* Can also appear as a small floating button later if desired, but the first version can keep it simple.

## Skills Content

Skills can appear in About, Projects, or a separate compact area if needed.

Suggested skill groups:

Frontend:

* React
* TypeScript
* Tailwind CSS
* Flutter

Backend:

* Java
* Spring Boot
* PostgreSQL

AI / Machine Learning:

* Python
* Machine learning fundamentals
* Deep learning fundamentals
* Neural networks
* Convolutional neural networks
* Computer vision concepts
* Applied AI problem-solving

Software Engineering:

* Requirements engineering
* Software requirements specification
* System design
* Software testing
* Documentation
* Project coordination

Tools:

* Git
* GitHub
* VS Code
* IntelliJ
* Docker
* Postman
* Codex

Design note:
Skills should not dominate the page. They should support the main story.

## Light / Dark Mode Content Behavior

The same English content should work in both light and dark mode.

Design expectations:

* Light mode should feel clean and bright.
* Dark mode should feel polished and modern.
* Both modes should use readable contrast.
* Do not make one mode look unfinished.

## Future Arabic Content Behavior

Arabic content will be added later.

When Arabic is added:

* Keep the same dashboard structure.
* Keep the same button order.
* Translate the text.
* Use RTL direction for Arabic paragraphs.
* Align Arabic text naturally to the right.
* Do not globally mirror the entire layout unless Yahya approves it.

## Tone Rules

The dashboard tone should be:

* Professional
* Confident
* Honest
* Student-friendly
* Not exaggerated
* Not too formal
* Not too casual

Avoid:

* Overclaiming.
* Saying unfinished work is complete.
* Making KAUST Stage 4 sound completed before it is completed.
* Making the site sound like a company instead of a personal dashboard.

## First Implementation Priority

The first implementation should focus on:

1. One-page layout.
2. Hero section.
3. Anchor scroll buttons.
4. About section.
5. Education / KAUST section.
6. Projects section.
7. CV section.
8. Contact section.
9. Light/dark mode if simple.
10. Back-to-top button.

Do not implement Arabic yet.
Do not add routing yet.
Do not add a backend.
Do not add unnecessary packages.
