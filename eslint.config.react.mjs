import js from '@eslint/js'
import globals from 'globals'
import * as tseslint from '@typescript-eslint/eslint-plugin'
import * as tsParser from '@typescript-eslint/parser'
import { defineConfig } from 'eslint/config'
import prettierPlugin from 'eslint-plugin-prettier'
import prettierConfig from 'eslint-config-prettier'
import reactPlugin from 'eslint-plugin-react'

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    plugins: { js, prettier: prettierPlugin, react: reactPlugin, '@typescript-eslint': tseslint.default ?? tseslint },
    extends: [
      'js/recommended',
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended',
      prettierConfig,
    ],
    parser: tsParser.default ?? tsParser,
    languageOptions: { globals: globals.browser },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      'prettier/prettier': [
        'error',
        {
          semi: false,
          singleQuote: true,
          trailingComma: 'all',
          printWidth: 100,
          tabWidth: 2,
          arrowParens: 'always',
          endOfLine: 'lf',
        },
      ],
    },
  },
])
