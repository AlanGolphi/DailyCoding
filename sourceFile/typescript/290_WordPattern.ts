// @algorithm @lc id=290 lang=typescript
// @title word-pattern
// @test("abba","dog cat cat dog")=true
// @test("abba","dog cat cat fish")=false
// @test("aaaa","dog cat cat dog")=false
function wordPattern(pattern: string, s: string): boolean {
  const patternArr = pattern.split("");
  const strArr = s.split(" ");
  if (patternArr.length === 0 && strArr.length === 0) return true;
  if (patternArr.length !== strArr.length) return false;
  const pMap = new Map();
  const sMap = new Map();
  for (let i = 0; i < patternArr.length; i++) {
    if (
      pMap.get(patternArr[i]) &&
      pMap.get(patternArr[i]) !== `${patternArr[i]}${strArr[i]}`
    )
      return false;
    if (
      sMap.get(strArr[i]) &&
      sMap.get(strArr[i]) !== `${strArr[i]}${patternArr[i]}`
    )
      return false;
    pMap.set(patternArr[i], `${patternArr[i]}${strArr[i]}`);
    sMap.set(strArr[i], `${strArr[i]}${patternArr[i]}`);
  }
  return true;
}
