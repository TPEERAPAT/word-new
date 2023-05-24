const nextJest = require('next/jest');

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
});

const customJestConfig = {
  moduleNameMapper: {
    // Handle module aliases (this will be automatically configured for you soon)
    '^@/(.*)$': '<rootDir>/src/$1',

    '^@/public/(.*)$': '<rootDir>/public/$1',
    // can read components, redux, assets, types, styles
    '^@components/(.*)$': '<rootDir>/src/components/$1',
    '^@redux/(.*)$': '<rootDir>/src/redux/$1',
    '^@assets/(.*)$': '<rootDir>/src/assets/$1',
    '^#types/(.*)$': '<rootDir>/src/types/$1',

    // Handle SVGR loading
    '^.+\\.(svg)$': '<rootDir>/__test__/__mocks__/svg.tsx',
  },
  setupFilesAfterEnv: ['./jest.setup.js'],
  // clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: [
    './src/**/*.{js,jsx,ts,tsx}',
    '!./src/**/_*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
  ],
  // coverageThreshold: {
  //   global: {
  //     branches: 30,
  //     functions: 30,
  //     lines: 30,
  //     statements: 30,
  //   },
  // },
  testEnvironment: 'jest-environment-jsdom',
};

module.exports = createJestConfig(customJestConfig);
