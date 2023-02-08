/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  clearMocks: true,
  moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json"],
  roots: ["<rootDir>/src"],
  preset: 'ts-jest',
  testEnvironment: 'node',
};
