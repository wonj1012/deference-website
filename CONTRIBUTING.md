# Contributing to Decipher

We love your input! We want to make contributing to this project as easy and transparent as possible.

## Contribution recogniton

We use [All Contributors](https://allcontributors.org/docs/en/specification) specification to handle recognitions.

## Summary of the contribution flow

The following is a summary of the ideal contribution flow. Please, note that Pull Requests can also be rejected by the maintainers when appropriate.

```
    ┌───────────────────────┐
    │                       │
    │    Open an issue      │
    │  (a bug report or a   │
    │   feature request)    │
    │                       │
    └───────────────────────┘
               ⇩
    ┌───────────────────────┐
    │                       │
    │  Open a Pull Request  │
    │   (only after issue   │
    │     is approved)      │
    │                       │
    └───────────────────────┘
               ⇩
    ┌───────────────────────┐
    │                       │
    │   Your changes will   │
    │     be merged and     │
    │ published on the next │
    │        release        │
    │                       │
    └───────────────────────┘
```

## Code of Conduct

AsyncAPI has adopted a Code of Conduct that we expect project participants to adhere to. Please [read the full text](./CODE_OF_CONDUCT.md) so that you can understand what sort of behaviour is expected.

## Our Development Process

We use Github to host code, to track issues and feature requests, as well as accept pull requests.

## Issues

We use GitHub issues to track public bugs. Please ensure your description is clear and has sufficient instructions to be able to reproduce the issue.

## Bug Reports and Feature Requests

Please use our issues templates that provide you with hints on what information we need from you to help you out.

## Pull Requests

**Please, make sure you open an issue before starting with a Pull Request, unless it's a typo or a really obvious error.** Pull requests are the best way to propose changes to the specification.

## Conventional commits

Our repositories follow [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/#summary) specification. Releasing to GitHub and NPM is done with the support of [semantic-release](https://semantic-release.gitbook.io/semantic-release/).

Pull requests should have a title that follows the specification, otherwise, merging is blocked. If you are not familiar with the specification simply ask maintainers to modify. You can also use this cheatsheet if you want:

- `fix: ` prefix in the title indicates that PR is a bug fix and PATCH release must be triggered.
- `feat: ` prefix in the title indicates that PR is a feature and MINOR release must be triggered.
- `docs: ` prefix in the title indicates that PR is only related to the documentation and there is no need to trigger release.
- `chore: ` prefix in the title indicates that PR is only related to cleanup in the project and there is no need to trigger release.
- `test: ` prefix in the title indicates that PR is only related to tests and there is no need to trigger release.
- `refactor: ` prefix in the title indicates that PR is only related to refactoring and there is no need to trigger release.

What about MAJOR release? just add `!` to the prefix, like `fix!: ` or `refactor!: `

Prefix that follows specification is not enough though. Remember that the title must be clear and descriptive with usage of [imperative mood](https://chris.beams.io/posts/git-commit/#imperative).

Happy contributing :heart:

## License

When you submit changes, your submissions are understood to be under the same Apache 2.0 License that covers the project. Feel free to contact the maintainers if that's a concern.

## References

This document was adapted from the open-source contribution guidelines for [Facebook's Draft](https://github.com/facebook/draft-js/blob/master/CONTRIBUTING.md).
