const { add } = require('../src/buggy');

describe('add関数のテスト', () => {
  test('正の数の足し算', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('負の数の足し算', () => {
    expect(add(-1, -1)).toBe(-2);
  });

  test('ゼロとの足し算', () => {
    expect(add(0, 5)).toBe(5);
    expect(add(5, 0)).toBe(5);
  });
});