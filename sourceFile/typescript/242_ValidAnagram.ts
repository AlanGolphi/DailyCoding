// @algorithm @lc id=242 lang=typescript
// @title valid-anagram
// @test("anagram","nagaram")=true
// @test("rat","car")=false
function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;
  const alphaArr = Array.from({ length: 26 }, () => 0);
  const aCharCodeAt = "a".charCodeAt(0);
  for (let i = 0; i < s.length; i++) {
    alphaArr[s.charCodeAt(i) - aCharCodeAt]++;
    alphaArr[t.charCodeAt(i) - aCharCodeAt]--;
  }
  if (alphaArr.some((i) => i !== 0)) return false;
  return true;
}
