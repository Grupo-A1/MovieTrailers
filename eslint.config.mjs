import { Linter } from 'eslint';

export default [
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: {
        require: 'readonly',
        process: 'readonly',
        module: 'readonly',
        console: 'readonly'
      },
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-undef': 'error',
    },
  },
  {
    files: ['**/*.test.js', '**/__tests__/**/*.js'], // Ajusta según la estructura de tus archivos de test
    languageOptions: {
      globals: {
        describe: 'readonly',
        it: 'readonly',
        expect: 'readonly'
      },
    },
  },
];
