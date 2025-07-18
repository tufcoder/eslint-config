import js from '@eslint/js'
import globals from 'globals'
import * as tseslint from '@typescript-eslint/eslint-plugin'
import * as tsParser from '@typescript-eslint/parser'
import { defineConfig } from 'eslint/config'
import prettierPlugin from 'eslint-plugin-prettier'
import prettierConfig from 'eslint-config-prettier'

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
    plugins: { js, prettier: prettierPlugin, '@typescript-eslint': tseslint },
    extends: ['js/recommended', 'plugin:@typescript-eslint/recommended', prettierConfig],
    parser: tsParser,
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
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
    languageOptions: { globals: globals.node },
  },
])
