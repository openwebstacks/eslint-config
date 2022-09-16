<p align="center"><img src=".github/art/social.png" alt="Social Card of ESLint Config"></p>

[![npm version][npm-version-src]][npm-version-href]
[![GitHub Actions][github-actions-src]][github-actions-href]
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
<!-- [![npm downloads][npm-downloads-src]][npm-downloads-href] -->
<!-- [![Codecov][codecov-src]][codecov-href] -->

# @ow3/eslint-config

Forked from [`@antfu/eslint-config`](https://github.com/antfu/eslint-config)

- Single quotes, no semi
- Auto fix for formatting (aimed to be used standalone without Prettier)
- TypeScript, Vue, React out-of-box
- Lint also for json, yaml, markdown
- Sorted imports, dangling commas for cleaner commit diff
- Reasonable defaults, best practices, only one-line of config

###### Changes in this fork

- Improved component library linting & formatting
- Stacks support
- Laravel support

## Usage

### Install

```bash
pnpm add -D eslint @ow3/eslint-config
```

### Config

Simply create a `.eslintrc` file in your project root with the following content:

```json
{
  "extends": "@ow3"
}
```

> Please note, you won't need a `.eslintignore` file as it is pre-defined via this preset.

### ESLint Scripts

Simply add the following to your `package.json`:

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
}
```

### VS Code Integration

Create `.vscode/settings.json` in your project root and add the following setting:

```json
{
  "prettier.enable": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

## Check Also

- [ow3org/stacks](https://github.com/ow3org/stacks) - Stacks - The modern way to create & distribute component libraries
- [ow3org/vue-starter](https://github.com/ow3org/vue-starter) - Starter template for Vue libraries
- [ow3org/web-components-starter](https://github.com/ow3org/web-components-starter) - Starter template for Web Component libraries
- [ow3org/composable-starter](https://github.com/ow3org/composable-starter) - Starter template for Composable libraries
- [ow3org/ts-starter](https://github.com/ow3org/ts-starter) - Starter template for TypeScript libraries

## 📈 Changelog

Please see our [releases](https://github.com/ow3org/eslint-config/releases) page for more information on what has changed recently.

## 🏝 Community

For help, discussion about best practices, or any other conversation that would benefit from being searchable:

[Discussions on GitHub](https://github.com/ow3org/eslint-config/discussions)

For casual chit-chat with others using this package:

[Join the Open Web Discord Server](https://discord.ow3.org)

## 📄 License

The MIT License (MIT). Please see [LICENSE](LICENSE.md) for more information.

Made with ❤️

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/@ow3/eslint-config?style=flat-square
[npm-version-href]: https://npmjs.com/package/@ow3/eslint-config

[npm-downloads-src]: https://img.shields.io/npm/dm/@ow3/eslint-config?style=flat-square
[npm-downloads-href]: https://npmjs.com/package/@ow3/eslint-config

[github-actions-src]: https://img.shields.io/github/workflow/status/openwebstacks/eslint-config/CI/main?style=flat-square
[github-actions-href]: https://github.com/openwebstacks/eslint-config/actions?query=workflow%3Aci
