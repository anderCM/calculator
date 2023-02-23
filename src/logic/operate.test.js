/* eslint-disable import/no-extraneous-dependencies */
import { describe, expect, test } from '@jest/globals';
import operate from './operate';

describe('Operate module', () => {
  test('Add 2 numbers', () => {
    // arrange
    const numb1 = 1;
    const numb2 = 2;
    const operation = '+';
    // act
    const result = operate(numb1, numb2, operation);
    // assert
    expect(result).toBe('3');
  });

  test('Subtrac 2 numbers', () => {
    // arrange
    const numb1 = 10;
    const numb2 = 2;
    const operation = '-';
    // act
    const result = operate(numb1, numb2, operation);
    // assert
    expect(result).toBe('8');
  });

  test('Multiply 2 numbers', () => {
    // arrange
    const numb1 = 10;
    const numb2 = 2;
    const operation = 'x';
    // act
    const result = operate(numb1, numb2, operation);
    // assert
    expect(result).toBe('20');
  });

  test('Divide 2 numbers', () => {
    // arrange
    const numb1 = 10;
    const numb2 = 2;
    const operation = '÷';
    // act
    const result = operate(numb1, numb2, operation);
    // assert
    expect(result).toBe('5');
  });

  test('Unknown operation throws error', () => {
    // arrange
    const numb1 = 10;
    const numb2 = 2;
    const operation = '/';
    // act
    // assert
    expect(() => operate(numb1, numb2, operation)).toThrowError();
  });
});
