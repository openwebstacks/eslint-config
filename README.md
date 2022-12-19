<p align="center"><img src=".github/art/social.png" alt="Social Card of ESLint Config"></p>

[![npm version][npm-version-src]][npm-version-href]
[![GitHub Actions][github-actions-src]][github-actions-href]
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![npm downloads][npm-downloads-src]][npm-downloads-href]
<!-- [![Codecov][codecov-src]][codecov-href] -->

# @ow3/eslint-config

Forked from [`@ow3/eslint-config`](https://github.com/antfu/eslint-config)

- Single quotes, no semi
- Auto fix for formatting (aimed to be used as standalone without Prettier)
- Designed to work with TypeScript, Vue out-of-box (React opt-in)
- Lint also for json, yaml, markdown
- Sorted imports, dangling commas
- Reasonable defaults, best practices, only one-line of config
- **Style principle**: Minimal for reading, stable for diff

###### Changes in this fork

- Type-Safe Error Handling
- Improved component library linting & formatting
- Stacks Support
- Laravel Support
- Other minor additions, i.e. `no-constant-binary-expression` usage

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

Install [VS Code ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and create `.vscode/settings.json`, and add the following setting:

```json
{
  "prettier.enable": false,
  "editor.formatOnSave": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

### TypeScript Aware Rules

Type aware rules are enabled when a `tsconfig.eslint.json` is found in the project root, which will introduce some stricter rules into your project. If you want to enable it while have no `tsconfig.eslint.json` in the project root, you can change tsconfig name by modifying `ESLINT_TSCONFIG` env. 

```js
// .eslintrc.js
process.env.ESLINT_TSCONFIG = 'tsconfig.json'

module.exports = {
  extends: '@ow3'
}
```

## Extended Reading

Learn more about the context - [Why I don't use Prettier](https://antfu.me/posts/why-not-prettier).

## Check Also

- [stacksjs/stacks](https://github.com/stacksjs/stacks) - Stacks - The modern way to create & distribute component libraries
- [stacksjs/vue-starter](https://github.com/stacksjs/vue-starter) - Starter template for Vue libraries
- [stacksjs/web-components-starter](https://github.com/stacksjs/web-components-starter) - Starter template for Web Component libraries
- [stacksjs/composable-starter](https://github.com/stacksjs/composable-starter) - Starter template for Composable libraries
- [stacksjs/ts-starter](https://github.com/stacksjs/ts-starter) - Starter template for TypeScript libraries

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

[github-actions-src]: https://img.shields.io/github/workflow/status/ow3org/eslint-config/CI/main?style=flat-square
[github-actions-href]: https://github.com/ow3org/eslint-config/actions?query=workflow%3Aci
