// @algorithm @lc id=13 lang=typescript
// @title roman-to-integer
// @test("III")=3
// @test("LVIII")=58
// @test("MCMXCIV")=1994
function romanToInt(s: string): number {
  type RomanKey = "I" | "V" | "X" | "L" | "C" | "D" | "M";
  const RomanValMap: Record<RomanKey, number> = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let sum = 0;
  for (let i = 0; i < s.length; i++) {
    if (
      i < s.length - 1 &&
      RomanValMap[s[i] as RomanKey] < RomanValMap[s[i + 1] as RomanKey]
    ) {
      sum -= RomanValMap[s[i] as RomanKey];
    } else {
      sum += RomanValMap[s[i] as RomanKey];
    }
  }
  return sum;
}
