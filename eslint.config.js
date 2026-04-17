import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import { defineConfig } from 'eslint/config';
import eslintConfigPrettier from 'eslint-config-prettier/flat';
import astro from 'eslint-plugin-astro';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
    plugins: { js },
    extends: ['js/recommended'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  ...tseslint.configs.recommended,
  eslintConfigPrettier,

  {
    files: ['**/*.astro'],
    plugins: {
      astro,
    },
    languageOptions: {
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    extends: ['plugin:astro/recommended'],
  },
]);
