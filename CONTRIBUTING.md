# Contributing

This repository has one author, and it still works through branches and pull requests. The point is to practise the review step a documentation team uses.

## Workflow

1. Create a branch from `main`. Name it `phase-N-short-topic` or `content-short-topic`.
2. Make one small change.
3. Run `npm run build` and fix every error. The build fails on broken links.
4. Add or update a build log entry in `docs/build-log/`.
5. Add a decision record in `docs/adr/` if the change makes or changes a decision.
6. Commit with a clear message in the imperative, for example `Add content inventory`.
7. Open a pull request. Fill in the template and read your own diff as a reviewer would.
8. Merge when the checklist is complete.

## Writing rules

- Follow the [style guide](./docs/about-this-build/style-guide.md).
- Use plain Markdown and GitHub-style alerts. Do not use MDX components in content pages.
- Give each page one content type.

## Definition of done

A change is done when:

- The build passes.
- The page follows the style guide.
- Sources are linked, with an as-of date where facts can change.
- The build log entry exists.

## Checks

Automated prose, link and Markdown checks arrive in Phase 1. Until then, the build is the only automated check and the pull request checklist covers the rest.
