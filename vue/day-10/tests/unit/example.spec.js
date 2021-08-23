import { add, upperCase } from '@/utils/helper'

describe('add function tests', () => {
  test('check if adding two numbers returns correct output', () => {
    expect(add(2, 3)).toBe(5)
  })
  test('check if uppercase function converts the string to uppercase', () => {
    expect(upperCase('test')).toBe('TEST')
  })
})
