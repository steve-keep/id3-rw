export default {
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  transformIgnorePatterns: [
    '/node_modules/(?!id3-rw).+\\.js$',
  ],
  moduleNameMapper: {
    '#(.*)': '<rootDir>/node_modules/$1',
  }
};
