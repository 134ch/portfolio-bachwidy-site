---
title: "27 Nov 2026: Phase 0 foundations"
sidebar_label: "27 Nov 2026: Phase 0 foundations"
sidebar_position: 3
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

## First deploy: three failed builds and the fix

Hosting went on Cloudflare Workers static assets (the Cloudflare-recommended path for new projects). The first deploy took four attempts. Each failure is recorded here because the same trap will catch other Docusaurus sites.

| Attempt | Setup | Result |
| --- | --- | --- |
| 1 | Default build image, Node 24.22.1 | Failed: `Failed to load native binding` from `@swc/html` |
| 2 | Pinned Node 22 with `.node-version` (PR #2) | Failed: same error code, `ERR_SWC_NATIVE_CACHE` |
| 3 | Build command set `SWC_NATIVE_BINDING_CACHE` to a folder in the repo | Failed: the check rejected the folder too |
| 4 | Turned Docusaurus Faster off in `docusaurus.config.ts` (PR #3) | Passed. The site is live on the Workers URL |

![Cloudflare deployments list: two failed builds, then the build from pull request 3 marked Ready](/img/build-log/2026-11-27-cloudflare-builds.png)

![Build 1 log: Docusaurus Faster options need @docusaurus/faster, caused by Failed to load native binding](/img/build-log/2026-11-27-build-1-error.png)

![Build 2 log: SWC native addon user cache failed, cache root has a parent writable by another user](/img/build-log/2026-11-27-build-2-swc-cache-error.png)

What the log showed: the SWC native addon checks the permissions of its cache folder and refuses to run when a parent folder is writable by another user. On Cloudflare's build image, `/opt/buildhome/.cache`, `/tmp` and a folder inside the repo all failed that check. The first error message looked like a Node version problem, which is why attempt 2 was a wrong guess. The full error text sat off-screen to the right in the dashboard log, and reading it was what found the real cause.

Why this site hit it: setting `future.v4: true` turns on Docusaurus Faster by default (`fasterByDefault`). Faster loads `@swc/html`. The fix keeps the other v4 flags and sets `future.faster: false`. Builds are a little slower and the output is the same.

Lesson: when a build works locally and fails in CI, read the whole error line, not the first line, and check which defaults a "future" flag switches on.

## Deploy result

- Build 4 passed and the site serves from the Worker URL. The home page, a docs page and the generated 404 page all load.
- The custom domain `portfolio.bachwidy.site` was added to the Worker. Cloudflare issued its certificate and public DNS returned Cloudflare addresses.
- Checked from 60 locations with check-host.net (including two in Jakarta): all returned `200 OK`.
- The domain still failed in Bach's own Chrome. The likely cause is a cached "not found" answer from a visit made before the DNS record existed. That is a local cache problem, not a site problem. Clearing the browser's DNS cache, or waiting for it to expire, should fix it.
- A wrong guess along the way: the ADR page is at `/docs/adr/docusaurus`, not `/docs/adr/0001-docusaurus`. Docusaurus drops the number prefix from file names. This briefly looked like a site bug and was not one.

## Next

Phase 0 is done. Phase 1 adds the checks: Vale, markdownlint, lychee, and a GitHub Actions workflow that builds the site on every pull request. That workflow would have caught the Cloudflare build failure before merge.
