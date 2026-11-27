# Contributing

This repository has one author, and it still works through branches and pull requests. The point is to practise the review step a documentation team uses.

## Workflow

1. Create a branch from `main`. Name it `phase-N-short-topic` or `content-short-topic`.
2. Make one small change.
3. Run the checks in [Checks](#checks) and fix every error.
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

Every pull request runs four checks in GitHub Actions (`.github/workflows/docs-checks.yml`). Merge only when all four pass.

| Check | Tool | Fails on | Config |
| --- | --- | --- | --- |
| Build site | Docusaurus, TypeScript | Build errors, broken internal links, type errors | `docusaurus.config.ts` |
| Markdown lint | markdownlint-cli2 | Any rule violation | `.markdownlint-cli2.jsonc` |
| Prose style | Vale | Errors only. Warnings and suggestions show as annotations | `.vale.ini`, `.vale/styles/House/` |
| External links | lychee | Dead external links | `lychee.toml` |

Run the same checks locally before you push:

```bash
npm run build
npx markdownlint-cli2
vale sync && vale docs README.md CONTRIBUTING.md
```

Vale is not an npm package. Install it from the [Vale installation page](https://vale.sh/docs/install), or with `pip install vale`.

To switch a Vale rule off on purpose, wrap the lines in Vale's comment markers and say why in a comment. The style guide source does this for the lists that quote banned words, so copy it from there. See [Vale comments](https://vale.sh/docs/topics/config/#markup-based-configuration).
