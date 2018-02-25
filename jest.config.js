module.exports = {
  transform: {
    '\\.(js|jsx)$': 'babel-jest',
    '\\.(gif|ttf|eot|svg)$': '<rootDir>/config/jest/fileTransformer',
  },
  verbose: true,
  collectCoverage: true,
  coverageDirectory: undefined,
  setupFiles: [
    './config/jest/polyfillConfig',
    './config/jest/adapterConfig',
  ],
};
