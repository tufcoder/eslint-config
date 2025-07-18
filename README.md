# @tufcoder/eslint-config

A shareable ESLint and Prettier configuration for JavaScript and TypeScript projects, following Tufcoder's code style and best practices.

## Features

- ESLint recommended rules
- Prettier integration for code formatting
- TypeScript support
- Node.js globals

## Installation

First, install ESLint and this config:

```sh
npm install --save-dev eslint @tufcoder/eslint-config
```

> **Note:** If you see peer dependency warnings, install the suggested packages as well:
> ```sh
> npm install --save-dev @eslint/js typescript-eslint globals eslint-plugin-prettier eslint-config-prettier
> ```

## Usage

Create a file named `eslint.config.mjs` in the root of your project with the following content:

```js
import config from '@tufcoder/eslint-config'
export default config
```

If you want to customize Prettier rules, create a `.prettierrc.json` in your project root:

```json
{
  "semi": false,
  "singleQuote": true,
  "trailingComma": "all",
  "printWidth": 100,
  "tabWidth": 2,
  "arrowParens": "always",
  "endOfLine": "lf"
}
```

## Formatting

To automatically fix and format your code, run:

```sh
npx eslint . --fix
```

## License

MIT © Oswaldo
