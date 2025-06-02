import { defineConfig } from 'eslint/config';
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import typescriptEslintParser from '@typescript-eslint/parser';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';

export default defineConfig([
  ...tseslint.config(eslint.configs.recommended, tseslint.configs.recommended),
  {
    ignores: ['node_modules/', 'dist/'],
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      parser: typescriptEslintParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      globals: {
        module: 'readonly',
        process: 'readonly',
        __dirname: 'readonly',
      },
    },
    plugins: {
      react: pluginReact,
      'react-hooks': pluginReactHooks,
    },
    settings: {
      react: {
        version: 'detect', // Auto-detect React version
      },
    },
    rules: {
      'no-unused-vars': 'off',
      '@typescript-eslint/no-empty-interface': 'off',
      'no-underscore-dangle': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-empty-object-type': 'off',
      '@typescript-eslint/no-unused-expressions': 'off',
      '@typescript-eslint/no-unused-vars': ['warn'],
      'no-empty-pattern': 'off',
      'no-useless-constructor': ['warn'],
      'react/no-unused-state': ['warn'],
      'react/state-in-constructor': ['error', 'always'],
      'react/no-deprecated': ['error'],
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'error',
      'no-plusplus': ['error'],
      'prefer-template': ['error'],
      'jsx-quotes': ['error', 'prefer-single'],
      'react/prop-types': [
        'error',
        { ignore: ['history', 'location', 'match', 'name', 'className', 'style', 'children'] },
      ],
      'prefer-const': [
        'error',
        {
          destructuring: 'any',
          ignoreReadBeforeAssign: false,
        },
      ],
      'lines-between-class-members': [
        'error',
        'always',
        {
          exceptAfterSingleLine: true,
        },
      ],
      'react/static-property-placement': [
        'error',
        'property assignment',
        {
          propTypes: 'static public field',
          defaultProps: 'static public field',
        },
      ],
    },
  },
]);
