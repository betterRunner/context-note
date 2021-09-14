# Context-Note Contributing Guide

Hi! Thank you for joining me to build context-note together.

## Pull Request Guidelines

- Checkout a topic branch from the relevant branch, e.g. `master`, and merge back against that branch.

- If adding a new feature:

  - Provide a convincing reason to add this feature. Ideally, you should open a suggestion issue first and have it approved before working on it.

- If fixing bug:

  - Provide a detailed description of the bug in the PR. Live demo preferred.

- It's OK to have multiple small commits as you work on the PR - GitHub can automatically squash them before merging.

- Commit messages must follow the [commit message convention](./commit-convention.md) so that changelogs can be automatically generated.

## Development Setup

Tags: `Chrome Extension`, `Vue3`, `Vite`, `element-plus`

You will need [Yarn](https://classic.yarnpkg.com/en/docs/cli/install/)/

After cloning the repo, run:

```bash
# install dependencies
yarn
```

### Build extension dist folder and load it in chrome browser

Since chrome extension does not support hrm debugging (so far as I know), we need to build the code as a dist folder and load it from chrome browser, you can read more [here](https://support.google.com/chrome_webstore/answer/2664769?hl=en) about how to load the dist folder and run the extension.

```bash
# build extension in dev mode, where you can check source code and console info
yarn dev

# build extension in prod mode, which is used when you finished development and ready to release it
yarn build
```
