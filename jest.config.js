module.exports = {
  verbose: true,
  collectCoverage: true,
  coverageDirectory: undefined,
  setupFiles: [
    './config/jest/polyfillConfig',
    './config/jest/adapterConfig',
  ],
};
