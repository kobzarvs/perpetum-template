/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '.+\\.(css|styl|less|sass|scss)$': 'jest-css-modules-transform',
    // '^.+\\.(ts|tsx|js|jsx)$': '<rootDir>/node_modules/babel-jest',
    // '^.*node_modules/~/.*\\.(ts|tsx|js|jsx)$': 'ts-jest',
  },
  'transformIgnorePatterns': [
    // 'node_modules/(?!~/.*)',
  ],
};
