# Bach Widy Portfolio

Source for `portfolio.bachwidy.site`, a documentation-style portfolio. It holds case studies, articles, work evidence, services and contact details, and it documents how it was built.

## Principles

- Content is plain Markdown in Git. Git is the single source of truth.
- Every step of the build is documented in `docs/build-log/`.
- Every decision is recorded in `docs/adr/`.
- A tool is claimed as a skill only after it has produced evidence.

## Requirements

- Node.js 20 or later (built and tested on Node 22)
- npm

## Run locally

```bash
npm install
npm start
```

The site opens at `http://localhost:3000`.

## Build

```bash
npm run build
```

The static site is written to `build/`. The build fails on broken links.

## Structure

| Path | Contents |
| --- | --- |
| `docs/` | All site pages, in Markdown |
| `docs/about-this-build/` | Documentation plan, style guide, content inventory |
| `docs/adr/` | Decision records |
| `docs/build-log/` | One entry per work session |
| `src/` | Home page and theme styling |
| `.github/` | Pull request template |

## Contributing

Read [CONTRIBUTING.md](./CONTRIBUTING.md) for the workflow. The writing rules are in the [style guide](./docs/about-this-build/style-guide.md).

## Built with

[Docusaurus](https://docusaurus.io/) 3.10.1. See [ADR-0001](./docs/adr/0001-docusaurus.md) for the reasons.
