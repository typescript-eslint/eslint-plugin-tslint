# `@typescript-eslint/eslint-plugin-tslint`

> ESLint plugin that wraps a TSLint configuration and lints the whole source using TSLint.

[![NPM Version](https://img.shields.io/npm/v/@typescript-eslint/eslint-plugin-tslint.svg?style=flat-square)](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin-tslint)
[![NPM Downloads](https://img.shields.io/npm/dm/@typescript-eslint/eslint-plugin-tslint.svg?style=flat-square)](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin-tslint)

> ❌ **Per [What About TSLint?](https://typescript-eslint.io/lintingtroubleshooting/TSLint.mdx), we highly recommend migrating off TSLint.**
> See [typescript-eslint.io](https://typescript-eslint.io) for general documentation on typescript-eslint, the tooling that allows you to run ESLint and Prettier on TypeScript code.

## Installation

```sh
yarn add -D @typescript-eslint/eslint-plugin-tslint
```

## Usage

Configure in your ESLint config file:

```js
{
  "plugins": [
    "@typescript-eslint/tslint"
  ],
  "parserOptions": {
      "project": "tsconfig.json",
  },
  "rules": {
    "@typescript-eslint/tslint/config": ["warn", {
      "lintFile": "", // path to tslint.json of your project
      "rules": {
        // tslint rules (will be used if `lintFile` is not specified)
      },
      "rulesDirectory": [
        // array of paths to directories with rules, e.g. 'node_modules/tslint/lib/rules' (will be used if `lintFile` is not specified)
      ]
    }],
  }
}
```

**Note:** The ability to automatically fix problems with `--fix` is unavailable for TSLint rules loaded with this plugin.

## Rules

This plugin contains only a single rule: `@typescript-eslint/tslint/config`.
