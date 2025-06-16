const { add } = require('./calculator');

test('returns 0 for an empty string', () => {
  expect(add("")).toBe(0);
});

test('returns number for a single number', () => {
  expect(add("1")).toBe(1);
});

test('returns sum of two numbers', () => {
  expect(add("1,2")).toBe(3);
});