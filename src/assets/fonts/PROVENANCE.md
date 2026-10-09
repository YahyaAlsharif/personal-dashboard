# Font provenance

Self-hosted so the site renders the same typeface on every platform, without a
third-party font request. Both faces are variable (weights 100 to 900) and
licensed under the SIL Open Font License 1.1; the licence texts sit beside the
files.

| File | Family | Subset | Source |
| --- | --- | --- | --- |
| `inter-latin-var.woff2` | Inter | Latin | Google Fonts (`fonts.gstatic.com/s/inter/v20`) |
| `noto-sans-arabic-var.woff2` | Noto Sans Arabic | Arabic | Google Fonts (`fonts.gstatic.com/s/notosansarabic/v33`) |

Noto Sans Arabic carries the Arabic script only; Latin text inside Arabic copy
(names, tools, numbers) stays in Inter. The Arabic file is declared with a
`unicode-range`, so browsers download it only when Arabic text is on the page.
