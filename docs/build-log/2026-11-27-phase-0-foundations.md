---
title: "27 Nov 2026: Phase 0 foundations"
sidebar_label: "27 Nov 2026: Phase 0 foundations"
sidebar_position: 2
---

## Goal

Set up the repository, a working Docusaurus site and the foundation documents: documentation plan, style guide, content inventory, decision records, build log and pull request template.

## What was done

1. Scaffolded Docusaurus 3.10.1 with the classic template and TypeScript.
2. Removed the template tutorial pages and sample blog posts.
3. Disabled the blog until Phase 2. The sample posts were the only content, and an empty blog adds nothing.
4. Replaced the template home page with a short landing page.
5. Added `remark-github-admonitions-to-directives` so GitHub-style alerts render as Docusaurus admonitions.
6. Wrote the documentation plan, style guide v0, content inventory, ADR-0001 (accepted), ADR-0002 (proposed), this entry, `README.md`, `CONTRIBUTING.md` and a pull request template.

## Commands

```bash
npx create-docusaurus@3.10.1 portfolio-bachwidy-site classic --typescript --skip-install
cd portfolio-bachwidy-site
npm install
npm install remark-github-admonitions-to-directives
npm run build
```

## Decisions

- Docusaurus 3.10.1 is the framework. See [ADR-0001](../adr/0001-docusaurus.md).
- Process documents live under `docs/` (`docs/adr/`, `docs/build-log/`), not at the repository root, so they are published on the site. The plan first listed root-level `adr/` and `build-log/` folders, and this changes that.
- Hosting is still open. See [ADR-0002](../adr/0002-hosting.md).
- The `future.v4` flag stays on, as the scaffold set it.

## Problems

- The repository `134ch/portfolio-bachwidy-site` does not exist yet, and the GitHub token in the workspace was invalid, so the repository could not be created or pushed to from here. The work is committed locally and waits for the repository.
- Placeholder logo, favicon and social card from the template are still in `static/img/`. They are replaced in Phase 2.

## Result

- `npm run build` finished without errors. The build is set to fail on broken links, so all internal links resolve.
- The TypeScript check (`npx tsc`) passed.
- GitHub-style alerts render as Docusaurus admonitions. This was checked in the generated HTML of the home docs page and the style guide, not visually in a browser.
- A search of the source files found no em dashes.
- Not done yet: repository creation, push, pull request, deploy. Each depends on the repository existing.

## Next

1. Create the repository and push this branch.
2. Open the pull request and merge it.
3. Decide hosting (ADR-0002) and deploy the first version to `portfolio.bachwidy.site`.
4. Start Phase 1: Vale, markdownlint, lychee and a GitHub Actions workflow.
