
import { describe, it, expect } from 'vitest';
import { isPrime } from '../math.js';

describe('isPrime', () => {
  it('returns false for 0 and 1', () => {
    expect(isPrime(0)).toBe(false);
    expect(isPrime(1)).toBe(false);
  });

  it('returns true for 2', () => {
    expect(isPrime(2)).toBe(true);
  });

  it('returns false for 9', () => {
    expect(isPrime(9)).toBe(false);
  });

  it('returns true for 13', () => {
    expect(isPrime(13)).toBe(true);
  });

  it('returns false for negative numbers', () => {
    expect(isPrime(-5)).toBe(false);
  });
});
it('returns false for 4', () => {
  expect(isPrime(4)).toBe(false);
});

it('returns true for 17', () => {
  expect(isPrime(17)).toBe(true);
});

it('returns false for decimal numbers', () => {
  expect(isPrime(2.5)).toBe(false);
});