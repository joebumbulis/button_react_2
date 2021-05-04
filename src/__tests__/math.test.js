import {
  sum, sub, multiply, divide,
} from '../math';

describe('tests addition problems', () => {
  test('adds 3 + 2 to equal 5', () => {
    expect(sum(3, 2)).toEqual(5);
  });

  test('adds 3 + 3 to equal 6', () => {
    expect(sum(3, 3)).toEqual(6);
  });

  test('adds 10 + 2 to equal 12', () => {
    expect(sum(10, 2)).toEqual(12);
  });

  test('adds 3 + 7 to equal 10', () => {
    expect(sum(3, 7)).toEqual(10);
  });
});

describe('tests subtraction', () => {
  test('subtracts 3 - 2 to equal 1', () => {
    expect(sub(3, 2)).toEqual(1);
  });

  test('subtracts 10 - 2 to equal 8', () => {
    expect(sub(10, 2)).toEqual(8);
  });

  test('subtracts 3 - 5 to equal -2', () => {
    expect(sub(3, 5)).toEqual(-2);
  });

  test('subtracts 12 - 2 to equal 10', () => {
    expect(sub(12, 2)).toEqual(10);
  });
});

describe('tests multiplication problems', () => {
  test('multiplies 3 * 2 to equal 6', () => {
    expect(multiply(3, 2)).toEqual(6);
  });

  test('multiplies 8 * 2 to equal 16', () => {
    expect(multiply(8, 2)).toEqual(16);
  });

  test('multiplies 3 * 3 to equal 9', () => {
    expect(multiply(3, 3)).toEqual(9);
  });

  test('multiplies 10 * 2 to equal 20', () => {
    expect(multiply(10, 2)).toEqual(20);
  });
});

describe('tests division problems', () => {
  test('divides 6 / 2 to equal 3', () => {
    expect(divide(6, 2)).toEqual(3);
  });

  test('divides 36 / 6 to equal 6', () => {
    expect(divide(36, 6)).toEqual(6);
  });

  test('divides 6 / 3 to equal 2', () => {
    expect(divide(6, 3)).toEqual(2);
  });

  test('divides 6 / 6 to equal 1', () => {
    expect(divide(6, 6)).toEqual(1);
  });
});
