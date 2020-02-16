module.exports = {
    roots: ['<rootDir>/src'],
    transform: {
      '\\.(ts|tsx)?$': 'babel-jest',
    },
    testMatch: ['<rootDir>/src/**/?(*.)test.js'],   // looks for your test
    moduleFileExtensions: [ 'js', 'json', 'node'],
    testPathIgnorePatterns: ['/node_modules/', '/public/'],
    setupFilesAfterEnv: [
      '@testing-library/jest-dom/extend-expect',
      '@testing-library/react/cleanup-after-each'
    ],  // sets ut test files
    collectCoverageFrom: [
        '**/*.{js,jsx}',
        '!**/node_modules/**',
        '!**/styles.js',
        '!**/styles/**',
        '!**/assets/**',
        '!<rootDir>/public/**'
      ],
      coverageThreshold: {
        global: {
          branches: 75,
          functions: 75,
          lines: 75,
          statements: 75
        }
      },
  };