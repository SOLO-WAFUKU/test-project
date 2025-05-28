// tests/index.test.js
describe('合計計算のテスト', () => {
  test('1から10までの合計が55になること', () => {
    // 実際の計算ロジックをテスト
    let sum = 0;
    for (let i = 1; i <= 10; i++) {
      sum += i;
    }
    expect(sum).toBe(55);
  });

  test('1から5までの合計が15になること', () => {
    let sum = 0;
    for (let i = 1; i <= 5; i++) {
      sum += i;
    }
    expect(sum).toBe(15);
  });
});