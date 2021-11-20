module.exports = {
  env: {
    'browser': true,
    'es2021': true,
  },
  globals: {
    window: true,
    module: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest-dom/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    'ecmaFeatures': {
      'jsx': true,
    },
    'ecmaVersion': 13,
    'sourceType': 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'jest-dom',
    'testing-library',
  ],
  rules: {
    '@typescript-eslint/no-explicit-any': 'off'
  },
  overrides: [
    {
      'files': ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      'extends': ['plugin:testing-library/react'],
    },
  ],
};
