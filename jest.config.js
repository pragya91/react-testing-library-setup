module.exports = {
    roots: ['<rootDir>/src'],
    // transform: {
    //   '\\.(ts|tsx|js)?$': 'babel-jest',
    // },
    testMatch: ['<rootDir>/src/**/?(*.)test.js'],   // looks for your test
    //testMatch: ['<rootDir>/src/App.test.js'],   // looks for your test
    moduleFileExtensions: [ 'js', 'json', 'node'],
    testPathIgnorePatterns: ['/node_modules/', '/public/'],
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'], // runs after jest is setup in the env
    collectCoverageFrom: [
        '**/*.{js,jsx}',
        '!**/node_modules/**',
        '!**/styles.js',
        '!<rootDir>/src/styles/**',
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