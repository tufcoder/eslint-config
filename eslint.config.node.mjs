import js from '@eslint/js'
import globals from 'globals'
import { defineConfig } from 'eslint/config'
import prettierPlugin from 'eslint-plugin-prettier'
import prettierConfig from 'eslint-config-prettier'
import * as parser from '@typescript-eslint/parser'

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
    plugins: { js, prettier: prettierPlugin },
    extends: ['js/recommended', prettierConfig],
    languageOptions: {
      parser,
      globals: globals.node,
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        projectService: true,
        warnOnUnsupportedTypeScriptVersion: true,
        ecmaFeatures: {
          jsx: false,
          globalReturn: false,
        },
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
