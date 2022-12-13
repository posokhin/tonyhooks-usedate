import type { Config } from 'jest';

/** @type {import('ts-jest').JestConfigWithTsJest} */
const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
};

export default config;
