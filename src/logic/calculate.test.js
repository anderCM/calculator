/* eslint-disable import/no-extraneous-dependencies */
import { describe, expect, test } from '@jest/globals';
import calculate from './calcute';

describe('Calculate module', () => {
  test('Should return object', () => {
    // arrange
    const obj = {
        total: 1,
        next: 1,
        operation: '+'
    };
    const buttonName = 'AC';
    // act
    const result = calculate(obj, buttonName);
    // assert
    expect(typeof result).toBe('object');
  });

  test('Clear values', () => {
    // arrange
    const obj = {
        total: 1,
        next: 1,
        operation: '+'
    };
    const buttonName = 'AC';
    // act
    const result = calculate(obj, buttonName);
    // assert
    expect(result).toStrictEqual({total: null, next: null, operation: null});
  });

});