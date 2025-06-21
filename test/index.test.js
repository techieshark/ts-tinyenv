import { describe, it, expect } from 'vitest';
import { env } from '../src/index.js';

describe('env function', () => {
  process.env.TEST_VAR = 'test-value';

  it('returns the value of an environment variable', () => {
    expect(env('TEST_VAR')).toBe('test-value');
  });

  it('throws an error if the environment variable is not defined', () => {
    expect(() => env('NON_EXISTENT_VAR')).toThrow("Missing: process.env['NON_EXISTENT_VAR'].");
  });
});
