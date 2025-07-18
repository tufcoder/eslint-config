# @tufcoder/eslint-config 🎉

A shareable ESLint and Prettier configuration for JavaScript and TypeScript projects, following Tufcoder's code style and best practices.

## 🚀 Quick Install

Install ESLint and this config package:
```sh
npm install --save-dev eslint @tufcoder/eslint-config
```

Then, install the required peer dependencies for your project type:

- 🟢 **Node.js:**
  ```sh
  npm install --save-dev @eslint/js @typescript-eslint/eslint-plugin @typescript-eslint/parser globals eslint-plugin-prettier eslint-config-prettier
  ```
- ⚛️ **React:**
  ```sh
  npm install --save-dev @eslint/js @typescript-eslint/eslint-plugin @typescript-eslint/parser globals eslint-plugin-prettier eslint-config-prettier eslint-plugin-react
  ```

> ⚠️ Why is this needed? 
> npm/yarn and ESLint require that plugins and parsers are installed in the consumer project, even when using a shared config package.

## ✨ Features

- ESLint recommended rules
- Prettier integration for code formatting
- TypeScript support
- Node.js globals
- React support (see below)

## 🛠️ Usage

### 🟢 Node.js projects

Create a file named `eslint.config.mjs` in your project root with the following content:

```js
import config from '@tufcoder/eslint-config/node'
export default config
```

### ⚛️ React projects

Create a file named `eslint.config.mjs` in your project root with the following content:

```js
import config from '@tufcoder/eslint-config/react'
export default config
```

## 💾 VS Code: Format on Save

To automatically format your files on save in VS Code, add the following to your workspace or user `settings.json`:

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit",
  }
}
```

## ⚙️ Prettier Customization

If you want to customize Prettier rules, create a `.prettierrc.json` in your project root. For example, you can override or add options like:

```json
{
  "bracketSpacing": false, // Remove espaços entre chaves: {foo: bar}
  "jsxSingleQuote": true, // Usa aspas simples em JSX
  "proseWrap": "always", // Sempre quebra linhas em textos longos
  "htmlWhitespaceSensitivity": "ignore", // Ignora sensibilidade a espaços em HTML
  "quoteProps": "consistent" // Adiciona aspas em todas as propriedades quando necessário
}
```

## 🧹 Formatting

To automatically fix and format your code, run:

```sh
npx eslint . --fix
```

## 📄 License

MIT © [Oswaldo Castro](https://github.com/tufcoder)
